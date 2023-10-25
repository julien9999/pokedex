export type StoreKeys = 'user' | 'favorites';

export type Store = {
  user?: {};
  favorites?: [];
};

export const store: Store = {
  user: {},
  favorites: [],
};

export default store;
