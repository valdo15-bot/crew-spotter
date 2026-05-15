// Crew Spotter — Design Tokens
// Valores aprobados tras revisión componente a componente

export const colors = {
  // Fondos
  bgPrimary: '#1C2130',
  bgSecondary: '#2A2E3A',
  bgTertiary: '#3A3F52',

  // Acento
  accent: '#E8773A',
  accentDark: '#DA4531',
  accentLight: '#FEB15F',

  // Marca
  brand: '#348296',

  // Estado
  success: '#34C759',

  // Textos
  white: '#FFFFFF',
  grayLight: '#ccc',
  grayMid: '#bbb',
  grayDark: '#777',
  inputText: '#333',
  placeholder: '#999',
};

export const typography = {
  fontFamily: 'Poppins',
  sizes: {
    xs: 10,
    sm: 11,
    md: 12,
    base: 13,
    lg: 14,
    xl: 21,
  },
  weights: {
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
};

export const spacing = {
  xs: 3,
  sm: 6,
  md: 8,
  lg: 12,
  xl: 14,
  xxl: 16,
  xxxl: 18,
  screen: 16, // padding horizontal de pantalla
};

export const borderRadius = {
  sm: 7,
  md: 9,
  lg: 10,
  xl: 11,
  full: 9999,
};

export const components = {
  // Segmented control (tabs)
  tabs: {
    container: {
      background: colors.bgSecondary,
      borderRadius: borderRadius.md,
      padding: 3,
    },
    active: {
      background: colors.accent,
      color: colors.white,
    },
    inactive: {
      background: 'transparent',
      color: colors.white,
    },
    fontSize: typography.sizes.md,
    fontWeight: typography.weights.semibold,
    paddingVertical: 8,
  },

  // Input fields
  input: {
    height: 46,
    background: '#ffffff',
    borderRadius: borderRadius.lg,
    paddingHorizontal: 12,
    fontSize: typography.sizes.base,
    color: colors.inputText,
    placeholderColor: colors.placeholder,
    border: {
      default: '2px solid transparent',
      focused: `2px solid ${colors.accent}`,
    },
  },

  // Eye button (password toggle)
  eyeButton: {
    size: 30,
    background: colors.accent,
    borderRadius: borderRadius.sm,
    padding: 6,
    iconColor: colors.white,
    strokeWidth: 2.5,
  },

  // Toggle (terms)
  toggle: {
    track: {
      width: 38,
      height: 22,
      borderRadius: 11,
      backgroundOff: '#666',
      backgroundOn: colors.accent,
    },
    knob: {
      size: 16,
      background: colors.white,
      offset: 3,
    },
  },

  // Terms container
  termsContainer: {
    background: colors.bgSecondary,
    borderRadius: borderRadius.lg,
    border: `1px solid ${colors.bgTertiary}`,
    padding: '11px 13px',
    text: 'I agree to the',
    linkText: 'Terms of Use and Privacy Policy',
    fontSize: typography.sizes.xs,
    color: colors.grayLight,
    linkColor: colors.white,
  },

  // CTA button
  ctaButton: {
    height: 46,
    background: colors.accent,
    borderRadius: borderRadius.lg,
    fontSize: typography.sizes.lg,
    fontWeight: typography.weights.bold,
    color: colors.white,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },

  // Divider "or"
  divider: {
    textColor: colors.grayMid,   // #bbb
    lineColor: colors.grayDark,  // #777
    fontSize: typography.sizes.md,
  },

  // Social buttons (Apple + Google)
  socialButton: {
    height: 44,
    background: colors.bgSecondary,
    border: `1px solid ${colors.bgTertiary}`,
    borderRadius: borderRadius.lg,
    fontSize: typography.sizes.sm,
    fontWeight: typography.weights.medium,
    color: colors.white,
    iconSize: 15,
    gap: 6,
  },
};
