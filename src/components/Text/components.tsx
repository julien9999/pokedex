import {StyleSheet} from 'react-native';
import styled, {css} from 'styled-components/native';
import {FontFamilies} from 'types';
import {fontFamilies, scaleFontSize} from '~constants';

interface IProps {
  width: string | null;
  align: string;
  color: string;
  marginTop: number;
  paddingHorizontal: number;
  paddingLeft: number;
}

export interface ITextProps extends IProps {
  fontFamily: FontFamilies;
}

const commonTextProps = css<IProps>`
  width: ${({width}) => (width ?? width === null ? 'auto' : '100%')};
  text-align: ${({align}) => align};
  color: ${({color}) => color};
  margin-top: ${props => props.marginTop || 0}px;
  ${({paddingHorizontal, paddingLeft}) =>
    (paddingHorizontal && paddingLeft) || paddingHorizontal
      ? css`
          padding-left: ${paddingHorizontal}px;
          padding-right: ${paddingHorizontal}px;
        `
      : paddingLeft
      ? css`
          padding-left: ${paddingLeft}px;
        `
      : ''}
`;

export const H1 = styled.Text`
  font-size: ${scaleFontSize(24)}px;
  font-family: ${({fontFamily}: ITextProps) =>
    fontFamilies[fontFamily ?? 'semiBold']};
  ${commonTextProps}
`;

export const H2 = styled.Text`
  font-size: ${scaleFontSize(20)}px;
  font-family: ${({fontFamily}: ITextProps) =>
    fontFamilies[fontFamily ?? 'regular']};
  ${commonTextProps}
`;

export const H3 = styled.Text`
  font-size: ${scaleFontSize(17)}px;
  line-height: ${scaleFontSize(21)}px;
  font-family: ${({fontFamily}: ITextProps) =>
    fontFamilies[fontFamily ?? 'bold']};
  ${commonTextProps}
`;

export const H4 = styled.Text`
  font-size: ${scaleFontSize(12)}px;
  line-height: ${scaleFontSize(18)}px;
  letter-spacing: ${scaleFontSize(4)}px;
  font-family: ${({fontFamily}: ITextProps) =>
    fontFamilies[fontFamily ?? 'semiBold']};
  ${commonTextProps}
`;

export const P1 = styled.Text`
  font-size: ${scaleFontSize(16)}px;
  line-height: ${scaleFontSize(22)}px;
  font-family: ${({fontFamily}: ITextProps) =>
    fontFamilies[fontFamily ?? 'regular']};
  ${commonTextProps}
`;

export const P2 = styled.Text`
  font-size: ${scaleFontSize(14)}px;
  line-height: ${scaleFontSize(20)}px;
  font-family: ${({fontFamily}: ITextProps) =>
    fontFamilies[fontFamily ?? 'regular']};
  ${commonTextProps}
`;

export const P3 = styled.Text`
  font-size: ${scaleFontSize(14)}px;
  line-height: ${scaleFontSize(18)}px;
  font-family: ${({fontFamily}: ITextProps) =>
    fontFamilies[fontFamily ?? 'semiBold']};
  ${commonTextProps}
`;

export const C1 = styled.Text`
  font-size: ${scaleFontSize(13)}px;
  line-height: ${scaleFontSize(18)}px;
  font-family: ${({fontFamily}: ITextProps) =>
    fontFamilies[fontFamily ?? 'regular']};
  ${commonTextProps}
`;

export const C2 = styled.Text`
  font-size: ${scaleFontSize(12)}px;
  line-height: ${scaleFontSize(15)}px;
  font-family: ${({fontFamily}: ITextProps) =>
    fontFamilies[fontFamily ?? 'semiBold']};
  ${commonTextProps}
`;

export const Form = styled.Text`
  font-size: ${scaleFontSize(16)}px;
  line-height: ${scaleFontSize(22)}px;
  font-family: ${({fontFamily}: ITextProps) =>
    fontFamilies[fontFamily ?? 'regular']};
  ${commonTextProps}
`;

export const Button1 = styled.Text`
  font-size: ${scaleFontSize(16)}px;
  line-height: ${scaleFontSize(20)}px;
  font-family: ${({fontFamily}: ITextProps) =>
    fontFamilies[fontFamily ?? 'bold']};
  ${commonTextProps}
`;

export const Button2 = styled.Text`
  font-size: ${scaleFontSize(14)}px;
  line-height: ${scaleFontSize(18)}px;
  font-family: ${({fontFamily}: ITextProps) =>
    fontFamilies[fontFamily ?? 'bold']};
  ${commonTextProps}
`;

export const Button3 = styled.Text`
  font-size: ${scaleFontSize(12)}px;
  line-height: ${scaleFontSize(15)}px;
  font-family: ${({fontFamily}: ITextProps) =>
    fontFamilies[fontFamily ?? 'bold']};
  ${commonTextProps}
`;

export const textStyles = StyleSheet.create({
  H1: {
    fontSize: scaleFontSize(24),
    lineHeight: scaleFontSize(30),
    fontFamily: fontFamilies.bold,
  },
  H2: {
    fontSize: scaleFontSize(20),
    lineHeight: scaleFontSize(25),
    fontFamily: fontFamilies.semiBold,
  },
  H3: {
    fontSize: scaleFontSize(17),
    lineHeight: scaleFontSize(21),
    fontFamily: fontFamilies.bold,
  },
  H4: {
    fontSize: scaleFontSize(12),
    lineHeight: scaleFontSize(18),
    letterSpacing: scaleFontSize(4),
    fontFamily: fontFamilies.semiBold,
  },
  P1: {
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(22),
    fontFamily: fontFamilies.regular,
  },
  P2: {
    fontSize: scaleFontSize(14),
    lineHeight: scaleFontSize(20),
    fontFamily: fontFamilies.regular,
  },
  P3: {
    fontSize: scaleFontSize(14),
    lineHeight: scaleFontSize(18),
    fontFamily: fontFamilies.semiBold,
  },
  C1: {
    fontSize: scaleFontSize(13),
    lineHeight: scaleFontSize(16),
    fontFamily: fontFamilies.semiBold,
  },
  C2: {
    fontSize: scaleFontSize(12),
    lineHeight: scaleFontSize(15),
    fontFamily: fontFamilies.semiBold,
  },
  Form: {
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(22),
    fontFamily: fontFamilies.regular,
  },
  Button1: {
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(20),
    fontFamily: fontFamilies.bold,
  },
  Button2: {
    fontSize: scaleFontSize(14),
    lineHeight: scaleFontSize(18),
    fontFamily: fontFamilies.bold,
  },
});
