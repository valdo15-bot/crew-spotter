import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import LogoCS from '../../../assets/icons/logo-CS.svg';
import { RootStackParamList } from '../../navigation/RootNavigator';
import { colors } from '../../utils/designTokens';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Splash'>;

export default function SplashScreen() {
  const navigation = useNavigation<NavigationProp>();
  const scale = useRef(new Animated.Value(0.5)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      // Splash 01 — logo aparece pequeño
      Animated.parallel([
        Animated.timing(opacity, { toValue: 1, duration: 500, useNativeDriver: true }),
        Animated.timing(scale, { toValue: 0.62, duration: 500, useNativeDriver: true }),
      ]),
      Animated.delay(500),
      // Splash 02 — logo se expande
      Animated.timing(scale, { toValue: 1, duration: 700, useNativeDriver: true }),
      Animated.delay(500),
    ]).start(() => {
      navigation.replace('Onboarding');
    });
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={{ opacity, transform: [{ scale }] }}>
        <LogoCS width={130} height={130} />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgPrimary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
