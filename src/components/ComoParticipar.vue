<template>
  <section class="como-participar">
    <h2>Como Participar</h2>
    <div class="steps">
      <div v-for="step in 3" :key="step" class="step">
        <p>Etapa {{ step }}</p>
        <p>Descrição da etapa {{ step }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ComoParticipar"
};
</script>

<style scoped>
.como-participar {
  text-align: center;
  padding: 50px;
}
.steps {
  display: flex;
  justify-content: space-around;
}
.step {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
