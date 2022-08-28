export interface Book {
  title: string;
  author: string;
}

export interface BooksState {
  query?: string;
  items: Book[];
  searchResults: Book[];
  previousQuery: string;
}

export interface Getters {
  books: (state: BooksState) => Book[];
}

export interface Mutations {
  searchResults: (state: BooksState, query: string) => void;
}

export interface Actions {
  search: (state: BooksState, query: string) => void;
}

export interface BooksStore {
  namespaced: boolean;
  state: BooksState;
  getters: Getters;
  mutations: Mutations;
  actions: Actions;
}
