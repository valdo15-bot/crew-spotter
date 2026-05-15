import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootNavigator';
import { colors } from '../../utils/designTokens';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'NewPassword'>;

const EyeIcon = ({ visible }: { visible: boolean }) => (
  <Svg width={16} height={16} viewBox="0 0 24 24" fill="#FFFFFF">
    {visible ? (
      <Path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5C21.27 7.61 17 4.5 12 4.5zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
    ) : (
      <Path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zm4.53 4.53l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z" />
    )}
  </Svg>
);

export default function NewPasswordScreen() {
  const navigation = useNavigation<NavigationProp>();
  const [password, setPassword] = useState('');
  const [repeat, setRepeat] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [showRepeat, setShowRepeat] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>

      <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>‹  Back</Text>
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.title}>
          Type the new password and confirm
        </Text>

        <View style={styles.pwWrap}>
          <TextInput
            style={[styles.input, styles.inputPw, focusedField === 'pw' && styles.inputFocused]}
            placeholder="New password"
            placeholderTextColor={colors.gray500}
            secureTextEntry={!showPw}
            value={password}
            onChangeText={setPassword}
            onFocus={() => setFocusedField('pw')}
            onBlur={() => setFocusedField(null)}
          />
          <TouchableOpacity style={styles.eyeBtn} onPress={() => setShowPw(v => !v)}>
            <EyeIcon visible={showPw} />
          </TouchableOpacity>
        </View>

        <View style={styles.pwWrap}>
          <TextInput
            style={[styles.input, styles.inputPw, focusedField === 'repeat' && styles.inputFocused]}
            placeholder="Repeat password"
            placeholderTextColor={colors.gray500}
            secureTextEntry={!showRepeat}
            value={repeat}
            onChangeText={setRepeat}
            onFocus={() => setFocusedField('repeat')}
            onBlur={() => setFocusedField(null)}
          />
          <TouchableOpacity style={styles.eyeBtn} onPress={() => setShowRepeat(v => !v)}>
            <EyeIcon visible={showRepeat} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.ctaBtn}
          onPress={() => navigation.navigate('Auth')}
          activeOpacity={0.85}
        >
          <Text style={styles.ctaText}>CONFIRM</Text>
        </TouchableOpacity>

        <Text style={styles.rememberInfo}>Do you remember your password?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Auth')}>
          <Text style={styles.goToLogin}>Go to Log in</Text>
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

  pwWrap: { position: 'relative', marginBottom: 12 },
  input: {
    height: 46,
    backgroundColor: colors.inputBg,
    borderRadius: 10,
    paddingHorizontal: 12,
    fontFamily: 'Roboto_400Regular',
    fontSize: 14,
    color: colors.inputText,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  inputPw: { paddingRight: 48 },
  inputFocused: { borderColor: colors.accent },

  eyeBtn: {
    position: 'absolute',
    right: 8,
    top: 8,
    width: 30,
    height: 30,
    backgroundColor: colors.accent,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },

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

  rememberInfo: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 13,
    color: colors.gray600,
    textAlign: 'center',
    marginBottom: 4,
  },
  goToLogin: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 13,
    color: colors.white,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});
