import React, { FC, useEffect } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import { useNavigation } from '@react-navigation/native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import styled from 'styled-components/native';
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types';
import { RootStackParamList } from '../types/navigation';
import { RegularText } from '../components/text/CustomText';
import colors from '../constants/colors';
import Tts from 'react-native-tts';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface DetailScreenPropsType extends NativeStackScreenProps<RootStackParamList, 'Detail'> { }

Tts.setDefaultLanguage('tr-TR');
Tts.setDefaultRate(0.5);


const DetailScreen = ({ route }: DetailScreenPropsType) => {
  const edgeInsets = useSafeAreaInsets();
  const { letter } = route.params;
  const navigation = useNavigation();

  // Animasyon için shared value
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(50);

  // Detay ekranı açıldığında animasyonu başlat
  useEffect(() => {
    opacity.value = withTiming(1, { duration: 800 });
    translateY.value = withTiming(0, { duration: 800 });
  }, []);

  // Animasyonlu stil
  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{ translateY: translateY.value }],
    };
  });



  const speakLetter = (letter: string) => {
    Tts.speak(letter.toLowerCase());
  };

  return (
    <Container paddingTop={edgeInsets.top == 0 ? 20 : edgeInsets.top}>
      <BackButton onPress={() => navigation.goBack()}>
        <Image source={require('../assets/icons/back-icon.png')} style={{ width: 20, height: 20 }} />
      </BackButton>

      <TitleContainer>
        <SharedElement id={`item.${letter}`}>
          <RegularText fontSize={30} color={colors.black}>{letter}</RegularText>
        </SharedElement>
        <TouchableOpacity onPress={() => speakLetter(letter)}>
          <Image source={require('../assets/icons/play-icon.png')} style={{ width: 30, height: 30 }} />
          </TouchableOpacity>
      </TitleContainer>

      <AnimatedDescriptionContainer style={animatedStyle}>
        <RegularText fontSize={16} color={colors.secondaryText}>
          "{letter}" harfinin detay sayfasına hoş geldiniz. Burada bu harf hakkında bilgi alabilirsiniz.
        </RegularText>
      </AnimatedDescriptionContainer>
    </Container>
  );
};

DetailScreen.sharedElements = (route: any) => {
  const { letter } = route.params;
  return [`item.${letter}`];
};

const Container = styled.View<{ paddingTop: number }>`
  flex: 1;
  padding: ${({ paddingTop }) => paddingTop}px 20px;
  background-color: ${colors.white};
`;

const TitleContainer = styled.View`
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const BackButton = styled.TouchableOpacity`
`;

const DescriptionContainer = styled.View`
  margin-top: 20px;
`;


const AnimatedDescriptionContainer = Animated.createAnimatedComponent(DescriptionContainer);

export default DetailScreen;
