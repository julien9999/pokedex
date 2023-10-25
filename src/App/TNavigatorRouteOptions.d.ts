import { ParamListBase } from '@react-navigation/native';

type TNavigatorRouteOptions<ParamList extends ParamListBase> = {
  screen: keyof ParamList;
  params?: ParamList[keyof ParamList];
};

export default TNavigatorRouteOptions;
