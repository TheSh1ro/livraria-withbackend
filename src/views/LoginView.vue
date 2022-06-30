<script></script>
<template>
  <main id="main">
    <div class="cadastro">
      <h1 style="font-size: 3rem; color: black">Página de Login</h1>
    </div>
  </main>
</template>
<style scoped>
#main {
  padding: 3vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;

  color: whitesmoke;
  background-color: rgb(200, 220, 50);
}
.cadastro {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.cadastro-title-hr {
  margin: 10px 0px 20px 0px;
  width: 50rem;
}
.cadastro-options {
  display: flex;
  flex-direction: row;

  border: 3px groove black;
  font-size: 2rem;
}
.cadastro-option {
  padding: 1vh;
}
.cadastro-option:hover {
  background-color: gray;
  cursor: pointer;
}
</style>
