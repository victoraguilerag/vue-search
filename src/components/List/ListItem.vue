<template>
  <li class="listItem">
    <span class="title">{{ text }}</span>
    <span class="type">{{ type }}</span>
  </li>
</template>

<script lang="ts">
  export default {
    props: {
      text: String,
      type: String,
    },
  };
</script>

<style scoped>
  .listItem {
    height: 48px;
    background: whitesmoke;
    padding: 8px;
    font-weight: 400;
    border: 1px solid rgba(200, 200, 200, 0.1);
    display: flex;
    justify-content: space-between;
  }
  .type {
    font-weight: bold;
    margin-right: 16px;
  }
</style>
