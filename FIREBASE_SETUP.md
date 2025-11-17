# Guide de Configuration Firebase pour OuiMeet

Ce guide vous explique comment configurer Firebase pour OuiMeet, étape par étape.

## 📋 Étape 1 : Créer un projet Firebase

1. **Aller sur Firebase Console**
   - Ouvrez votre navigateur et allez sur : https://console.firebase.google.com
   - Connectez-vous avec votre compte Google

2. **Créer un nouveau projet**
   - Cliquez sur "Ajouter un projet" (ou "Add project")
   - Nom du projet : `OuiMeet` (ou le nom que vous voulez)
   - Cliquez sur "Continuer"

3. **Google Analytics** (optionnel)
   - Vous pouvez activer Google Analytics si vous voulez
   - Pour commencer, vous pouvez désactiver (plus simple)
   - Cliquez sur "Créer le projet"
   - Attendez quelques secondes... ✅ Projet créé !

---

## 📱 Étape 2 : Ajouter une application Web

1. **Dans la console Firebase**, vous êtes sur la page d'accueil de votre projet
2. **Cliquez sur l'icône Web** `</>`
   - C'est l'icône avec les chevrons en haut de la page
   - Ou allez dans "Paramètres du projet" > "Vos applications" > "Web"

3. **Enregistrer l'application**
   - Surnom de l'app : `OuiMeet Web`
   - ❌ **Ne cochez PAS** "Firebase Hosting" pour le moment
   - Cliquez sur "Enregistrer l'app"

4. **Copier la configuration Firebase**
   - Firebase va vous montrer un code qui ressemble à ça :

   ```javascript
   const firebaseConfig = {
     apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXX",
     authDomain: "ouimeet-xxxxx.firebaseapp.com",
     projectId: "ouimeet-xxxxx",
     storageBucket: "ouimeet-xxxxx.appspot.com",
     messagingSenderId: "123456789012",
     appId: "1:123456789012:web:abcdef123456"
   };
   ```

5. **⚠️ GARDEZ CET ÉCRAN OUVERT** (on va utiliser ces infos dans l'étape 5)

---

## 🔐 Étape 3 : Activer Authentication

1. **Dans le menu de gauche**, cliquez sur "Authentication"
2. Cliquez sur "Commencer" (Get started)
3. **Choisir un mode de connexion** :
   - Cliquez sur "Email/Password"
   - Activez le **premier bouton** "Email/Password" (le deuxième "Email link" reste désactivé)
   - Cliquez sur "Enregistrer"

4. ✅ **Authentication activée !**

---

## 🗄️ Étape 4 : Activer Firestore Database

1. **Dans le menu de gauche**, cliquez sur "Firestore Database"
2. Cliquez sur "Créer une base de données"

3. **Mode de sécurité** :
   - Pour commencer, choisissez **"Démarrer en mode test"**
   - (On sécurisera plus tard, c'est plus simple pour débuter)
   - Cliquez sur "Suivant"

4. **Localisation** :
   - Choisissez `europe-west` ou la région la plus proche de vous
   - Cliquez sur "Activer"
   - Attendez quelques secondes...

5. ✅ **Firestore activé !**

---

## 🔑 Étape 5 : Configurer votre application

1. **Retournez à l'écran de configuration** (étape 2, point 4)
   - Si vous l'avez fermé : Paramètres du projet (⚙️) > En bas de page, vous verrez "Vos applications"

2. **Créer le fichier .env dans votre projet**

   Ouvrez votre terminal dans le projet OuiMeet et créez un fichier `.env` :

   ```bash
   # À la racine de votre projet
   touch .env
   ```

3. **Copier vos clés Firebase dans .env**

   Ouvrez le fichier `.env` et copiez-collez vos clés :

   ```env
   FIREBASE_API_KEY=AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXX
   FIREBASE_AUTH_DOMAIN=ouimeet-xxxxx.firebaseapp.com
   FIREBASE_PROJECT_ID=ouimeet-xxxxx
   FIREBASE_STORAGE_BUCKET=ouimeet-xxxxx.appspot.com
   FIREBASE_MESSAGING_SENDER_ID=123456789012
   FIREBASE_APP_ID=1:123456789012:web:abcdef123456
   ```

   ⚠️ **Remplacez les valeurs par VOS vraies valeurs** copiées depuis Firebase !

4. **Installer le package pour lire .env** (si pas déjà fait)

   ```bash
   npm install react-native-dotenv
   ```

---

## 🎯 Étape 6 : Tester la connexion

1. **Lancez l'application** :
   ```bash
   npm start
   ```

2. Si tout fonctionne, l'app devrait démarrer sans erreur Firebase ✅

---

## 📊 Étape 7 : Créer les collections Firestore (Structure)

Dans la console Firebase > Firestore Database :

### Collection `users`
```
users/
  {userId}/
    email: string
    displayName: string
    avatar: string (optional)
    createdAt: timestamp
```

### Collection `people`
```
people/
  {personId}/
    name: string
    email: string (optional)
    avatar: string (optional)
    preferences: object
    savedAddresses: array
    userId: string (owner)
```

### Collection `events`
```
events/
  {eventId}/
    title: string
    description: string
    participants: array
    addresses: array
    meetingPoint: object
    suggestions: array
    createdAt: timestamp
    createdBy: string (userId)
```

**Note** : Pas besoin de créer manuellement, on le fera dans le code !

---

## 🔒 Étape 8 : Sécuriser Firestore (Plus tard)

Pour le moment en mode test, c'est OK. Quand vous serez prêt à déployer :

1. Firestore Database > Règles
2. Remplacez par :

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can only read/write their own user doc
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }

    // People: only creator can edit
    match /people/{personId} {
      allow read: if request.auth != null;
      allow create: if request.auth != null;
      allow update, delete: if request.auth != null &&
                               resource.data.userId == request.auth.uid;
    }

    // Events: participants can read, creator can write
    match /events/{eventId} {
      allow read: if request.auth != null;
      allow create: if request.auth != null;
      allow update, delete: if request.auth != null &&
                               resource.data.createdBy == request.auth.uid;
    }
  }
}
```

---

## ✅ Checklist complète

- [ ] Projet Firebase créé
- [ ] Application Web ajoutée
- [ ] Authentication activée (Email/Password)
- [ ] Firestore Database activée (mode test)
- [ ] Fichier `.env` créé avec les bonnes clés
- [ ] Application lancée sans erreur

---

## 🆘 Problèmes courants

### ❌ "Firebase not initialized"
→ Vérifiez que votre fichier `.env` est bien à la racine et contient les bonnes clés

### ❌ "Permission denied" sur Firestore
→ Vérifiez que Firestore est en "mode test" dans les règles

### ❌ Les variables d'environnement ne se chargent pas
→ Redémarrez l'app (`npm start`)

---

## 📚 Ressources

- [Documentation Firebase](https://firebase.google.com/docs)
- [Console Firebase](https://console.firebase.google.com)
- [Firestore Guides](https://firebase.google.com/docs/firestore)

---

**🎉 Une fois tout configuré, passez à l'implémentation des features !**
