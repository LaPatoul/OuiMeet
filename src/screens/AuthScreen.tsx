import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { theme } from '../constants/theme';
import { Button, Input } from '../components/ui';
import { signIn, signUp } from '../services/auth';

export const AuthScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleAuth = async () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert('Erreur', 'Veuillez remplir tous les champs');
      return;
    }

    setLoading(true);

    const { user, error } = isSignUp
      ? await signUp(email, password)
      : await signIn(email, password);

    setLoading(false);

    if (error) {
      Alert.alert('Erreur', error);
    } else if (user) {
      // L'utilisateur est connecté, la navigation se fera automatiquement
      console.log('User authenticated:', user.uid);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.content}>
        {/* Logo/Title */}
        <View style={styles.header}>
          <Text style={styles.logo}>🗺️</Text>
          <Text style={styles.title}>OuiMeet</Text>
          <Text style={styles.subtitle}>
            Trouvez le point de rencontre parfait
          </Text>
        </View>

        {/* Form */}
        <View style={styles.form}>
          <Input
            label="Email"
            placeholder="votre@email.com"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoComplete="email"
          />

          <Input
            label="Mot de passe"
            placeholder="••••••••"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            autoCapitalize="none"
          />

          <Button
            title={isSignUp ? 'Créer un compte' : 'Se connecter'}
            onPress={handleAuth}
            loading={loading}
            size="lg"
            fullWidth
            style={styles.authButton}
          />

          {/* Toggle Sign In / Sign Up */}
          <View style={styles.toggleContainer}>
            <Text style={styles.toggleText}>
              {isSignUp ? 'Déjà un compte ?' : 'Pas encore de compte ?'}
            </Text>
            <Button
              title={isSignUp ? 'Se connecter' : 'Créer un compte'}
              onPress={() => setIsSignUp(!isSignUp)}
              variant="ghost"
              size="sm"
            />
          </View>
        </View>

        {/* Footer */}
        <Text style={styles.footer}>
          Mode développement - Firebase Test
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background.primary,
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    padding: theme.spacing.lg,
  },

  header: {
    alignItems: 'center',
    marginBottom: theme.spacing['3xl'],
  },

  logo: {
    fontSize: 80,
    marginBottom: theme.spacing.md,
  },

  title: {
    fontSize: theme.typography.fontSize['4xl'],
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.primary.main,
    marginBottom: theme.spacing.xs,
  },

  subtitle: {
    fontSize: theme.typography.fontSize.base,
    color: theme.colors.text.secondary,
    textAlign: 'center',
  },

  form: {
    marginBottom: theme.spacing.xl,
  },

  authButton: {
    marginTop: theme.spacing.md,
  },

  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing.lg,
  },

  toggleText: {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.text.secondary,
    marginRight: theme.spacing.xs,
  },

  footer: {
    fontSize: theme.typography.fontSize.xs,
    color: theme.colors.text.tertiary,
    textAlign: 'center',
    marginTop: theme.spacing.xl,
  },
});
