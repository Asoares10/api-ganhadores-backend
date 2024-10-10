<template>
  <section class="premiacao">
    <h2>Prêmios</h2>
    <div class="carousel">
      <div class="item" v-for="item in 5" :key="item">
        <p>Prêmio {{ item }}</p>
        <div class="placeholder-image">Imagem do Prêmio</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Premiacao"
};
</script>

<style scoped>
.carousel {
  display: flex;
  overflow-x: auto;
}
.item {
  flex: 0 0 200px;
  margin: 10px;
  padding: 20px;
  background-color: #f0f0f0;
}
.placeholder-image {
  background-color: #ccc;
  height: 150px;
  width: 100%;
}
</style>
