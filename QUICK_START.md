# 🚀 Guide de Démarrage Rapide - OuiMeet

## 📋 Prérequis

- Node.js installé
- Un compte Google (pour Firebase)
- Expo Go app sur votre téléphone (optionnel, pour tester)

---

## ⚡ Démarrage en 5 minutes

### 1. **Configurer Firebase** (⏱️ 3 minutes)

Suivez le guide détaillé : [FIREBASE_SETUP.md](./FIREBASE_SETUP.md)

**Résumé ultra-rapide :**
1. Créer un projet sur https://console.firebase.google.com
2. Activer **Authentication** > Email/Password
3. Activer **Firestore** > Mode test
4. Récupérer les clés de configuration
5. Créer un fichier `.env` avec vos clés :

```env
FIREBASE_API_KEY=votre_clé
FIREBASE_AUTH_DOMAIN=votre_domain
FIREBASE_PROJECT_ID=votre_project
FIREBASE_STORAGE_BUCKET=votre_bucket
FIREBASE_MESSAGING_SENDER_ID=votre_id
FIREBASE_APP_ID=votre_app_id
```

### 2. **Installer et lancer** (⏱️ 2 minutes)

```bash
# Installer les dépendances (si ce n'est pas déjà fait)
npm install

# Lancer l'app
npm start
```

Scannez le QR code avec **Expo Go** sur votre téléphone, ou :
- Appuyez sur `a` pour Android
- Appuyez sur `i` pour iOS (Mac uniquement)
- Appuyez sur `w` pour Web

---

## 🎯 Tester l'application

### Première connexion

1. L'app s'ouvre sur l'**écran de connexion**
2. Cliquez sur **"Créer un compte"**
3. Entrez un email et un mot de passe (min. 6 caractères)
4. Vous êtes connecté ! 🎉

### Fonctionnalités actuelles

✅ **Authentification**
- Créer un compte
- Se connecter
- Se déconnecter

✅ **Design System**
- Palette verte moderne
- Composants UI réutilisables
- Navigation fluide

✅ **Écrans de base**
- Accueil
- Création d'événement (interface)
- Profil

---

## 🔍 Structure du Projet

```
src/
├── components/ui/      # Button, Card, Input
├── screens/            # AuthScreen, HomeScreen, etc.
├── navigation/         # MainNavigator
├── services/           # Firebase Auth, Firestore
├── hooks/              # useAuth
├── types/              # TypeScript types
└── constants/          # Theme, colors
```

---

## ⚠️ Problèmes courants

### L'app ne démarre pas
```bash
# Nettoyer le cache
npx expo start --clear
```

### Firebase n'est pas initialisé
- Vérifiez que le fichier `.env` existe à la racine
- Vérifiez que toutes les variables sont remplies
- Redémarrez l'app

### Erreur "Permission denied" sur Firestore
- Allez dans Firebase Console > Firestore > Règles
- Vérifiez que vous êtes en mode test

---

## 📱 Prochaines fonctionnalités à implémenter

1. **Autocomplete des adresses** (Google Places API)
2. **Carte interactive** (Mapbox)
3. **Calcul du point optimal** (temps de trajet)
4. **Suggestions personnalisées**
5. **Système de profils**
6. **Partage d'événements**

---

## 🆘 Besoin d'aide ?

- Consultez [FIREBASE_SETUP.md](./FIREBASE_SETUP.md) pour la configuration détaillée
- Consultez [README.md](./README.md) pour la documentation complète
- Ouvrez une issue sur GitHub

---

**🎉 Bonne exploration de OuiMeet !**
