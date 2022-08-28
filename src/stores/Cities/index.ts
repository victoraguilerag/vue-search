import type { Module } from "vuex";
import type { City, CitiesStore } from "./cities.interface";
import { initialCitiesState } from "./cities.models";

const findCities = (items: City[], query: string) =>
  items.filter((a) => a.toLowerCase().startsWith(query.toLowerCase()));

const CitiesModule: Module<CitiesStore["state"], any> = {
  namespaced: true,
  state: {
    items: initialCitiesState,
    searchResults: [],
    previousQuery: "",
  },
  getters: {
    cities: (state: CitiesStore["state"]) => state.items,
    searchResults: (state: CitiesStore["state"]) => state.searchResults,
  },
  mutations: {
    searchResults(state: CitiesStore["state"], query: string) {
      state.query = query;
    },
  },
  actions: {
    search({ state }, query: string) {
      const { items } = state;
      const subset =
        state.previousQuery?.length > 0 &&
        query.startsWith(state.previousQuery);

      const results = findCities(subset ? state.searchResults : items, query);

      state.searchResults = results;
      state.previousQuery = query;
    },
  },
};

export default CitiesModule;
