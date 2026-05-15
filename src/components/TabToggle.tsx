import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../utils/designTokens';

interface Tab {
  key: string;
  label: string;
}

interface Props {
  tabs: Tab[];
  activeKey: string;
  onTabPress: (key: string) => void;
}

export default function TabToggle({ tabs, activeKey, onTabPress }: Props) {
  return (
    <View style={styles.container}>
      {tabs.map(tab => (
        <TouchableOpacity
          key={tab.key}
          style={[styles.tab, tab.key === activeKey && styles.tabActive]}
          onPress={() => onTabPress(tab.key)}
          activeOpacity={0.8}
        >
          <Text style={[styles.label, tab.key === activeKey && styles.labelActive]}>
            {tab.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.bgSecondary,
    borderRadius: 9,
    padding: 3,
  },
  tab: {
    flex: 1,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  tabActive: {
    backgroundColor: colors.accent,
  },
  label: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 13,
    color: colors.white,
    opacity: 0.5,
  },
  labelActive: {
    opacity: 1,
  },
});
