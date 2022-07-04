<template>
  <header id="header">
    <div class="header-navbar">
      <!-- <div class="navbar-group">
        <img
          class="navbar-logo"
          src="https://portal.ifrn.edu.br/campus/natalzonanorte/noticias/divulgado-resultado-do-concurso-de-logomarca-da-selib/image_preview"
          alt="Livraria"
        />
      </div> -->
      <div class="navbar-group">
        <RouterLink to="/livros" class="navbar-item">Livros</RouterLink>
        <RouterLink to="/categorias" class="navbar-item">Categorias</RouterLink>
        <RouterLink to="/autores" class="navbar-item">Autores</RouterLink>
        <RouterLink to="/editoras" class="navbar-item">Editoras</RouterLink>
      </div>
      <!-- <div class="navbar-group">
        <RouterLink to="/login" class="navbar-item">Login</RouterLink>
        <RouterLink to="/cadastro" class="navbar-item">Cadastro</RouterLink>
      </div> -->
    </div>
  </header>
</template>
<style scoped>
#header {
  display: flex;
  flex-direction: column;

  color: white;
  background-color: black;
  font-size: 1.5rem;
}
.header-navbar {
  margin-inline: 1vw;

  display: flex;
  flex-direction: row;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
}
.navbar-item {
  padding: 15px;
  border-radius: 10px;
}
.navbar-item:hover {
  cursor: pointer;
  background-color: rgb(50, 50, 50);
}
.navbar-logo {
  height: 7vh;
  border-radius: 10px;
}
.navbar-logo:hover {
  cursor: pointer;
}
</style>
