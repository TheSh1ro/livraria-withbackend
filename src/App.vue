<script setup></script>
<template>
  <RouterView></RouterView>
</template>
<style>
* {
  padding: 0px;
  margin: 0px;
  list-style-type: none;
}
#app {
  font-size: 16px;
  height: 100vh;
  width: 100%;

  display: grid;
  grid-template-rows: 10vh 100vh 10vh;
}
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
  justify-content: space-between;
  align-items: center;
}
.navbar-user {
  display: flex;
  gap: 30px;
}
.navbar-item {
  padding: 15px;
  border-radius: 10px;
}
.navbar-item:hover {
  cursor: pointer;
  background-color: rgb(50, 50, 50);
}
#main {
  padding: 3vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;

  color: whitesmoke;
  background-color: crimson;
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
#footer {
  color: white;
  background-color: black;
}
</style>
