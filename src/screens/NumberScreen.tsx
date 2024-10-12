import { StackNavigationProp } from '@react-navigation/stack';
import React, { FC, useEffect, useRef } from 'react';
import { FlatList, TouchableOpacity, Animated } from 'react-native';
import styled from 'styled-components/native';
import { RootStackParamList } from '../types/navigation';
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types';
import { SharedElement } from 'react-navigation-shared-element';
import { MediumText, RegularText } from '../components/text/CustomText';
import colors from '../constants/colors';
import { scaleHeight, scaleWidth } from '../utils/measurement';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { shadowStyle } from './LetterScreen';

const numbers = [
  { id: '1', number: '1' },
  { id: '2', number: '2' },
  { id: '3', number: '3' },
  { id: '4', number: '4' },
  { id: '5', number: '5' },
  { id: '6', number: '6' },
  { id: '7', number: '7' },
  { id: '8', number: '8' },
  { id: '9', number: '9' },
  { id: '10', number: '10' },
];

const Container = styled.View`
  flex: 1;
  background-color: ${colors.white};
  align-items: center;
`;

const ItemContainer = styled.TouchableOpacity`
  background-color: ${colors.white};
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin: 10px;
  width: ${() => scaleWidth(50)}px;
  height: ${() => scaleHeight(60)}px;
  align-items: center;
  justify-content: center;
`;

interface NumberScreenPropsType extends NativeStackScreenProps<RootStackParamList, 'Number'> {}

const NumberScreen : FC<NumberScreenPropsType> = ({ navigation }) => {
  const edgeInsets = useSafeAreaInsets();
  const renderNumber = ({ item }: { item: { id: string; number: string } }) => {
    const handlePress = () => {
      navigation.navigate('Detail', { letter: item.number });
    };

    return (
      <ItemContainer onPress={handlePress} style={shadowStyle}>
        <SharedElement id={`item.${item.number}`}>
          <RegularText fontSize={24} color={colors.black}>{item.number}</RegularText>
        </SharedElement>
      </ItemContainer>
    );
  };

  return (
    <Container style={{ paddingTop: edgeInsets.top == 0  ? 20 : edgeInsets.top }}>
      <MediumText fontSize={24} color={colors.black}>Sayıları Öğrenelim</MediumText>
      <FlatList
        data={numbers}
        renderItem={renderNumber}
        keyExtractor={(item) => item.id}
        numColumns={5}
      />
    </Container>
  );
};

export default NumberScreen;
