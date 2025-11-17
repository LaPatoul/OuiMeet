import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { theme } from '../constants/theme';
import { Card } from '../components/ui';

export const ProfileScreen = ({ navigation }: any) => {
  // TODO: Get user data from Firebase
  const user = {
    displayName: 'Utilisateur',
    email: 'user@example.com',
  };

  const savedPeople = []; // TODO: Fetch from Firebase

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Profil</Text>
      </View>

      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* User Info */}
        <Card variant="elevated" padding="lg" style={styles.section}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              {user.displayName.charAt(0).toUpperCase()}
            </Text>
          </View>
          <Text style={styles.userName}>{user.displayName}</Text>
          <Text style={styles.userEmail}>{user.email}</Text>
        </Card>

        {/* Saved People */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Mes contacts</Text>
          <Text style={styles.sectionSubtitle}>
            Enregistrez les profils de vos amis pour des suggestions personnalisées
          </Text>

          {savedPeople.length === 0 ? (
            <Card variant="flat" padding="lg">
              <Text style={styles.emptyText}>Aucun contact enregistré</Text>
              <Text style={styles.emptySubtext}>
                Ajoutez des contacts pour faciliter l'organisation de vos événements
              </Text>
            </Card>
          ) : (
            savedPeople.map((person: any) => (
              <Card
                key={person.id}
                variant="outlined"
                padding="md"
                style={styles.personCard}
                onPress={() =>
                  navigation.navigate('PersonProfile', { personId: person.id })
                }
              >
                <View style={styles.personAvatar}>
                  <Text style={styles.personAvatarText}>
                    {person.name.charAt(0).toUpperCase()}
                  </Text>
                </View>
                <View style={styles.personInfo}>
                  <Text style={styles.personName}>{person.name}</Text>
                  <Text style={styles.personDetails}>
                    {person.savedAddresses?.length || 0} adresses enregistrées
                  </Text>
                </View>
              </Card>
            ))
          )}
        </View>

        {/* Settings */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Paramètres</Text>

          <Card variant="outlined" padding="none">
            <TouchableOpacity style={styles.settingItem}>
              <Text style={styles.settingText}>Notifications</Text>
              <Text style={styles.settingArrow}>›</Text>
            </TouchableOpacity>

            <View style={styles.settingDivider} />

            <TouchableOpacity style={styles.settingItem}>
              <Text style={styles.settingText}>Préférences</Text>
              <Text style={styles.settingArrow}>›</Text>
            </TouchableOpacity>

            <View style={styles.settingDivider} />

            <TouchableOpacity style={styles.settingItem}>
              <Text style={styles.settingText}>Confidentialité</Text>
              <Text style={styles.settingArrow}>›</Text>
            </TouchableOpacity>

            <View style={styles.settingDivider} />

            <TouchableOpacity style={styles.settingItem}>
              <Text style={[styles.settingText, styles.logoutText]}>
                Déconnexion
              </Text>
            </TouchableOpacity>
          </Card>
        </View>

        {/* App Info */}
        <Text style={styles.appVersion}>OuiMeet v1.0.0</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background.primary,
  },

  header: {
    paddingTop: theme.spacing['3xl'],
    paddingHorizontal: theme.spacing.lg,
    paddingBottom: theme.spacing.lg,
    backgroundColor: theme.colors.background.primary,
  },

  title: {
    fontSize: theme.typography.fontSize['3xl'],
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.text.primary,
  },

  content: {
    flex: 1,
  },

  scrollContent: {
    padding: theme.spacing.lg,
    paddingBottom: theme.spacing['2xl'],
  },

  section: {
    marginBottom: theme.spacing.xl,
  },

  avatar: {
    width: 80,
    height: 80,
    borderRadius: theme.borderRadius.full,
    backgroundColor: theme.colors.primary.main,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: theme.spacing.md,
  },

  avatarText: {
    fontSize: theme.typography.fontSize['3xl'],
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.text.inverse,
  },

  userName: {
    fontSize: theme.typography.fontSize.xl,
    fontWeight: theme.typography.fontWeight.semibold,
    color: theme.colors.text.primary,
    textAlign: 'center',
    marginBottom: theme.spacing.xs,
  },

  userEmail: {
    fontSize: theme.typography.fontSize.base,
    color: theme.colors.text.secondary,
    textAlign: 'center',
  },

  sectionTitle: {
    fontSize: theme.typography.fontSize.lg,
    fontWeight: theme.typography.fontWeight.semibold,
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.xs,
  },

  sectionSubtitle: {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.text.secondary,
    marginBottom: theme.spacing.md,
  },

  emptyText: {
    fontSize: theme.typography.fontSize.base,
    color: theme.colors.text.secondary,
    textAlign: 'center',
    marginBottom: theme.spacing.xs,
  },

  emptySubtext: {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.text.tertiary,
    textAlign: 'center',
  },

  personCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },

  personAvatar: {
    width: 48,
    height: 48,
    borderRadius: theme.borderRadius.full,
    backgroundColor: theme.colors.primary.light,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: theme.spacing.md,
  },

  personAvatarText: {
    fontSize: theme.typography.fontSize.lg,
    fontWeight: theme.typography.fontWeight.semibold,
    color: theme.colors.primary.dark,
  },

  personInfo: {
    flex: 1,
  },

  personName: {
    fontSize: theme.typography.fontSize.base,
    fontWeight: theme.typography.fontWeight.medium,
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.xs,
  },

  personDetails: {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.text.secondary,
  },

  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.md,
  },

  settingDivider: {
    height: 1,
    backgroundColor: theme.colors.border.light,
    marginHorizontal: theme.spacing.md,
  },

  settingText: {
    fontSize: theme.typography.fontSize.base,
    color: theme.colors.text.primary,
  },

  settingArrow: {
    fontSize: theme.typography.fontSize.xl,
    color: theme.colors.text.tertiary,
  },

  logoutText: {
    color: theme.colors.error,
  },

  appVersion: {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.text.tertiary,
    textAlign: 'center',
    marginTop: theme.spacing.lg,
  },
});
