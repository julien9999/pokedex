import LottieView from 'lottie-react-native';
import {
  Dimensions,
  ImageProps,
  ImageSourcePropType,
  StyleProp,
  StyleSheet,
  TouchableOpacityProps,
  ViewProps,
  ViewStyle,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import Spinner from 'react-native-loading-spinner-overlay';
import styled, {css} from 'styled-components/native';
import {colors, scaleFontSize} from '~constants';

const {width: viewportWidth} = Dimensions.get('window');

export type numberStringNull = number | string | null;

export const globalWidth = viewportWidth - 32;
export const rowWidth = globalWidth;
export const singleFieldWidth = rowWidth / 2 - 8;

export const TouchableOpacity = styled.TouchableOpacity<{
  width?: numberStringNull;
}>`
  width: ${({width = 'auto'}) => width};
`;

export const SafeBackground = styled.SafeAreaView`
  background-color: #fff;
  flex: 1;
`;
export const Background = styled.View<{paddingHorizontal?: number}>`
  background-color: white;
  padding-horizontal: ${(props: {paddingHorizontal: number}) =>
    props?.paddingHorizontal}px;
`;
export const Scroll = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})<{backgroundColor?: string}>`
  flex: 1;
  background-color: ${({backgroundColor = colors.white}) => backgroundColor};
`;

export const View = styled.View<ViewProps>`
  height: ${({height = 'auto'}) => height};
  width: ${({width = 'auto'}) => width};
  background-color: ${({backgroundColor = 'transparent'}) => backgroundColor};
  align-items: ${({alignItems = 'flex-start'}) => alignItems};
  justify-content: ${({justifyContent = 'flex-start'}) => justifyContent};
  padding-horizontal: ${({paddingHorizontal = 0}) => paddingHorizontal}px;
  padding-vertical: ${({paddingVertical = 0}) => paddingVertical}px;
  margin-top: ${({marginTop = 0}) => marginTop}px;
  margin-bottom: ${({marginBottom = 0}) => marginBottom}px;
  ${({flex}: {flex: number}) =>
    flex &&
    css`
      flex: ${flex};
    `}
`;

export const Row = styled(View)`
  flex-direction: row;
`;

interface DefaultBackgroundProps {
  safestyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
  isLoading?: boolean;
  paddingHorizontal?: number;
  testID?: string;
}

export const DefaultBackground = ({
  safestyle = {},
  style = {},
  children,
  paddingHorizontal = 16,
  testID = '',
}: DefaultBackgroundProps) => (
  <SafeBackground testID={testID} style={safestyle}>
    <Background style={style} paddingHorizontal={paddingHorizontal}>
      {children}
    </Background>
  </SafeBackground>
);

interface IDefaultScrollBackgroundProps
  extends Pick<
    DefaultBackgroundProps,
    'safestyle' | 'style' | 'children' | 'isLoading' | 'testID'
  > {
  contentContainerStyle?: StyleProp<ViewStyle>;
  scrollComponent?: React.ComponentType<any> | null;
}

export const DefaultScrollBackground = ({
  safestyle = {},
  style = {},
  children,
  contentContainerStyle = {},
  testID = '',
  scrollComponent = null,
  isLoading = false,
}: IDefaultScrollBackgroundProps) => {
  const ScrollContainer = scrollComponent ?? Scroll;
  return (
    <>
      <SafeBackground testID={testID} style={safestyle}>
        <ScrollContainer
          testID="scrollView"
          style={style}
          contentContainerStyle={contentContainerStyle}>
          {children}
        </ScrollContainer>
      </SafeBackground>
      <LoadingOverlay visible={isLoading} />
    </>
  );
};

export interface IconBaseProps extends ImageProps {
  height?: number;
  width?: number;
  size?: number;
}

export const IconBase = styled(FastImage).attrs(
  ({resizeMode}: {resizeMode?: string}) => ({
    resizeMode,
  }),
)<IconBaseProps>`
  height: ${({size = 18, height}: IconBaseProps) =>
    scaleFontSize(height ?? size)}px;
  width: ${({size = 18, width}: IconBaseProps) =>
    scaleFontSize(width ?? size)}px;
`;

export interface IconProps {
  resizeMode?: string;
  containerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  onPress?: any;
  testID?: string;
  source?: ImageSourcePropType;
  size?: number;
  imageProps?: Partial<IconBaseProps>;
  containerProps?: TouchableOpacityProps;
}

export const Icon = ({
  resizeMode = 'contain',
  containerStyle = {},
  style = {},
  onPress = null,
  testID = '',
  source,
  size = 18,
  imageProps = {},
  containerProps = {},
}: IconProps) => (
  <TouchableOpacity
    disabled={!onPress}
    onPress={onPress}
    style={containerStyle}
    testID={testID}
    {...containerProps}>
    <IconBase
      resizeMode={resizeMode}
      source={source}
      style={style}
      size={size}
      {...imageProps}
    />
  </TouchableOpacity>
);

export const LoadingOverlay = ({visible}: {visible: boolean}) => (
  <Spinner
    visible={visible}
    overlayColor="rgba(0, 0, 0, 0.50)"
    customIndicator={
      <LottieView
        style={globalStyles.lottieView}
        source={require('../../assets/lottie/loading.json')}
        autoPlay
        loop
      />
    }
  />
);

export const globalStyles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  marginTop0: {
    marginTop: 0,
  },
  marginTop8: {
    marginTop: 8,
  },
  marginTop16: {
    marginTop: 16,
  },
  marginBottom8: {
    marginBottom: 8,
  },
  marginBottom16: {
    marginBottom: 16,
  },
  marginLeft8: {
    marginLeft: 8,
  },
  marginLeft12: {
    marginLeft: 12,
  },
  marginLeft16: {
    marginLeft: 16,
  },
  marginRight8: {
    marginRight: 8,
  },
  marginRight16: {
    marginRight: 16,
  },
  marginRight32: {
    marginRight: 32,
  },
  paddingHorizontal16: {
    paddingHorizontal: 16,
  },
  paddingRight0: {
    paddingRight: 0,
  },
  paddingRight16: {
    paddingRight: 16,
  },
  paddingTop16: {
    paddingTop: 16,
  },
  width100: {
    width: '100%',
  },
  row: {
    flexDirection: 'row',
  },
  lottieView: {
    height: 100,
    width: 100,
  },
});
