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

const letters = [
  { id: '1', letter: 'A' },
  { id: '2', letter: 'B' },
  { id: '3', letter: 'C' },
  { id: '4', letter: 'Ç' },
  { id: '5', letter: 'D' },
  { id: '6', letter: 'E' },
  { id: '7', letter: 'F' },
  { id: '8', letter: 'G' },
  { id: '9', letter: 'Ğ' },
  { id: '10', letter: 'H' },
  { id: '11', letter: 'I' },
  { id: '12', letter: 'İ' },
  { id: '13', letter: 'J' },
  { id: '14', letter: 'K' },
  { id: '15', letter: 'L' },
  { id: '16', letter: 'M' },
  { id: '17', letter: 'N' },
  { id: '18', letter: 'O' },
  { id: '19', letter: 'Ö' },
  { id: '20', letter: 'P' },
  { id: '21', letter: 'R' },
  { id: '22', letter: 'S' },
  { id: '23', letter: 'Ş' },
  { id: '24', letter: 'T' },
  { id: '25', letter: 'U' },
  { id: '26', letter: 'Ü' },
  { id: '27', letter: 'V' },
  { id: '28', letter: 'Y' },
  { id: '29', letter: 'Z' },
];


const Container = styled.View`
  flex: 1;
  background-color: ${colors.white};
  align-items: center;
`;

const ItemContainer = styled.TouchableOpacity`
  background-color: ${colors.white};
  border-radius: 10px;
  margin: 10px;
  width: ${() => scaleWidth(50)}px;
  height: ${() => scaleHeight(60)}px;
  align-items: center;
  justify-content: center;
`;

interface LetterScreenPropsType extends NativeStackScreenProps<RootStackParamList, 'Letter'> { }


export const shadowStyle = {
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.1,
  shadowRadius: 6,
  elevation: 3,
}

const LetterScreen: FC<LetterScreenPropsType> = ({ navigation }) => {
  const edgeInsets = useSafeAreaInsets();

  const renderLetter = ({ item }: { item: { id: string; letter: string } }) => {
    const handlePress = () => {
      navigation.navigate('Detail', { letter: item.letter });
    };



    return (
      <ItemContainer onPress={handlePress} style={shadowStyle}>
        <SharedElement id={`item.${item.letter}`}>
          <RegularText fontSize={24} color={colors.black}>{item.letter}</RegularText>
        </SharedElement>
      </ItemContainer>
    );
  };

  return (
    <Container style={{ paddingTop: edgeInsets.top == 0 ? 20 : edgeInsets.top }}>
      <MediumText fontSize={24} color={colors.black}>Harfleri Öğrenelim</MediumText>
      <FlatList
        data={letters}
        renderItem={renderLetter}
        keyExtractor={(item) => item.id}
        numColumns={5}
      />
    </Container>
  );
};

export default LetterScreen;
