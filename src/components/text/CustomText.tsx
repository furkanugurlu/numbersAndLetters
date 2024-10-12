import styled from 'styled-components/native';
import { TextProps } from 'react-native';
import { responsiveFontSize } from '../../utils/measurement';

interface CustomTextProps extends TextProps {
  fontSize?: number;
  color?: string;
}

export const LightText = styled.Text<CustomTextProps>`
  font-family: 'Poppins-Light';
  font-size: ${(props) => responsiveFontSize(props.fontSize || 16)}px;
  color: ${(props) => props.color || 'black'};
`;

export const RegularText = styled.Text<CustomTextProps>`
  font-family: 'Poppins-Regular';
  font-size: ${(props) => responsiveFontSize(props.fontSize || 16)}px;
  color: ${(props) => props.color || 'black'};
`;

export const BoldText = styled.Text<CustomTextProps>`
  font-family: 'Poppins-Bold';
  font-size: ${(props) => responsiveFontSize(props.fontSize || 16)}px;
  color: ${(props) => props.color || 'black'};
`;

export const SemiBoldText = styled.Text<CustomTextProps>`
  font-family: 'Poppins-SemiBold';
  font-size: ${(props) => responsiveFontSize(props.fontSize || 16)}px;
  color: ${(props) => props.color || 'black'};
`;

export const MediumText = styled.Text<CustomTextProps>`
  font-family: 'Poppins-Medium';
  font-size: ${(props) => responsiveFontSize(props.fontSize || 16)}px;
  color: ${(props) => props.color || 'black'};
`;

export const HeavyText = styled.Text<CustomTextProps>`
  font-family: 'Poppins-ExtraBold';
  font-size: ${(props) => responsiveFontSize(props.fontSize || 16)}px;
  color: ${(props) => props.color || 'black'};
`;

export default {
  LightText,
  RegularText,
  BoldText,
  SemiBoldText,
};
