import CitiesStore from "./Cities";
import BooksStore from "./Books";
import { createStore } from "vuex";

const store = createStore({
  state: {
    search: "",
  },
  modules: {
    cities: CitiesStore,
    books: BooksStore,
  },
  mutations: {
    search: (state, query) => (state.search = query),
  },
  actions: {
    search({ commit, dispatch }, query: string) {
      commit("search", query);
      dispatch("books/search", query);
      dispatch("cities/search", query);
    },
  },
});

export default store;
