// Crew Spotter — Design Tokens
// Versión 1.2 — Paleta de grises unificada en tono azulado
// Todos los grises siguen la misma familia cromática que los fondos (#1C2130, #2A2E3A, #3A3F52)

export const colors = {
  // ─── Fondos (azul oscuro) ───────────────────────────────
  bgPrimary:   '#1C2130',  // Fondo principal de pantallas
  bgSecondary: '#2A2E3A',  // Tarjetas, modales, inputs oscuros
  bgTertiary:  '#3A3F52',  // Bordes, elementos elevados

  // ─── Grises (misma familia azulada, progresión de oscuro a claro) ───
  gray100: '#3A3F52',  // Más oscuro — bordes sobre fondos secundarios
  gray200: '#4A5066',  // Bordes sutiles, separadores
  gray300: '#5A5F6E',  // Stepper pendiente, elementos inactivos — APROBADO
  gray400: '#7A8096',  // Textos deshabilitados
  gray500: '#9AA0B2',  // Placeholder, metadata
  gray600: '#B8BECF',  // Textos secundarios, subtítulos
  gray700: '#D0D4E0',  // Textos terciarios, labels suaves

  // ─── Acento (naranja) ───────────────────────────────────
  accent:      '#E8773A',
  accentDark:  '#DA4531',
  accentLight: '#FEB15F',

  // ─── Marca (azul petróleo) ──────────────────────────────
  brand:      '#348296',
  brandDark:  '#284248',
  brandLight: '#BBDADD',

  // ─── Estado ─────────────────────────────────────────────
  success: '#34C759',
  warning: '#FFE577',
  error:   '#E24B4A',

  // ─── Base ───────────────────────────────────────────────
  white:     '#FFFFFF',
  inputBg:   '#FFFFFF',
  inputText: '#333333',
};

export const typography = {
  fontFamily: 'Poppins',
  sizes: { xs: 10, sm: 11, md: 12, base: 13, lg: 14, xl: 21, xxl: 24 },
  weights: { regular: '400', medium: '500', semibold: '600', bold: '700' },
};

export const spacing = {
  xs: 3, sm: 6, md: 8, lg: 12, xl: 14, xxl: 16, xxxl: 18, screen: 16,
};

export const borderRadius = {
  sm: 7, md: 9, lg: 10, xl: 11, full: 9999,
};

export const components = {
  tabs: {
    container: { background: '#2A2E3A', borderRadius: 9, padding: 3 },
    active:    { background: '#E8773A', color: '#FFFFFF' },
    inactive:  { background: 'transparent', color: '#FFFFFF' },
    fontSize: 12, fontWeight: '600', paddingVertical: 8,
  },
  input: {
    height: 46, background: '#FFFFFF', borderRadius: 10,
    paddingHorizontal: 12, fontSize: 13,
    color: '#333333', placeholderColor: '#9AA0B2',
    border: { default: '2px solid transparent', focused: '2px solid #E8773A' },
  },
  eyeButton: {
    size: 30, background: '#E8773A', borderRadius: 7,
    padding: 6, iconColor: '#FFFFFF', strokeWidth: 2.5,
  },
  toggle: {
    track: { width: 38, height: 22, borderRadius: 11, backgroundOff: '#5A5F6E', backgroundOn: '#E8773A' },
    knob:  { size: 16, background: '#FFFFFF', offset: 3 },
  },
  termsContainer: {
    background: '#2A2E3A', borderRadius: 10, border: '1px solid #3A3F52',
    padding: '11px 13px', text: 'I agree to the',
    linkText: 'Terms of Use and Privacy Policy',
    fontSize: 10, color: '#B8BECF', linkColor: '#FFFFFF',
  },
  ctaButton: {
    height: 46, background: '#E8773A', borderRadius: 10,
    fontSize: 14, fontWeight: '700', color: '#FFFFFF',
    textTransform: 'uppercase', letterSpacing: 1,
  },
  divider: {
    textColor: '#B8BECF',  // gray600
    lineColor:  '#7A8096',  // gray400
    fontSize: 12,
  },
  socialButton: {
    height: 44, background: '#2A2E3A', border: '1px solid #3A3F52',
    borderRadius: 10, fontSize: 11, fontWeight: '500',
    color: '#FFFFFF', iconSize: 15, gap: 6,
  },
  stepper: {
    size: 28, borderRadius: 9999, fontSize: 12, fontWeight: '700', color: '#FFFFFF',
    states: { pending: '#5A5F6E', active: '#E8773A', completed: '#34C759' },
    line:   { height: 2, pending: '#5A5F6E', completed: '#E8773A' },
  },
};
