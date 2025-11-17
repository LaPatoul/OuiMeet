import React from 'react';
import { View, StyleSheet, ViewStyle, Pressable } from 'react-native';
import { theme } from '../../constants/theme';

type CardVariant = 'elevated' | 'outlined' | 'flat';
type CardPadding = 'none' | 'sm' | 'md' | 'lg';

interface CardProps {
  children: React.ReactNode;
  variant?: CardVariant;
  padding?: CardPadding;
  style?: ViewStyle;
  onPress?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'elevated',
  padding = 'md',
  style,
  onPress,
}) => {
  const cardStyles = [
    styles.base,
    styles[variant],
    padding !== 'none' && styles[`padding_${padding}`],
    style,
  ];

  if (onPress) {
    return (
      <Pressable
        style={({ pressed }) => [
          ...cardStyles,
          pressed && styles.pressed,
        ]}
        onPress={onPress}
      >
        {children}
      </Pressable>
    );
  }

  return <View style={cardStyles}>{children}</View>;
};

const styles = StyleSheet.create({
  base: {
    borderRadius: theme.card.borderRadius,
    backgroundColor: theme.colors.background.card,
  },

  // Variants
  elevated: {
    ...theme.shadows.md,
  },
  outlined: {
    borderWidth: 1,
    borderColor: theme.colors.border.light,
  },
  flat: {
    backgroundColor: theme.colors.background.secondary,
  },

  // Padding
  padding_sm: {
    padding: theme.card.padding.sm,
  },
  padding_md: {
    padding: theme.card.padding.md,
  },
  padding_lg: {
    padding: theme.card.padding.lg,
  },

  // States
  pressed: {
    opacity: 0.9,
    transform: [{ scale: 0.98 }],
  },
});
