import {createNavigationContainerRef} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();
export const globalNavigate = (name: string, params: {}) => {
  if (navigationRef?.isReady()) {
    //@ts-ignore
    navigationRef.navigate(name, params);
  }
};

export default globalNavigate;
