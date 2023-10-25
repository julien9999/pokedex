import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';
import AnimatedSplash from 'containers/AnimatedSplash';

import TNavigatorRouteOptions from './TNavigatorRouteOptions';
import TRoutesProps from './TRoutesProps';

export type TSplashStackParamList = {
  AnimatedSplash: undefined;
  OnBoarding: undefined;
};

export type TSplashStackNavigationProp =
  StackNavigationProp<TSplashStackParamList>;
export type TSplashStackRoutesProps = TRoutesProps<TSplashStackParamList>;
export type TSplashStackRouteOptions =
  TNavigatorRouteOptions<TSplashStackParamList>;

const Stack = createStackNavigator<TSplashStackParamList>();

function SplashStack() {
  return (
    <Stack.Navigator screenOptions={{animationEnabled: false}}>
      <Stack.Screen
        name="AnimatedSplash"
        component={AnimatedSplash}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default SplashStack;
