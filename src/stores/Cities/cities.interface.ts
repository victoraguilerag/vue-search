export type City = string;

export interface CitiesState {
  query?: string;
  items: City[];
  searchResults: City[];
  previousQuery: string;
}

export interface Getters {
  cities: (state: CitiesState) => City[];
}

export interface Mutations {
  searchResults: (state: CitiesState, query: string) => void;
}

export interface Actions {
  search: (state: CitiesState, query: string) => void;
}

export interface CitiesStore {
  namespaced: boolean;
  state: CitiesState;
  getters: Getters;
  mutations: Mutations;
  actions: Actions;
}
