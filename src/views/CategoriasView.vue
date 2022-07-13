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
    <div class="cadastro">
      <h1 style="font-size: 3rem">Página de categorias</h1>
      <hr class="cadastro-title-hr" />
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
      <h1 style="font-size: 2rem; color: black; margin-bottom: 5px">
        Listagem de categorias
      </h1>
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
  justify-content: flex-start;
  align-items: stretch;
  gap: 5vh;

  color: black;
  background-color: rgb(20, 120, 150);
}
.cadastro {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.cadastro-title-hr {
  margin: 5px 0px 20px 0px;
  width: 50rem;
}
.cadastro-inputs {
  padding: 3vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5px;

  background-color: rgb(175, 29, 29);
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
  border: 0px;
  border-radius: 8px;
  background-color: rgb(50, 50, 50);
  color: white;
  cursor: pointer;
}
.cadastro-button:active {
  background-color: rgb(150, 150, 150);
}

.listagem {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>