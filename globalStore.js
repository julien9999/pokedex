import AsyncStorage from '@react-native-async-storage/async-storage';
import {createStore} from 'fluxible-js';
import {createFluxibleHook} from 'react-fluxible';
import {store} from '~constants';

const globalStore = createStore(
  {
    initialStore: store,
    persist: {
      stringify: true,
      asyncStorage: AsyncStorage,
      restore: savedStore => ({
        user: savedStore.user || {},
        favorites: savedStore.favorites || [],
      }),
    },
  },
  () => {
    globalStore.updateStore({initialized: true});
  },
);

export const updateStore = globalStore.updateStore;

export const useGlobalStore = createFluxibleHook(globalStore);

export default globalStore;
