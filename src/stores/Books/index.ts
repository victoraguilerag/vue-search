import type { Module } from "vuex";
import type { Book, BooksStore } from "./book.interface";
import { initialBooksState } from "./book.models";

const findBooks = (items: Book[], query: string) =>
  items.filter((a) =>
    a.title.toLowerCase().startsWith(query.toLocaleLowerCase())
  );

const BooksModule: Module<BooksStore["state"], any> = {
  namespaced: true,
  state: {
    items: initialBooksState,
    searchResults: [],
    previousQuery: "",
  },
  getters: {
    books: (state: BooksStore["state"]) => state.items,
    searchResults: (state: BooksStore["state"]) => state.searchResults,
  },
  mutations: {
    searchResults(state: BooksStore["state"], query: string) {
      state.query = query;
    },
  },
  actions: {
    search({ state }, query: string) {
      const { items } = state;
      const subset =
        state.previousQuery?.length > 0 &&
        query.startsWith(state.previousQuery);

      const results = findBooks(subset ? state.searchResults : items, query);
      console.log(results);
      state.searchResults = results;
      state.previousQuery = query;
    },
  },
};

export default BooksModule;
