import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';
import {defaultHeaderOptions, stackOptions} from 'helper';
import locales from 'locales';
import Favorites from 'containers/Favorites';
import Pokemon from 'containers/Pokemon';

import TNavigatorRouteOptions from './TNavigatorRouteOptions';
import TRoutesProps from './TRoutesProps';

export type TFavoritesStackParamList = {
  Home: undefined;
  Pokemon: {};
};

export type TFavoritesStackNavigationProp =
  StackNavigationProp<TFavoritesStackParamList>;
export type TFavoritesStackRoutesProps = TRoutesProps<TFavoritesStackParamList>;
export type TFavoritesStackRouteOptions =
  TNavigatorRouteOptions<TFavoritesStackParamList>;

const Stack = createStackNavigator<TFavoritesStackParamList>();

function FavoritesStack() {
  return (
    <Stack.Navigator screenOptions={stackOptions}>
      <Stack.Screen
        name="Favorites"
        component={Favorites}
        options={{
          ...defaultHeaderOptions,
          title: locales.t('favorites'),
        }}
      />
      <Stack.Screen
        name="Pokemon"
        component={Pokemon}
        options={{
          ...defaultHeaderOptions,
          title: '',
        }}
      />
    </Stack.Navigator>
  );
}
export default FavoritesStack;
