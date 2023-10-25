import { Text, TextTypes } from 'components/Text';
import React from 'react';
import { ImageSourcePropType, StyleProp, ViewStyle } from 'react-native';
import { colors } from '~constants';

import { Button, Icon } from './components';

export type ButtonTypes = 'primary' | 'secondary' | 'tertiary';
export interface DefaultButtonProps {
  type?: ButtonTypes;
  style?: StyleProp<ViewStyle>;
  text: string;
  onPress?: any;
  formIsValid?: boolean;
  testID?: string | null;
  notch?: boolean;
  icon?: ImageSourcePropType | null;
  iconSize?: number;
  textType?: TextTypes;
  isStatusPressedForTest?: boolean;
  eventName?: string | null;
}

interface PressedProps {
  pressed: boolean;
}

export const DefaultButton = ({
  type = 'primary',
  style = {},
  text = '',
  onPress = null,
  formIsValid = false,
  testID = null,
  notch = false,
  icon = null,
  iconSize = 19,
  textType = 'Button1',
  isStatusPressedForTest,
}: DefaultButtonProps) => {
  const buttonStyle = ({ pressed }: PressedProps) => {
    const backgroundColor = {
      primary: formIsValid
        ? pressed
          ? colors.mainColorSemiTransparent
          : colors.mainColor
        : '#ced2d5',
      secondary: formIsValid ? (pressed ? colors.mediumColor : '#F6F6F6') : colors.white,
      tertiary: formIsValid
        ? pressed
          ? colors.darkColorSemiTransparent
          : colors.black
        : '#ced2d5',
    }[type];

    return { backgroundColor };
  };
  const textStyle = ({ pressed }: PressedProps) => {
    const color = {
      primary: colors.white,
      secondary: formIsValid ? (pressed ? colors.white : colors.black) : '#9c9ea1',
      tertiary: colors.white,
    }[type];

    return { color };
  };

  const _onPress = React.useCallback(() => {
    onPress?.();
  }, [onPress]);

  return (
    <Button
      testID={testID}
      onPress={_onPress}
      notch={notch}
      testOnly_pressed={isStatusPressedForTest}
      style={({ pressed }: PressedProps) => [buttonStyle({ pressed }), style]}>
      {({ pressed }: PressedProps) => (
        <>
          {icon ? <Icon size={iconSize} source={icon} /> : null}
          <Text align="center" type={textType} style={textStyle({ pressed })}>
            {text}
          </Text>
        </>
      )}
    </Button>
  );
};
