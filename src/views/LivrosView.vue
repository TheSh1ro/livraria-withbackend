<script>
export default {
  data() {
    return {
      livros: [
        {
          id: 1,
          titulo: "A Batalha do Labirinto",
          categoria: "Mitologia",
          editora: "Disney Hyperion",
          quantidade: 1,
          preco: 5.9,
          isbn: 2.1,
        },
      ],
    };
  },
  methods: {
    salvar() {
      if (this.novo_titulo.length > 2) {
        this.livros.push({
          id: 1,
          titulo: this.novo_titulo,
          categoria: this.novo_categoria,
          editora: this.novo_editora,
          quantidade: this.novo_quantidade,
          preco: this.novo_preco,
          isbn: this.novo_isbn,
        });
        // Resetando inputs
        this.novo_titulo = "";
        this.novo_categoria = "";
        this.novo_editora = "";
        this.novo_quantidade = "";
        this.novo_preco = "";
        this.novo_isbn = "";
      }
    },
  },
};
</script>
<template>
  <main id="main">
    <div class="cadastro">
      <h1 style="font-size: 3rem">Página de livros</h1>
      <hr class="cadastro-title-hr" />
      <div class="cadastro-inputs">
        <h1 style="font-size: 2rem; margin-bottom: 5px">Inserir os dados</h1>
        <input
          v-model="novo_titulo"
          placeholder="Título"
          class="cadastro-input"
          type="text"
        />
        <input
          v-model="novo_categoria"
          placeholder="Categoria"
          class="cadastro-input"
          type="text"
        />
        <input
          v-model="novo_editora"
          placeholder="Editora"
          class="cadastro-input"
          type="text"
        />
        <input
          v-model="novo_quantidade"
          placeholder="Quantidade"
          class="cadastro-input"
          type="text"
        />
        <input
          v-model="novo_preco"
          placeholder="Preço"
          class="cadastro-input"
          type="text"
        />
        <input
          v-model="novo_isbn"
          placeholder="ISBN"
          class="cadastro-input"
          type="text"
        />
      <button @click="salvar" class="cadastro-button">Confirmar</button>
      </div>
    </div>
    <div class="listagem">
      <h1 style="font-size: 2rem; color: black; margin-bottom: 5px">
        Listagem de livros
      </h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Categoria</th>
            <th>Editora</th>
            <th>Quantidade</th>
            <th>Preço</th>
            <th>ISBN</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="livro in livros" :key="livro.id">
            <td>{{ livro.id }}</td>
            <td>{{ livro.titulo }}</td>
            <td>{{ livro.categoria }}</td>
            <td>{{ livro.editora }}</td>
            <td>{{ livro.quantidade }}</td>
            <td>{{ livro.preco }}</td>
            <td>{{ livro.isbn }}</td>
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