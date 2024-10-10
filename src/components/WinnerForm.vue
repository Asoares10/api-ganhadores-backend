<template>
  <div>
    <form @submit.prevent="addWinner">
      <input type="text" v-model="name" placeholder="Nome" required />
      <input type="text" v-model="prize" placeholder="Prêmio" required />
      <input type="date" v-model="date" placeholder="Data" required />
      <button type="submit">Cadastrar Ganhador</button>
    </form>
  </div>
</template>

<script>
import fetch from 'node-fetch';

export default {
  data() {
    return {
      name: '',
      prize: '',
      date: '',
    };
  },
  methods: {
    async addWinner() {
      try {
        const dateString = new Date(this.date).toLocaleDateString('pt-BR', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        });
        const response = await fetch('http://localhost:5000/winners', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'djuqegig' // Atualize a chave de API aqui
          },
          body: JSON.stringify({
            name: this.name,
            prize: this.prize,
            date: dateString,
          }),
        });

        if (response.ok) {
          this.$emit('winner-added');
          this.name = '';
          this.prize = '';
          this.date = '';
          alert('Ganhador cadastrado com sucesso!');
        } else {
          alert('Erro ao cadastrar ganhador');
        }
      } catch (error) {
        console.error('Erro ao cadastrar ganhador:', error);
        alert('Erro ao cadastrar ganhador');
      }
    },
  },
};
</script>