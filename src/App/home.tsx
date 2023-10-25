import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';
import {defaultHeaderOptions, stackOptions} from 'helper';
import locales from 'locales';
import Home from 'containers/Home';
import Pokemon from 'containers/Pokemon';

import TNavigatorRouteOptions from './TNavigatorRouteOptions';
import TRoutesProps from './TRoutesProps';

export type THomeStackParamList = {
  Home: undefined;
  Pokemon: {};
};

export type THomeStackNavigationProp = StackNavigationProp<THomeStackParamList>;
export type THomeStackRoutesProps = TRoutesProps<THomeStackParamList>;
export type THomeStackRouteOptions =
  TNavigatorRouteOptions<THomeStackParamList>;

const Stack = createStackNavigator<THomeStackParamList>();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={stackOptions}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          ...defaultHeaderOptions,
          title: locales.t('home'),
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
export default HomeStack;
