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
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import Onboarding01 from '../../../assets/images/onboarding-01.svg';
import Onboarding02 from '../../../assets/images/onboarding-02.svg';
import Onboarding03 from '../../../assets/images/onboarding-03.svg';
import Onboarding04 from '../../../assets/images/onboarding-04.svg';
import { RootStackParamList } from '../../navigation/RootNavigator';
import { colors } from '../../utils/designTokens';

const { width } = Dimensions.get('window');
const ILLUS_SIZE = Math.min(width * 0.82, 310);

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Onboarding'>;


interface SubtitlePart {
  text: string;
  bold: boolean;
}

interface Slide {
  id: string;
  Illustration: React.FC<{ width: number; height: number }>;
  title: string;
  subtitleParts: SubtitlePart[];
  cta: string;
}

const SLIDES: Slide[] = [
  {
    id: '1',
    Illustration: Onboarding01,
    title: 'Welcome\nto Crew Spotter!',
    subtitleParts: [
      { text: 'The best way to ', bold: false },
      { text: 'find your friends in crowded crowds without complications', bold: true },
      { text: ". Let's get started!", bold: false },
    ],
    cta: 'Next',
  },
  {
    id: '2',
    Illustration: Onboarding02,
    title: 'Find Your Friends\nQuickly',
    subtitleParts: [
      { text: 'Use our app to ', bold: false },
      { text: 'locate your friends in real time with active geolocation', bold: true },
      { text: ', no matter how crowded the place is!', bold: false },
    ],
    cta: 'Next',
  },
  {
    id: '3',
    Illustration: Onboarding03,
    title: 'Friends Radar',
    subtitleParts: [
      { text: 'The radar allows you to ', bold: false },
      { text: 'visualize the exact location of your friends', bold: true },
      { text: '. Look around and find the right direction!', bold: false },
    ],
    cta: 'Next',
  },
  {
    id: '4',
    Illustration: Onboarding04,
    title: 'Create a Group',
    subtitleParts: [
      { text: 'Make searching even easier! ', bold: false },
      { text: 'Create a group to share locations together', bold: true },
      { text: ". Press 'Create Group' to get started.", bold: false },
    ],
    cta: 'Create Group',
  },
];

export default function OnboardingScreen() {
  const navigation = useNavigation<NavigationProp>();
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const onViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (viewableItems.length > 0) setActiveIndex(viewableItems[0].index ?? 0);
    },
  ).current;

  const viewabilityConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const goToRegister = () => navigation.navigate('Auth');

  const handleCta = () => {
    if (activeIndex < SLIDES.length - 1) {
      flatListRef.current?.scrollToIndex({ index: activeIndex + 1, animated: true });
    } else {
      goToRegister();
    }
  };

  const isLast = activeIndex === SLIDES.length - 1;

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>

        {/* Slides: título + ilustración + subtítulo */}
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
              <Text style={styles.title}>{item.title}</Text>
              <View style={styles.illustrationArea}>
                <item.Illustration width={ILLUS_SIZE} height={ILLUS_SIZE} />
              </View>
              <Text style={styles.subtitle}>
                {item.subtitleParts.map((part, i) => (
                  <Text key={i} style={part.bold ? styles.subtitleBold : styles.subtitleRegular}>
                    {part.text}
                  </Text>
                ))}
              </Text>
            </View>
          )}
        />

        {/* Fijo: dots + botón CTA + skip */}
        <View style={styles.bottom}>
          <View style={styles.dotsRow}>
            {SLIDES.map((_, i) => (
              <View key={i} style={[styles.dot, i === activeIndex && styles.dotActive]} />
            ))}
          </View>

          <TouchableOpacity style={styles.ctaButton} onPress={handleCta} activeOpacity={0.85}>
            <Text style={styles.ctaText}>{SLIDES[activeIndex].cta}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.skipBtn} onPress={goToRegister} hitSlop={12}>
            <Text style={styles.skipText}>{isLast ? '✕   Close' : 'Skip   ›'}</Text>
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
  flatList: {
    flex: 1,
  },
  slide: {
    width,
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 28,
  },
  title: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 26,
    color: colors.accent,
    textAlign: 'center',
    lineHeight: 34,
    marginBottom: 16,
  },
  illustrationArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subtitle: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 14,
    color: colors.white,
    textAlign: 'center',
    lineHeight: 22,
    paddingBottom: 8,
  },
  subtitleRegular: {
    fontFamily: 'Roboto_400Regular',
    fontWeight: '400',
  },
  subtitleBold: {
    fontFamily: 'Roboto_700Bold',
    fontWeight: '700',
  },
  bottom: {
    paddingHorizontal: 24,
    paddingBottom: 8,
  },
  dotsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
    marginBottom: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.bgTertiary,
  },
  dotActive: {
    backgroundColor: colors.accent,
  },
  ctaButton: {
    height: 52,
    backgroundColor: colors.accent,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  ctaText: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 15,
    color: colors.white,
  },
  skipBtn: {
    alignItems: 'center',
    paddingVertical: 8,
  },
  skipText: {
    fontFamily: 'Roboto_500Medium',
    fontSize: 13,
    color: colors.accent,
  },
});
