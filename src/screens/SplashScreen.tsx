
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';
import { RootStackParamList } from '../types/navigation';
import { StackNavigationProp } from '@react-navigation/stack';

type SplashScreenProps = {
    navigation: StackNavigationProp<RootStackParamList, 'Splash'>;
};

const SplashScreen = ({ navigation }: SplashScreenProps) => {
  const animationRef = useRef<LottieView>(null); 

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Main');
    }, 500);

    return () => {
      clearTimeout(timer);
      if (animationRef.current) {
        animationRef.current.reset(); 
      }
    };
  }, [navigation]);

  return (
    <Container>
      <StyledLottieView
        ref={animationRef}
        source={require('../assets/animations/splash.json')}
        autoPlay
        loop
      />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

const StyledLottieView = styled(LottieView)`
  width: 100%;
  height: 100%;
`;

export default SplashScreen;
