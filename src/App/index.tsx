import {NavigationContainer} from '@react-navigation/native';
import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';
import {PersistQueryClientProvider} from '@tanstack/react-query-persist-client';
import {invisibleStackHeaderOptions} from 'helper';
// import {useFluxible} from 'hooks';
import React from 'react';
import {Platform, StatusBar} from 'react-native';
import {navigationRef} from 'utils/navigation';
import {colors} from '~constants';

import queryClient, {asyncStoragePersister} from '../utils/query';
import TNavigatorRouteOptions from './TNavigatorRouteOptions';
import TRoutesProps from './TRoutesProps';
import SplashStack from './splash';
import TabsStack from './tabs';

type TMainStackParamList = {
  SplashStack: {screen: string; params?: {}};
  TabsStack: {screen: string; params: {}};
};

export type TMainStackNavigationProp = StackNavigationProp<TMainStackParamList>;
export type TMainStackRoutesProps = TRoutesProps<TMainStackParamList>;
export type TMainStackRouteOptions =
  TNavigatorRouteOptions<TMainStackParamList>;

const Stack = createStackNavigator<TMainStackParamList>();

/**
 * This function returns the Application
 * Navigation Container and Window containing the SwitchNavigator to check if user is logged in or not
 * useEffect is used for the deep Linking
 * @returns {object} the component
 */
function App(): React.JSX.Element | null {
  const linking = {
    prefixes: [],
    config: {
      screens: {},
    },
  };

  React.useEffect(() => {
    StatusBar.setBarStyle('light-content', true);
    Platform.OS === 'android' && StatusBar.setBackgroundColor(colors.white);
  }, []);

  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{persister: asyncStoragePersister}}>
      <NavigationContainer ref={navigationRef} linking={linking}>
        <StatusBar translucent backgroundColor="transparent" />
        <Stack.Navigator>
          <Stack.Screen
            name="SplashStack"
            component={SplashStack}
            options={invisibleStackHeaderOptions}
          />
          <Stack.Screen
            name="TabsStack"
            component={TabsStack}
            options={invisibleStackHeaderOptions}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PersistQueryClientProvider>
  );
}

export default App;
