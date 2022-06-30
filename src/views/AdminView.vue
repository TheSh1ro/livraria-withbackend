<script></script>
<template>
  <main id="main">
    <div class="cadastro">
      <h1 style="font-size: 3rem; color: black">Página de administração</h1>
      <hr class="cadastro-title-hr" />
      <h1 style="font-size: 2rem; color: black; margin-bottom: 5px">Editar</h1>
      <div class="cadastro-inputs">
        <input placeholder="" class="cadastro-input" type="text" />
        <input placeholder="" class="cadastro-input" type="text" />
        <input placeholder="" class="cadastro-input" type="text" />
        <input placeholder="" class="cadastro-input" type="text" />
        <input placeholder="" class="cadastro-input" type="text" />
        <input placeholder="" class="cadastro-input" type="text" />
      </div>
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
  background-color: rgb(20, 120, 150);
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
.cadastro-inputs {
  width: 60vw;

  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 5px;

}
.cadastro-input {
  flex-grow: 1;
}
.cadastro-option:hover {
  background-color: gray;
  cursor: pointer;
}
</style>
