import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  Timestamp,
} from 'firebase/firestore';
import { db } from './firebase';
import { User, Event, Person } from '../types';

/**
 * Firestore Service
 * Facilite les opérations CRUD sur Firestore
 */

// ==================== USERS ====================

export const createUserProfile = async (userId: string, userData: Partial<User>) => {
  try {
    await updateDoc(doc(db, 'users', userId), {
      ...userData,
      createdAt: Timestamp.now(),
    });
    return { error: null };
  } catch (error: any) {
    // Si le document n'existe pas, on le crée
    try {
      await addDoc(collection(db, 'users'), {
        id: userId,
        ...userData,
        createdAt: Timestamp.now(),
      });
      return { error: null };
    } catch (createError: any) {
      console.error('Create user profile error:', createError);
      return { error: createError.message };
    }
  }
};

export const getUserProfile = async (userId: string) => {
  try {
    const docRef = doc(db, 'users', userId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return { data: { id: docSnap.id, ...docSnap.data() } as User, error: null };
    } else {
      return { data: null, error: 'User not found' };
    }
  } catch (error: any) {
    console.error('Get user profile error:', error);
    return { data: null, error: error.message };
  }
};

// ==================== PEOPLE ====================

export const createPerson = async (personData: Omit<Person, 'id'>) => {
  try {
    const docRef = await addDoc(collection(db, 'people'), personData);
    return { id: docRef.id, error: null };
  } catch (error: any) {
    console.error('Create person error:', error);
    return { id: null, error: error.message };
  }
};

export const getPeople = async (userId: string) => {
  try {
    const q = query(
      collection(db, 'people'),
      where('userId', '==', userId),
      orderBy('name')
    );
    const querySnapshot = await getDocs(q);
    const people = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Person[];

    return { data: people, error: null };
  } catch (error: any) {
    console.error('Get people error:', error);
    return { data: [], error: error.message };
  }
};

export const updatePerson = async (personId: string, personData: Partial<Person>) => {
  try {
    await updateDoc(doc(db, 'people', personId), personData);
    return { error: null };
  } catch (error: any) {
    console.error('Update person error:', error);
    return { error: error.message };
  }
};

export const deletePerson = async (personId: string) => {
  try {
    await deleteDoc(doc(db, 'people', personId));
    return { error: null };
  } catch (error: any) {
    console.error('Delete person error:', error);
    return { error: error.message };
  }
};

// ==================== EVENTS ====================

export const createEvent = async (eventData: Omit<Event, 'id'>) => {
  try {
    const docRef = await addDoc(collection(db, 'events'), {
      ...eventData,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
    });
    return { id: docRef.id, error: null };
  } catch (error: any) {
    console.error('Create event error:', error);
    return { id: null, error: error.message };
  }
};

export const getEvent = async (eventId: string) => {
  try {
    const docRef = doc(db, 'events', eventId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return { data: { id: docSnap.id, ...docSnap.data() } as Event, error: null };
    } else {
      return { data: null, error: 'Event not found' };
    }
  } catch (error: any) {
    console.error('Get event error:', error);
    return { data: null, error: error.message };
  }
};

export const getEvents = async (userId: string, limitCount: number = 20) => {
  try {
    const q = query(
      collection(db, 'events'),
      where('createdBy', '==', userId),
      orderBy('createdAt', 'desc'),
      limit(limitCount)
    );
    const querySnapshot = await getDocs(q);
    const events = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Event[];

    return { data: events, error: null };
  } catch (error: any) {
    console.error('Get events error:', error);
    return { data: [], error: error.message };
  }
};

export const updateEvent = async (eventId: string, eventData: Partial<Event>) => {
  try {
    await updateDoc(doc(db, 'events', eventId), {
      ...eventData,
      updatedAt: Timestamp.now(),
    });
    return { error: null };
  } catch (error: any) {
    console.error('Update event error:', error);
    return { error: error.message };
  }
};

export const deleteEvent = async (eventId: string) => {
  try {
    await deleteDoc(doc(db, 'events', eventId));
    return { error: null };
  } catch (error: any) {
    console.error('Delete event error:', error);
    return { error: error.message };
  }
};
