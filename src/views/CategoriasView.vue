<script></script>
<template>
  <main id="main">
    <div class="cadastro">
      <h1 style="font-size: 3rem; color: black">Página de categorias</h1>
      <hr class="cadastro-title-hr" />
      <h1 style="font-size: 2rem; color: black; margin-bottom: 5px">
        Inserir os dados
      </h1>
      <div class="cadastro-inputs">
        <input placeholder="Categoria" class="cadastro-input" type="text" />
        <input placeholder="Descrição" class="cadastro-input" type="text" />
      </div>
    </div>
    <div class="listagem">
      <table>
        <h1 style="font-size: 2rem; color: black; margin-bottom: 5px">
          Listagem de categorias
        </h1>
        <thead>
          <tr>
            <th>ID</th>
            <th>Categoria</th>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Ação</td>
            <td>Descrição</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Romance</td>
            <td>Descrição</td>
          </tr>
        </tbody>
      </table>
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
  gap: 3vh;

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
  height: 3vh;
  padding: 2px;
  border: 2px solid black;
  border-radius: 10px;
  font-size: 1rem;
  text-align: center;
}
.cadastro-option:hover {
  background-color: gray;
  cursor: pointer;
}

.listagem {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
