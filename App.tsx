import React, { useCallback } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts, Poppins_700Bold, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto';
import { StatusBar } from 'expo-status-bar';
import RootNavigator from './src/navigation/RootNavigator';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_600SemiBold,
    Roboto_400Regular,
    Roboto_500Medium,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <View style={{ flex: 1, backgroundColor: '#1C2130' }} onLayout={onLayoutRootView}>
      <StatusBar style="light" backgroundColor="#1C2130" />
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </View>
  );
}
