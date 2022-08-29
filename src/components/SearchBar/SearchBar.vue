<template>
  <input v-model="input" @input="onChange" autofocus type="text" />
</template>

<script lang="ts">
  import { mapActions, mapState } from "vuex";
  export default {
    data: () => {
      return { input: "" };
    },
    computed: {
      ...mapState({
        books: (state: any) => state.books.results || state.books.items,
        cities: (state: any) => state.books.results || state.cities.items,
      }),
    },
    actions: {
      ...mapActions("", ["search"]),
    },
    methods: {
      onChange() {
        if ((this as any).input.length >= 3) {
          (this as any).$store.dispatch("search", (this as any).input);
        } else {
          (this as any).$store.dispatch("search", " ");
        }
      },
    },
  };
</script>

<style scoped>
  input {
    height: 32px;
    margin: 32px auto;
    width: 100vw;
    max-width: 300px;
  }
</style>
