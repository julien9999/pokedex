import { globalWidth } from 'global';
import styled from 'styled-components/native';
import { scaleFontSize } from '~constants';

export const Button = styled.Pressable`
  shadow-radius: 1px;
  border-radius: 6px;
  width: ${globalWidth}px;
  height: ${scaleFontSize(50)}px;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  padding-horizontal: 24px;
`;

interface IProps {
  size: number;
}

export const Icon = styled.Image.attrs({
  resizeMode: 'contain',
})`
  height: ${({ size }: IProps) => size}px;
  width: ${({ size }: IProps) => size}px;
  position: absolute;
  left: 16px;
`;
