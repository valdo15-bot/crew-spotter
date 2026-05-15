import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootNavigator';
import { colors } from '../../utils/designTokens';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'ForgotPassword'>;

export default function ForgotPasswordScreen() {
  const navigation = useNavigation<NavigationProp>();
  const [code, setCode] = useState('');
  const [focused, setFocused] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>

      <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>‹  Back</Text>
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.title}>
          We have sent you an email with an authentication code
        </Text>

        <TextInput
          style={[styles.input, focused && styles.inputFocused]}
          placeholder="Enter the code"
          placeholderTextColor={colors.gray500}
          keyboardType="number-pad"
          value={code}
          onChangeText={setCode}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />

        <TouchableOpacity
          style={styles.ctaBtn}
          onPress={() => navigation.navigate('NewPassword')}
          activeOpacity={0.85}
        >
          <Text style={styles.ctaText}>VERIFY</Text>
        </TouchableOpacity>

        <Text style={styles.resendInfo}>Have you not received the email?</Text>
        <TouchableOpacity>
          <Text style={styles.resendLink}>Resend email</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.bgPrimary },

  backBtn: { paddingHorizontal: 20, paddingTop: 8, paddingBottom: 16 },
  backText: {
    fontFamily: 'Roboto_500Medium',
    fontSize: 15,
    color: colors.white,
  },

  content: { paddingHorizontal: 20 },

  title: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 26,
    color: colors.accent,
    lineHeight: 34,
    marginBottom: 28,
  },

  input: {
    height: 46,
    backgroundColor: colors.inputBg,
    borderRadius: 10,
    paddingHorizontal: 12,
    fontFamily: 'Roboto_400Regular',
    fontSize: 14,
    color: colors.inputText,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  inputFocused: { borderColor: colors.accent },

  ctaBtn: {
    height: 52,
    backgroundColor: colors.accent,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  ctaText: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 14,
    color: colors.white,
    letterSpacing: 1,
  },

  resendInfo: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 13,
    color: colors.gray600,
    textAlign: 'center',
    marginBottom: 4,
  },
  resendLink: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 13,
    color: colors.white,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});
