import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {Route} from '@react-navigation/native';
import {tabsOptions} from 'helper';
import HomeStack from './home';
import FavsStack from './favorites';

export type AnyProps = {[field: string]: any};

type TRootTabsParamList = {
  HomeStack: AnyProps;
  InterestsStack: AnyProps;
  ReceiveCertificateStack: AnyProps;
  NotificationsStack: AnyProps;
  SettingsStack: AnyProps;
};

type RouteProp = Partial<Route<string>>;
type IScreenOptions = {
  route: RouteProp;
};

export type TRootTabsNavigationProp =
  BottomTabNavigationProp<TRootTabsParamList>;

const Tab = createBottomTabNavigator<TRootTabsParamList>();
const tabOptions = (route: RouteProp) => {
  return {
    headerShown: false,
  };
};

function TabsStack() {
  const screenOptions = ({route}: IScreenOptions) => tabsOptions({route});

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={({route}) => tabOptions(route)}
      />
      <Tab.Screen
        name="FavsStack"
        component={FavsStack}
        options={({route}) => tabOptions(route)}
      />
    </Tab.Navigator>
  );
}
export default TabsStack;
