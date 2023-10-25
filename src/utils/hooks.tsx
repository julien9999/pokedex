import {useGlobalStore} from 'globalStore';
import React from 'react';
import {StoreKeys} from '../constants/store';

export function useFluxible(props?: {items?: StoreKeys[]}) {
  const items = props?.items ?? ['user', 'jwt', 'wallet'];

  const store = useGlobalStore(
    React.useCallback(states => {
      const obj = {};
      for (let i = 0; i < items.length; i++) {
        obj[items[i]] = states[items[i]];
      }

      return obj;
    }, []),
  );

  return store;
}
