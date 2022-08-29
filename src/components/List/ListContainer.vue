<script lang="ts">
  import { mapActions, mapState } from "vuex";
  import ListItem from "./ListItem.vue";
  export default {
    computed: {
      ...mapState({
        foundBooks: (state: any) => state.books.searchResults,
        books: (state: any) => state.books.items,
        foundCities: (state: any) => state.cities.searchResults,
        cities: (state: any) => state.cities.items,
      }),
    },
    methods: {
      ...mapActions("books", ["search"]),
    },
    components: {
      ListItem,
    },
  };
</script>

<template>
  <ul class="listContainer">
    <ListItem
      v-for="book in foundBooks"
      v-bind:key="book.title"
      :text="book.title"
      type="book"
    />
    <ListItem
      v-for="city in foundCities"
      v-bind:key="city"
      :text="city"
      type="city"
    />
  </ul>
</template>

<style scoped>
  .listContainer {
    list-style: none;
    padding: 0;
  }
</style>
