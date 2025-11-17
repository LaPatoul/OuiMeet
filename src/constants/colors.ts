/**
 * OuiMeet Color Palette
 * Inspired by modern, sophisticated design
 * Primary: Green (energetic, not corporate)
 */

export const colors = {
  // Primary greens - sophisticated and energetic
  primary: {
    main: '#00B884',      // Main green - vibrant and modern
    dark: '#004D40',      // Deep green for depth
    light: '#A7F3D0',     // Soft green for accents
    muted: '#6EE7B7',     // Medium green
  },

  // Neutral palette - warm grays
  neutral: {
    white: '#FFFFFF',
    offWhite: '#FAFAFA',
    lightest: '#F5F5F5',
    lighter: '#E8E8E8',
    light: '#D1D5DB',
    medium: '#9CA3AF',
    dark: '#4B5563',
    darker: '#1F2937',
    black: '#111827',
  },

  // Semantic colors
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
  info: '#3B82F6',

  // Backgrounds
  background: {
    primary: '#FFFFFF',
    secondary: '#F9FAFB',
    tertiary: '#F3F4F6',
    card: '#FFFFFF',
  },

  // Text colors
  text: {
    primary: '#111827',
    secondary: '#6B7280',
    tertiary: '#9CA3AF',
    inverse: '#FFFFFF',
    link: '#00B884',
  },

  // Border colors
  border: {
    light: '#E5E7EB',
    medium: '#D1D5DB',
    dark: '#9CA3AF',
  },

  // Overlay & shadows
  overlay: 'rgba(0, 0, 0, 0.5)',
  shadow: 'rgba(0, 0, 0, 0.1)',
} as const;

export type Colors = typeof colors;
