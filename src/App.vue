<script setup lang="ts">
  import HelloWorld from "./components/HelloWorld.vue";
  // import TheWelcome from "./components/TheWelcome.vue";
  import SearchBar from "./components/SearchBar/SearchBar.vue";
  import ListContainer from "./components/List/ListContainer.vue";
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld msg="Vue Search" />
    </div>
  </header>

  <main class="container">
    <SearchBar />
    <ListContainer />
  </main>
</template>

<style scoped>
  header {
    line-height: 1.5;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }

  main {
    height: 100vh;
    display: flex;
    flex-flow: column;
  }
</style>
