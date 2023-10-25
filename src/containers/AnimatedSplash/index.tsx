import {useFluxible} from 'hooks';
import LottieView from 'lottie-react-native';
import {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {TMainStackNavigationProp} from 'src/App';
import {TSplashStackNavigationProp} from 'src/App/splash';
import styled from 'styled-components/native';

interface IProps {
  navigation: TMainStackNavigationProp & TSplashStackNavigationProp;
}

export default function Window({navigation}: IProps) {
  const {jwt} = useFluxible({items: ['jwt']});

  const onAnimationFinish = () => {
    // if (jwt) {
    return navigation.replace('TabsStack', {
      screen: 'Home',
      params: {},
    });
    // }
    // navigation.replace('OnBoarding');
  };

  useEffect(() => {
    setTimeout(onAnimationFinish, 2500);
  }, []);

  return (
    <Background>
      <LottieView
        style={styles.lottie}
        source={require('../../../assets/lottie/pokemon.json')}
        autoPlay
        loop
      />
    </Background>
  );
}

export const Background = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

const styles = StyleSheet.create({
  lottie: {height: 300, width: 300},
});
