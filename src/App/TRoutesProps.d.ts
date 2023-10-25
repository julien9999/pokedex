import { ParamListBase, RouteProp } from '@react-navigation/native';

type TRoutesProps<ParamList extends ParamListBase> = {
  [RouteName in keyof ParamList]: RouteProp<ParamList, RouteName>;
};

export default TRoutesProps;
