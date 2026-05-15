import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../utils/designTokens';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home — Sprint 2</Text>
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
  text: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 16,
    color: colors.gray500,
  },
});
