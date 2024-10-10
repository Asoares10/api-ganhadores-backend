<template>
  <footer>
    <p>© 2023 Grupo POLGO. Todos os direitos reservados.</p>
    <ul>
      <li><a href="#">Termos de Uso</a></li>
      <li><a href="#">Política de Privacidade</a></li>
      <li><a href="#">Redes Sociais</a></li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: 'SiteFooter',
};
</script>

<style scoped>
footer {
  margin-top: 30px;
  background-color: #f1f1f1;
  padding: 10px 0;
  text-align: center;
}

ul {
  list-style: none;
  padding: 0;
  margin: 10px 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  text-decoration: none;
  color: purple;
}
</style>