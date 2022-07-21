<script>
export default {
  data() {
    return {
      categorias: [
        {
          id: 1,
          categoria: "Ação",
          descricao: "Muito tiro",
        },
      ],
    };
  },
  methods: {
    salvar() {
      if (this.novo_categoria.length > 2) {
        this.categorias.push({
          id: 1,
          categoria: this.novo_categoria,
          descricao: this.novo_descricao,
        });
        // Resetando inputs
        this.novo_categoria = "";
        this.novo_descricao = "";
      }
    },
  },
};
</script>
<template>
  <main id="main">
    <div class="title-div">
      <h1 class="title">Página de categorias</h1>
    </div>
    <div class="cadastro">
      <div class="cadastro-inputs">
        <h1 style="font-size: 2rem; margin-bottom: 5px">Inserir os dados</h1>
        <input
          v-model="novo_categoria"
          placeholder="Categoria"
          class="cadastro-input"
          type="text"
        />
        <input
          v-model="novo_descricao"
          placeholder="Descrição"
          class="cadastro-input"
          type="text"
        />
        <button @click="salvar" class="cadastro-button">Confirmar</button>
      </div>
    </div>
    <div class="listagem">
      <h1 style="font-size: 2rem; margin-bottom: 5px">Listagem de livros</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Categoria</th>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="categoria in categorias" :key="categoria.id">
            <td>{{ categoria.id }}</td>
            <td>{{ categoria.categoria }}</td>
            <td>{{ categoria.descricao }}</td>
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
  gap: 5vh;

  color: black;
  background-color: rgb(20, 120, 150);
}
.title-div {
  grid-area: title;

  display: flex;
  flex-direction: column;
  align-items: center;

  color: black;
}
.title {
  font-size: 3rem;
}
.cadastro {
  grid-area: cadastro;

  display: flex;
  flex-direction: column;
  align-items: center;
}
.cadastro-inputs {
  padding: 3vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5px;

  background-color: rgb(30, 30, 30, 0.75);
  border: 2px solid white;
  color: white;
  border-radius: 30px;
}
.cadastro-input {
  height: 3vh;
  width: 15rem;
  padding: 2px;
  border: 2px solid black;
  border-radius: 10px;
  font-size: 1rem;
  text-align: center;
  background-color: azure;
}
.cadastro-button {
  margin-top: 5px;
  font-size: 1rem;
  padding: 1vh;
  border: 2px groove black;
  border-radius: 8px;
  background-color: rgb(50, 50, 50);
  color: white;
  cursor: pointer;
}
.cadastro-button:active {
  background-color: rgb(70, 70, 70);
  border: 2px groove gray;
}
.listagem {
  padding: 3vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  gap: 5px;

  background-color: rgb(30, 30, 30, 0.75);
  border: 2px solid white;
  color: white;
  border-radius: 30px;
}
</style>