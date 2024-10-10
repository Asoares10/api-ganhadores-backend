<template>
  <div>
    <h2>Lista de Ganhadores</h2>
    <ul v-if="winners.length">
      <li v-for="winner in winners" :key="winner._id">
        {{ winner.name }} - {{ winner.prize }} - {{ new Date(winner.date).toLocaleDateString() }}
      </li>
    </ul>
    <p v-else>Nenhum ganhador encontrado.</p>
  </div>
</template>

<script>
import api from '../api';

export default {
  data() {
    return {
      winners: [],
    };
  },
  mounted() {
    this.fetchWinners();
  },
  methods: {
    async fetchWinners() {
      try {
        const response = await api.get('/winners');
        this.winners = response.data;
      } catch (error) {
        console.error('Erro ao buscar ganhadores:', error);
      }
    },
  },
};
</script>