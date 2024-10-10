const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { body, validationResult } = require('express-validator'); 

const app = express();

// Middleware para verificar a chave de API
app.use((req, res, next) => {
  const apiKey = req.headers['x-api-cara']; // Altere para o nome do cabeçalho correto
  if (apiKey === 'vnrmnhbn') { // Sua chave de API aqui
    next(); // A chave é válida, prosseguir com a solicitação
  } else {
    res.status(403).json({ error: 'Acesso negado. Chave de API inválida.' });
  }
});

// Conectar ao MongoDB
mongoose.connect('mongodb://cluster0.22z90.mongodb.net/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    auth: {
        authSource: 'admin',
        authMechanism: 'MONGODB-X509', // Altere esse valor para 'SCRAM-SHA-1' se necessário
        apiKey: 'vnrmnhbn' // Sua chave de API aqui
    }
});

// Configurar porta
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

const Winner = require('./models/Winner');

// Cadastrar ganhador
// ... (seu código de servidor)

// Cadastrar ganhador
// ... (seu código)

app.post('/winners', 
  // ... (validade de dados)
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log('Erros de validação:', errors.array()); 
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      console.log('Dados da requisição:', req.body);

      const { name, prize, date } = req.body;
      const newWinner = new Winner({ name, prize, date });
      await newWinner.save();
      console.log('Ganhador cadastrado com sucesso:', newWinner); 
      res.status(201).json(newWinner);
    } catch (error) {
      console.error('Erro ao salvar no banco de dados:', error);
      res.status(500).json({ error: 'Erro ao cadastrar ganhador' });
    }
  }
);

// ... (resto do código)

// Remover ganhador
app.delete('/winners/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Winner.findByIdAndDelete(id);
    res.status(204).send();
  } catch (error) {
    res.status(404).json({ error: 'Ganhador não encontrado' });
  }
});