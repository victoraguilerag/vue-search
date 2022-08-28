<template>
  <input v-model="input" @input="onChange" autofocus type="text" />
</template>

<script lang="ts">
  import { mapActions, mapState } from "vuex";
  export default {
    data() {
      return { input: "" };
    },
    computed: {
      ...mapState({
        books: (state) => state.books.results || state.books.items,
        cities: (state) => state.books.results || state.cities.items,
      }),
    },
    actions: {
      ...mapActions("", ["search"]),
    },
    methods: {
      onChange() {
        if (this.input.length >= 3) {
          this.$store.dispatch("search", this.input);
        } else {
          this.$store.dispatch("search", " ");
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
