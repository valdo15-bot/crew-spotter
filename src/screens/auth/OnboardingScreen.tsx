import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ViewToken,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import Onboarding01 from '../../../assets/images/onboarding-01.svg';
import Onboarding02 from '../../../assets/images/onboarding-02.svg';
import Onboarding03 from '../../../assets/images/onboarding-03.svg';
import Onboarding04 from '../../../assets/images/onboarding-04.svg';
import { RootStackParamList } from '../../navigation/RootNavigator';
import { colors } from '../../utils/designTokens';

const { width } = Dimensions.get('window');
const ILLUSTRATION_SIZE = Math.min(width * 0.68, 260);

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Onboarding'>;

interface Slide {
  id: string;
  Illustration: React.FC<{ width: number; height: number }>;
  title: string;
  subtitle: string;
}

const SLIDES: Slide[] = [
  {
    id: '1',
    Illustration: Onboarding01,
    title: 'Welcome to\nCrew Spotter',
    subtitle: 'Find your friends anywhere — at festivals, concerts, or any crowded event.',
  },
  {
    id: '2',
    Illustration: Onboarding02,
    title: 'Find quickly',
    subtitle: 'Locate your crew in real-time, even in the most crowded places.',
  },
  {
    id: '3',
    Illustration: Onboarding03,
    title: 'Friends radar',
    subtitle: 'See exactly where your friends are with our live map and AR compass.',
  },
  {
    id: '4',
    Illustration: Onboarding04,
    title: 'Create a group',
    subtitle: "Start tracking together. Create a group and never lose your crew again.",
  },
];

export default function OnboardingScreen() {
  const navigation = useNavigation<NavigationProp>();
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const onViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (viewableItems.length > 0) {
        setActiveIndex(viewableItems[0].index ?? 0);
      }
    },
  ).current;

  const viewabilityConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const handleNext = () => {
    if (activeIndex < SLIDES.length - 1) {
      flatListRef.current?.scrollToIndex({ index: activeIndex + 1, animated: true });
    } else {
      navigation.navigate('Register');
    }
  };

  const isLastSlide = activeIndex === SLIDES.length - 1;

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>

        {/* Skip */}
        <View style={styles.topBar}>
          {!isLastSlide && (
            <TouchableOpacity onPress={() => navigation.navigate('Register')} hitSlop={8}>
              <Text style={styles.skipText}>Skip</Text>
            </TouchableOpacity>
          )}
        </View>

        {/* Slides */}
        <FlatList
          ref={flatListRef}
          data={SLIDES}
          keyExtractor={item => item.id}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          bounces={false}
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={viewabilityConfig}
          style={styles.flatList}
          renderItem={({ item }) => (
            <View style={styles.slide}>
              <View style={styles.illustrationArea}>
                <item.Illustration width={ILLUSTRATION_SIZE} height={ILLUSTRATION_SIZE} />
              </View>
              <View style={styles.textArea}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.subtitle}>{item.subtitle}</Text>
              </View>
            </View>
          )}
        />

        {/* Dots */}
        <View style={styles.dotsRow}>
          {SLIDES.map((_, i) => (
            <View key={i} style={[styles.dot, i === activeIndex && styles.dotActive]} />
          ))}
        </View>

        {/* CTA */}
        <View style={styles.ctaArea}>
          <TouchableOpacity onPress={handleNext} activeOpacity={0.85}>
            <LinearGradient
              colors={[colors.accentDark, colors.accentLight]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.ctaButton}
            >
              <Text style={styles.ctaText}>
                {isLastSlide ? "LET'S GO" : 'NEXT'}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgPrimary,
  },
  safeArea: {
    flex: 1,
  },
  topBar: {
    height: 44,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingHorizontal: 28,
  },
  skipText: {
    fontFamily: 'Roboto_500Medium',
    fontSize: 14,
    color: colors.gray500,
  },
  flatList: {
    flex: 1,
  },
  slide: {
    width,
    flex: 1,
    paddingHorizontal: 32,
  },
  illustrationArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textArea: {
    paddingBottom: 8,
  },
  title: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 28,
    color: colors.white,
    lineHeight: 36,
    marginBottom: 12,
  },
  subtitle: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 15,
    color: colors.gray500,
    lineHeight: 24,
  },
  dotsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 32,
    paddingTop: 24,
    paddingBottom: 20,
    gap: 6,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.gray100,
  },
  dotActive: {
    width: 24,
    backgroundColor: colors.accent,
  },
  ctaArea: {
    paddingHorizontal: 24,
    paddingBottom: 12,
  },
  ctaButton: {
    height: 52,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ctaText: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 13,
    color: colors.white,
    letterSpacing: 1.2,
  },
});
