import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { theme } from '../constants/theme';
import { Button, Input, Card } from '../components/ui';
import { Address } from '../types';

export const CreateEventScreen = ({ navigation }: any) => {
  const [eventTitle, setEventTitle] = useState('');
  const [addresses, setAddresses] = useState<Partial<Address>[]>([
    { id: '1', label: '', fullAddress: '' },
    { id: '2', label: '', fullAddress: '' },
  ]);

  const addAddress = () => {
    if (addresses.length >= 10) {
      Alert.alert('Limite atteinte', 'Vous pouvez ajouter maximum 10 adresses');
      return;
    }
    setAddresses([
      ...addresses,
      { id: Date.now().toString(), label: '', fullAddress: '' },
    ]);
  };

  const removeAddress = (id: string) => {
    if (addresses.length <= 2) {
      Alert.alert('Minimum requis', 'Vous devez avoir au moins 2 adresses');
      return;
    }
    setAddresses(addresses.filter((addr) => addr.id !== id));
  };

  const updateAddress = (id: string, field: 'label' | 'fullAddress', value: string) => {
    setAddresses(
      addresses.map((addr) =>
        addr.id === id ? { ...addr, [field]: value } : addr
      )
    );
  };

  const handleCalculate = () => {
    // Validation
    if (!eventTitle.trim()) {
      Alert.alert('Erreur', 'Veuillez saisir un titre pour l\'événement');
      return;
    }

    const emptyAddresses = addresses.filter(
      (addr) => !addr.fullAddress?.trim()
    );
    if (emptyAddresses.length > 0) {
      Alert.alert('Erreur', 'Veuillez remplir toutes les adresses');
      return;
    }

    // TODO: Geocode addresses and navigate to map results
    Alert.alert(
      'En développement',
      'Le calcul du point de rencontre sera bientôt disponible !'
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Nouveau rendez-vous</Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Event Title */}
        <Card variant="flat" padding="md" style={styles.section}>
          <Input
            label="Titre de l'événement"
            placeholder="Week-end entre amis, Cousinade 2025..."
            value={eventTitle}
            onChangeText={setEventTitle}
          />
        </Card>

        {/* Addresses */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Adresses ({addresses.length}/10)
          </Text>
          <Text style={styles.sectionSubtitle}>
            Renseignez entre 2 et 10 adresses
          </Text>

          {addresses.map((address, index) => (
            <Card
              key={address.id}
              variant="outlined"
              padding="md"
              style={styles.addressCard}
            >
              <View style={styles.addressHeader}>
                <Text style={styles.addressNumber}>Adresse {index + 1}</Text>
                {addresses.length > 2 && (
                  <TouchableOpacity
                    onPress={() => removeAddress(address.id!)}
                    style={styles.removeButton}
                  >
                    <Text style={styles.removeButtonText}>✕</Text>
                  </TouchableOpacity>
                )}
              </View>

              <Input
                placeholder="Nom (ex: Maison de Marie)"
                value={address.label}
                onChangeText={(value) => updateAddress(address.id!, 'label', value)}
                containerStyle={styles.input}
              />

              <Input
                placeholder="Adresse complète"
                value={address.fullAddress}
                onChangeText={(value) =>
                  updateAddress(address.id!, 'fullAddress', value)
                }
                containerStyle={styles.input}
                multiline
              />
            </Card>
          ))}

          {addresses.length < 10 && (
            <Button
              title="+ Ajouter une adresse"
              onPress={addAddress}
              variant="outline"
              style={styles.addButton}
            />
          )}
        </View>

        {/* Calculate Button */}
        <Button
          title="Trouver le point de rencontre"
          onPress={handleCalculate}
          size="lg"
          fullWidth
          style={styles.calculateButton}
        />
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: theme.spacing['3xl'],
    paddingHorizontal: theme.spacing.lg,
    paddingBottom: theme.spacing.md,
    backgroundColor: theme.colors.background.primary,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border.light,
  },

  backButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },

  backButtonText: {
    fontSize: theme.typography.fontSize['2xl'],
    color: theme.colors.text.primary,
  },

  headerTitle: {
    fontSize: theme.typography.fontSize.xl,
    fontWeight: theme.typography.fontWeight.semibold,
    color: theme.colors.text.primary,
  },

  headerSpacer: {
    width: 40,
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

  addressCard: {
    marginBottom: theme.spacing.md,
  },

  addressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.sm,
  },

  addressNumber: {
    fontSize: theme.typography.fontSize.base,
    fontWeight: theme.typography.fontWeight.medium,
    color: theme.colors.text.primary,
  },

  removeButton: {
    width: 28,
    height: 28,
    borderRadius: theme.borderRadius.full,
    backgroundColor: theme.colors.error,
    alignItems: 'center',
    justifyContent: 'center',
  },

  removeButtonText: {
    color: theme.colors.text.inverse,
    fontSize: theme.typography.fontSize.base,
    fontWeight: theme.typography.fontWeight.bold,
  },

  input: {
    marginBottom: theme.spacing.sm,
  },

  addButton: {
    marginTop: theme.spacing.sm,
  },

  calculateButton: {
    marginTop: theme.spacing.lg,
  },
});
