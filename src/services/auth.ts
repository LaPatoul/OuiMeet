import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  User as FirebaseUser,
} from 'firebase/auth';
import { auth } from './firebase';

/**
 * Authentication Service
 * Facilite l'utilisation de Firebase Auth
 */

// S'inscrire avec email et mot de passe
export const signUp = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return { user: userCredential.user, error: null };
  } catch (error: any) {
    console.error('Sign up error:', error);
    return { user: null, error: error.message };
  }
};

// Se connecter avec email et mot de passe
export const signIn = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return { user: userCredential.user, error: null };
  } catch (error: any) {
    console.error('Sign in error:', error);
    return { user: null, error: error.message };
  }
};

// Se déconnecter
export const signOut = async () => {
  try {
    await firebaseSignOut(auth);
    return { error: null };
  } catch (error: any) {
    console.error('Sign out error:', error);
    return { error: error.message };
  }
};

// Écouter les changements d'authentification
export const onAuthChange = (callback: (user: FirebaseUser | null) => void) => {
  return onAuthStateChanged(auth, callback);
};

// Obtenir l'utilisateur actuel
export const getCurrentUser = () => {
  return auth.currentUser;
};
