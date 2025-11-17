import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { theme } from '../constants/theme';
import { Button, Card } from '../components/ui';

export const HomeScreen = ({ navigation }: any) => {
  const upcomingEvents = []; // TODO: Fetch from Firebase

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>OuiMeet</Text>
        <Text style={styles.subtitle}>Trouvez le point de rencontre parfait</Text>
      </View>

      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Quick Action */}
        <Card variant="elevated" padding="lg" style={styles.heroCard}>
          <Text style={styles.heroTitle}>Nouveau rendez-vous</Text>
          <Text style={styles.heroText}>
            Renseignez les adresses de vos amis et découvrez le lieu idéal pour vous retrouver
          </Text>
          <Button
            title="Commencer"
            onPress={() => navigation.navigate('CreateEvent')}
            size="lg"
            style={styles.heroButton}
          />
        </Card>

        {/* Upcoming Events */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Prochains événements</Text>

          {upcomingEvents.length === 0 ? (
            <Card variant="flat" padding="lg">
              <Text style={styles.emptyText}>
                Aucun événement prévu pour le moment
              </Text>
              <Text style={styles.emptySubtext}>
                Créez votre premier événement pour commencer !
              </Text>
            </Card>
          ) : (
            upcomingEvents.map((event: any) => (
              <Card
                key={event.id}
                variant="elevated"
                padding="md"
                style={styles.eventCard}
                onPress={() => navigation.navigate('MapResults', { eventId: event.id })}
              >
                <Text style={styles.eventTitle}>{event.title}</Text>
                <Text style={styles.eventDetails}>
                  {event.participants.length} participants
                </Text>
              </Card>
            ))
          )}
        </View>

        {/* Quick Tips */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Astuces</Text>
          <Card variant="flat" padding="md" style={styles.tipCard}>
            <Text style={styles.tipIcon}>💡</Text>
            <Text style={styles.tipText}>
              Créez des profils pour vos amis et enregistrez leurs préférences pour des suggestions personnalisées
            </Text>
          </Card>
        </View>
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
    backgroundColor: theme.colors.primary.main,
  },

  title: {
    fontSize: theme.typography.fontSize['4xl'],
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.text.inverse,
    marginBottom: theme.spacing.xs,
  },

  subtitle: {
    fontSize: theme.typography.fontSize.base,
    color: theme.colors.primary.light,
  },

  content: {
    flex: 1,
  },

  scrollContent: {
    padding: theme.spacing.lg,
    paddingBottom: theme.spacing['2xl'],
  },

  heroCard: {
    marginBottom: theme.spacing.xl,
  },

  heroTitle: {
    fontSize: theme.typography.fontSize['2xl'],
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.sm,
  },

  heroText: {
    fontSize: theme.typography.fontSize.base,
    color: theme.colors.text.secondary,
    lineHeight: theme.typography.fontSize.base * theme.typography.lineHeight.relaxed,
    marginBottom: theme.spacing.lg,
  },

  heroButton: {
    marginTop: theme.spacing.sm,
  },

  section: {
    marginBottom: theme.spacing.xl,
  },

  sectionTitle: {
    fontSize: theme.typography.fontSize.xl,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.text.primary,
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

  eventCard: {
    marginBottom: theme.spacing.md,
  },

  eventTitle: {
    fontSize: theme.typography.fontSize.lg,
    fontWeight: theme.typography.fontWeight.semibold,
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.xs,
  },

  eventDetails: {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.text.secondary,
  },

  tipCard: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  tipIcon: {
    fontSize: theme.typography.fontSize['2xl'],
    marginRight: theme.spacing.md,
  },

  tipText: {
    flex: 1,
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.text.secondary,
    lineHeight: theme.typography.fontSize.sm * theme.typography.lineHeight.relaxed,
  },
});
