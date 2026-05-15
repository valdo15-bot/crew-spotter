import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Switch,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path, G } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import TabToggle from '../../components/TabToggle';
import { RootStackParamList } from '../../navigation/RootNavigator';
import { colors } from '../../utils/designTokens';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Auth'>;

const EyeIcon = ({ visible }: { visible: boolean }) => (
  <Svg width={16} height={16} viewBox="0 0 24 24" fill="#FFFFFF">
    {visible ? (
      <Path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5C21.27 7.61 17 4.5 12 4.5zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
    ) : (
      <Path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zm4.53 4.53l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z" />
    )}
  </Svg>
);

const AppleIcon = () => (
  <Svg width={16} height={16} viewBox="0 0 24 24" fill="#FFFFFF">
    <Path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </Svg>
);

const GoogleIcon = () => (
  <Svg width={16} height={16} viewBox="0 0 24 24">
    <Path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <Path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <Path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <Path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </Svg>
);

const TABS = [
  { key: 'register', label: 'Register' },
  { key: 'login', label: 'Login' },
];

export default function AuthScreen() {
  const navigation = useNavigation<NavigationProp>();
  const [activeTab, setActiveTab] = useState<'register' | 'login'>('register');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const inputStyle = (field: string) => [
    styles.input,
    focusedField === field && styles.inputFocused,
  ];

  const handleCta = () => {
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          style={styles.flex}
          contentContainerStyle={styles.scroll}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* Tab toggle */}
          <View style={styles.toggleWrap}>
            <TabToggle
              tabs={TABS}
              activeKey={activeTab}
              onTabPress={key => setActiveTab(key as 'register' | 'login')}
            />
          </View>

          {/* Título */}
          <Text style={styles.title}>
            {activeTab === 'register' ? 'Welcome\nto Crew Spotter!' : 'Do you have\nan account?'}
          </Text>

          {/* REGISTER FORM */}
          {activeTab === 'register' && (
            <>
              <TextInput
                style={inputStyle('email')}
                placeholder="Email"
                placeholderTextColor={colors.gray500}
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
              />

              <View style={styles.pwWrap}>
                <TextInput
                  style={[inputStyle('password'), styles.inputPw]}
                  placeholder="Password"
                  placeholderTextColor={colors.gray500}
                  secureTextEntry={!showPassword}
                  value={password}
                  onChangeText={setPassword}
                  onFocus={() => setFocusedField('password')}
                  onBlur={() => setFocusedField(null)}
                />
                <TouchableOpacity style={styles.eyeBtn} onPress={() => setShowPassword(v => !v)}>
                  <EyeIcon visible={showPassword} />
                </TouchableOpacity>
              </View>

              <View style={styles.pwWrap}>
                <TextInput
                  style={[inputStyle('repeat'), styles.inputPw]}
                  placeholder="Repeat password"
                  placeholderTextColor={colors.gray500}
                  secureTextEntry={!showRepeatPassword}
                  value={repeatPassword}
                  onChangeText={setRepeatPassword}
                  onFocus={() => setFocusedField('repeat')}
                  onBlur={() => setFocusedField(null)}
                />
                <TouchableOpacity style={styles.eyeBtn} onPress={() => setShowRepeatPassword(v => !v)}>
                  <EyeIcon visible={showRepeatPassword} />
                </TouchableOpacity>
              </View>

              {/* Phone */}
              <View style={[styles.input, styles.phoneWrap, focusedField === 'phone' && styles.inputFocused]}>
                <Text style={styles.flag}>🇬🇧</Text>
                <Text style={styles.countryCode}>+44  ▾</Text>
                <View style={styles.phoneDivider} />
                <TextInput
                  style={styles.phoneInput}
                  placeholder="Telephone number"
                  placeholderTextColor={colors.gray500}
                  keyboardType="phone-pad"
                  value={phone}
                  onChangeText={setPhone}
                  onFocus={() => setFocusedField('phone')}
                  onBlur={() => setFocusedField(null)}
                />
              </View>

              {/* Terms */}
              <View style={styles.termsRow}>
                <Switch
                  value={termsAccepted}
                  onValueChange={setTermsAccepted}
                  trackColor={{ false: colors.bgTertiary, true: colors.accent }}
                  thumbColor={colors.white}
                  ios_backgroundColor={colors.bgTertiary}
                />
                <Text style={styles.termsText}>
                  {'I have read and accept the '}
                  <Text style={styles.termsLink}>Privacy Policies and Conditions of Use</Text>
                </Text>
              </View>
            </>
          )}

          {/* LOGIN FORM */}
          {activeTab === 'login' && (
            <>
              <TextInput
                style={inputStyle('email')}
                placeholder="Email"
                placeholderTextColor={colors.gray500}
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
              />

              <View style={styles.pwWrap}>
                <TextInput
                  style={[inputStyle('password'), styles.inputPw]}
                  placeholder="Password"
                  placeholderTextColor={colors.gray500}
                  secureTextEntry={!showPassword}
                  value={password}
                  onChangeText={setPassword}
                  onFocus={() => setFocusedField('password')}
                  onBlur={() => setFocusedField(null)}
                />
                <TouchableOpacity style={styles.eyeBtn} onPress={() => setShowPassword(v => !v)}>
                  <EyeIcon visible={showPassword} />
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                style={styles.forgotWrap}
                onPress={() => navigation.navigate('ForgotPassword')}
              >
                <Text style={styles.forgotText}>Have you forgotten the password?</Text>
              </TouchableOpacity>
            </>
          )}

          {/* CTA */}
          <TouchableOpacity style={styles.ctaBtn} onPress={handleCta} activeOpacity={0.85}>
            <Text style={styles.ctaText}>
              {activeTab === 'register' ? 'REGISTER' : 'LOG IN'}
            </Text>
          </TouchableOpacity>

          {/* Divider */}
          <View style={styles.dividerRow}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>or</Text>
            <View style={styles.dividerLine} />
          </View>

          {/* Social buttons */}
          <View style={styles.socialRow}>
            <TouchableOpacity style={styles.socialBtn} activeOpacity={0.8}>
              <AppleIcon />
              <Text style={styles.socialText}>Continue{'\n'}with Apple</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialBtn} activeOpacity={0.8}>
              <GoogleIcon />
              <Text style={styles.socialText}>Continue{'\n'}with Google</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.bgPrimary },
  flex: { flex: 1 },
  scroll: { paddingHorizontal: 20, paddingBottom: 32 },

  toggleWrap: { marginTop: 12, marginBottom: 24 },

  title: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 28,
    color: colors.accent,
    lineHeight: 36,
    marginBottom: 24,
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
  inputFocused: {
    borderColor: colors.accent,
  },

  pwWrap: { position: 'relative', marginBottom: 12 },
  inputPw: { marginBottom: 0, paddingRight: 48 },
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

  phoneWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  flag: { fontSize: 18, marginRight: 4 },
  countryCode: {
    fontFamily: 'Roboto_500Medium',
    fontSize: 13,
    color: colors.inputText,
    marginRight: 8,
  },
  phoneDivider: {
    width: 1,
    height: 22,
    backgroundColor: colors.gray500,
    marginRight: 10,
  },
  phoneInput: {
    flex: 1,
    fontFamily: 'Roboto_400Regular',
    fontSize: 14,
    color: colors.inputText,
  },

  termsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.bgSecondary,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.bgTertiary,
    padding: 12,
    gap: 10,
    marginBottom: 20,
  },
  termsText: {
    flex: 1,
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
    color: colors.gray600,
    lineHeight: 18,
  },
  termsLink: {
    fontFamily: 'Roboto_700Bold',
    color: colors.white,
    textDecorationLine: 'underline',
  },

  forgotWrap: { alignSelf: 'center', marginBottom: 20 },
  forgotText: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 13,
    color: colors.white,
    textDecorationLine: 'underline',
  },

  ctaBtn: {
    height: 52,
    backgroundColor: colors.accent,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  ctaText: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 14,
    color: colors.white,
    letterSpacing: 1,
  },

  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
    gap: 8,
  },
  dividerLine: { flex: 1, height: 1, backgroundColor: colors.gray400 },
  dividerText: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
    color: colors.gray600,
  },

  socialRow: { flexDirection: 'row', gap: 10 },
  socialBtn: {
    flex: 1,
    height: 52,
    backgroundColor: colors.bgSecondary,
    borderWidth: 1,
    borderColor: colors.bgTertiary,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingHorizontal: 10,
  },
  socialText: {
    fontFamily: 'Roboto_500Medium',
    fontSize: 11,
    color: colors.white,
    lineHeight: 15,
  },
});
