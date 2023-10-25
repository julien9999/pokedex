import {StyleProp, TextStyle} from 'react-native';
import {colors} from '~constants';

import {
  Button1,
  Button2,
  Button3,
  C1,
  C2,
  Form,
  H1,
  H2,
  H3,
  H4,
  P1,
  P2,
  P3,
} from './components';

export type TextTypes =
  | 'H1'
  | 'H2'
  | 'H3'
  | 'H4'
  | 'P1'
  | 'P2'
  | 'P3'
  | 'C1'
  | 'C2'
  | 'Button1'
  | 'Button2'
  | 'Button3';

export type AlignTypes = 'left' | 'center' | 'right';

export interface TextProps {
  type?: TextTypes;
  style?: StyleProp<TextStyle>;
  children?: React.ReactNode;
  width?: string | number;
  align?: AlignTypes;
  color?: string;
  marginTop?: number;
  paddingLeft?: number;
  paddingHorizontal?: number;
  numberOfLines?: number | null;
  fontFamily?: string | null;
  testID?: string | null;
}

export const Text = ({
  type = 'P1',
  style = {},
  children = null,
  width,
  align = 'left',
  color = colors.black,
  marginTop = 0,
  paddingLeft = 0,
  paddingHorizontal = 0,
  numberOfLines = null,
  fontFamily = null,
  testID = 'text',
}: TextProps) => {
  const TextType = {
    H1,
    H2,
    H3,
    H4,
    P1,
    P2,
    P3,
    C1,
    C2,
    Form,
    Button1,
    Button2,
    Button3,
  }[type];
  return (
    <TextType
      align={align}
      style={style}
      width={width}
      color={color}
      marginTop={marginTop}
      paddingLeft={paddingLeft}
      paddingHorizontal={paddingHorizontal}
      numberOfLines={numberOfLines}
      fontFamily={fontFamily}
      testID={testID}>
      {children}
    </TextType>
  );
};
