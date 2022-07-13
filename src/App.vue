<script setup>
import PageHeader from "./components/PageHeader.vue";
import PageFooter from "./components/PageFooter.vue";
</script>
<template>
  <PageHeader></PageHeader>
  <RouterView></RouterView>
  <PageFooter></PageFooter>
</template>
<style>
* {
  padding: 0px;
  margin: 0px;
  list-style-type: none;
}
a {
  color: inherit;
  text-decoration: inherit;
}
#app {
  font-size: 16px;
  height: 100vh;
  width: 100%;

  display: grid;
  grid-template-rows: 10vh 1fr 10vh;
}
table {
  color: white;
  width: 80%;
  font-size: 1.2rem;
  border: 2px groove black;
  border-collapse: collapse;
  text-align: center;
}

table thead {
  background-color: black;
}

table tbody tr:nth-child(odd) {
  background-color: rgb(50, 50, 50);
}
table tbody tr:nth-child(even) {
  background-color: rgb(100, 100, 100);
}
</style>
