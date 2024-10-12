import React, { useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions, Image } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { RegularText } from '../text/CustomText';

interface CustomTabBarProps {
  state: any;
  descriptors: any;
  navigation: any;
}

const CustomTabBar: React.FC<CustomTabBarProps> = ({ state, descriptors, navigation }) => {
  const translateX = useSharedValue(0);
  const tabWidth = Dimensions.get('window').width / state.routes.length;
  const edgeInsets = useSafeAreaInsets();

  const indicatorWidth = 80;


  useEffect(() => {
    const initialIndex = state.index;
    translateX.value = initialIndex * tabWidth + (tabWidth / 2 - indicatorWidth / 2);
  }, [state.index, tabWidth, indicatorWidth]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: withTiming(translateX.value, { duration: 300 }) }],
      width: indicatorWidth
    };
  });

  return (
    <View style={[styles.container, { paddingBottom: edgeInsets.bottom == 0  ? 10 : edgeInsets.bottom }]}>
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel !== undefined ? options.tabBarLabel : options.title !== undefined ? options.title : route.name;
        const title = label == 'Letters' ? 'Harfler' : label == 'Numbers' ? 'Sayılar' : 'Ayarlar';

        const isFocused = state.index === index;

        // Dinamik ikon seçimi
        const iconSource = label === 'Letters' ? require('../../assets/icons/letters-icon.png') : label === 'Numbers' ? require('../../assets/icons/numbers-icon.png') : require('../../assets/icons/settings-icon.png');

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }

          translateX.value = index * tabWidth + (tabWidth / 2 - indicatorWidth / 2);
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={[styles.tab, { width: tabWidth }]}
          >
            <Image source={iconSource} style={{ width: 20, height: 20, tintColor: isFocused ? '#000' : '#9e9999c2' }} />
            <RegularText fontSize={12} color={isFocused ? '#000' : '#9e9999c2'}>{title}</RegularText>
          </TouchableOpacity>
        );
      })}
      <Animated.View style={[styles.indicator, animatedStyle]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#fff',
    paddingTop: 10
  },
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicator: {
    position: 'absolute',
    bottom: 0,
    height: 3,
    backgroundColor: '#000',
  },
});

export default CustomTabBar;
