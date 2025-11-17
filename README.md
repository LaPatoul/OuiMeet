# OuiMeet

Une application mobile moderne pour trouver le point de rencontre parfait entre amis.

## 📱 Description

OuiMeet permet de calculer le point central optimal entre 2 et 10 adresses, en tenant compte des temps de trajet. Parfait pour organiser des week-ends entre amis, des cousinades ou toute autre rencontre.

## ✨ Fonctionnalités

- 🎯 Calcul du point de rencontre optimal basé sur les temps de trajet
- 🗺️ Carte interactive pour visualiser les adresses et le point central
- 🍽️ Suggestions personnalisées d'activités et de restaurants
- 👥 Profils utilisateurs avec préférences
- 📍 Sauvegarde des adresses favorites
- 🔗 Partage facile avec les participants
- 📊 Calcul d'itinéraires depuis chaque adresse

## 🛠️ Stack Technique

- **Frontend**: React Native + Expo
- **Language**: TypeScript
- **Navigation**: React Navigation
- **Backend**: Firebase (Auth + Firestore)
- **Maps**: React Native Maps / Mapbox
- **Design**: Inspiré de Strava, Airbnb, et Nugget

## 🚀 Installation

```bash
# Installer les dépendances
npm install

# Lancer l'application
npm start

# Lancer sur iOS
npm run ios

# Lancer sur Android
npm run android
```

## ⚙️ Configuration Firebase

1. Créer un projet Firebase sur [console.firebase.google.com](https://console.firebase.google.com)
2. Activer Authentication et Firestore
3. Créer un fichier `.env` à la racine avec vos clés :

```env
FIREBASE_API_KEY=votre_api_key
FIREBASE_AUTH_DOMAIN=votre_auth_domain
FIREBASE_PROJECT_ID=votre_project_id
FIREBASE_STORAGE_BUCKET=votre_storage_bucket
FIREBASE_MESSAGING_SENDER_ID=votre_messaging_sender_id
FIREBASE_APP_ID=votre_app_id
```

## 🎨 Design System

L'application utilise une palette verte sophistiquée :
- **Vert principal**: #00B884 (énergique et moderne)
- **Vert foncé**: #004D40 (profondeur)
- **Vert clair**: #A7F3D0 (accents)

## 📂 Structure du Projet

```
src/
├── components/       # Composants réutilisables
│   ├── ui/          # Composants UI de base (Button, Card, Input)
│   └── shared/      # Composants partagés
├── screens/         # Écrans de l'app
├── navigation/      # Configuration de la navigation
├── services/        # Services (Firebase, API)
├── hooks/           # Custom hooks
├── utils/           # Utilitaires
├── types/           # Types TypeScript
└── constants/       # Constantes (couleurs, thème)
```

## 📝 TODO

- [ ] Implémenter l'autocomplete des adresses
- [ ] Intégrer Mapbox pour les cartes
- [ ] Calculer le point optimal par temps de trajet
- [ ] Ajouter les suggestions personnalisées
- [ ] Implémenter le système de profils
- [ ] Ajouter le partage

## 📄 Licence

MIT

---

Créé avec ❤️ pour faciliter les rencontres entre amis
