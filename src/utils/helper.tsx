import {Text} from 'components/Text';
import {textStyles} from 'components/Text/components';
import locales from 'locales';
import {Image, Linking, Pressable, StyleSheet} from 'react-native';
import InAppBrowser from 'react-native-inappbrowser-reborn';
//@ts-ignore
import {colors, images} from '~constants';

export const styles = StyleSheet.create({
  stackOptions: {
    backgroundColor: '#fcfeff',
    borderBottomWidth: 0,
    elevation: 0,
    shadowOpacity: 0,
  },
  tabBarLabel: {},
  tabBar: {
    borderTopWidth: 0,
    backgroundColor: colors.black,
  },
  tabBarIcon: {},
  image: {
    width: 22,
    height: 22,
  },
  invisibleStackHeaderOptions: {
    backgroundColor: 'transparent',
    opacity: 1,
  },
  marginRight24Top20: {
    marginRight: 24,
    marginTop: 20,
  },
});

export const tabsOptions = ({route}) => ({
  tabBarActiveTintColor: colors.white,
  tabBarInactiveTintColor: colors.white,
  tabBarLabel: locales.t(route.name),
  tabBarLabelStyle: styles.tabBarLabel,
  tabBarStyle: styles.tabBar,
  tabBarIconStyle: styles.tabBarIcon,
  tabBarIcon: ({focused}: {focused: boolean}) => {
    return (
      <Image style={styles.image} source={images[`${route.name}${focused}`]} />
    );
  },
  // tabBarBackground: () => <BlurView blurType="dark" style={StyleSheet.absoluteFill} />,
});

export const defaultHeaderOptions = {
  headerBackTitle: ' ',
  headerTitleStyle: textStyles.H1,
  headerShadowVisible: false,
  headerStyle: {
    backgroundColor: colors.black,
  },
};

export const stackOptions = {
  headerStyle: styles.stackOptions,
  headerTintColor: colors.white,
};

export const invisibleStackHeaderOptions = {
  headerShown: false,
  cardStyle: styles.invisibleStackHeaderOptions,
};

export const RightButton = ({
  onPress,
  text = locales.t('skip'),
}: {
  onPress: () => void;
  text?: string;
}) => (
  <Pressable
    testID="Pressable"
    onPress={onPress}
    style={styles.marginRight24Top20}>
    <Text type="Button1">{text}</Text>
  </Pressable>
);

export const openBrowser = (url?: string) => {
  return InAppBrowser.isAvailable().then(valid => {
    if (valid) {
      return InAppBrowser.open(url, {
        ephemeralWebSession: false,
        readerMode: false,
        animated: true,
        modalPresentationStyle: 'fullScreen',
        modalTransitionStyle: 'coverVertical',
        modalEnabled: true,
        enableBarCollapsing: false,
        showTitle: true,
        secondaryToolbarColor: 'black',
        enableUrlBarHiding: true,
        enableDefaultShare: true,
        forceCloseOnRedirection: false,
        animations: {
          startEnter: 'slide_in_right',
          startExit: 'slide_out_left',
          endEnter: 'slide_in_left',
          endExit: 'slide_out_right',
        },
      });
    } else {
      return Linking.openURL(url);
    }
  });
};
