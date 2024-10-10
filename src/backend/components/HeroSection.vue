<template>
  <section class="hero">
    <div class="hero-content">
            <img src="@/assets/logo1.png" alt="Logo Grupo" class="logo" />
      <nav class="navbar">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Como Participar</a></li>
          <li><a href="#">Prêmios</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Ganhadores</a></li>
        </ul>
      </nav>
      <div class="banner">
        <h1>Bem-vindo ao nosso evento!</h1>
        <button @click="cadastrar">Cadastrar-se</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  methods: {
    cadastrar() {
      alert('Botão de cadastrar clicado!');
    }
  }
}
</script>

<style scoped>
.hero {
  text-align: center;
}

.logo {
  width: 100px;
  margin-bottom: 20px;
}

.navbar ul {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
}

.navbar ul li {
  margin: 0 10px;
}

.navbar ul li a {
  text-decoration: none;
  color: #5e20a4; /* Ajuste a cor conforme necessário */
  font-weight: bold;
}
</style>
