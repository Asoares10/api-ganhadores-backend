<template>
  <div id="app">
    <header>
      <img src="@/assets/logo1.png" alt="Logo Grupo" />
      <nav>
        <a href="#">Home</a>
        <a href="#">Como Participar</a>
        <a href="#">Prêmios</a>
        <a href="#">FAQ</a>
        <a href="#">Ganhadores</a>
      </nav>
    </header>

    <main>
      <h1>Bem-vindo ao nosso evento!</h1>
      <button>Cadastrar-se</button>

      <section>
        <WinnerList :winners="winners" />
      </section>

      <section>
        <h2>Cadastrar Ganhador</h2>
        <WinnerForm @winner-added="fetchWinners" />
      </section>
    </main>

    <SiteFooter />
  </div>
</template>

<script>
import WinnerList from './components/WinnerList.vue';
import WinnerForm from './components/WinnerForm.vue';
import SiteFooter from './components/SiteFooter.vue';

export default {
  name: 'App',
  components: {
    WinnerList,
    WinnerForm,
    SiteFooter,
  },
  data() {
    return {
      winners: [],
    };
  },
  methods: {
    async fetchWinners() {
      try {
        const response = await fetch('http://localhost:5000/winners');
        if (response.ok) {
          this.winners = await response.json();
        } else {
          console.error('Erro ao carregar ganhadores');
        }
      } catch (error) {
        console.error('Erro ao carregar ganhadores:', error);
      }
    },
  },
  mounted() {
    this.fetchWinners();
  },
};
</script>

<style>
/* Adicione o estilo para organizar o layout, como centralizar os elementos e ajustar margens */
header {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}

nav {
  margin-top: 10px;
}

nav a {
  margin: 0 15px;
  text-decoration: none;
  color: purple;
}

main {
  text-align: center;
  margin-top: 20px;
}

footer {
  margin-top: 30px;
  background-color: #f1f1f1;
  padding: 10px 0;
  text-align: center;
}
</style>	