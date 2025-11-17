/**
 * Core types for OuiMeet application
 */

export interface Address {
  id: string;
  label: string; // "Maison de Marie", "Bureau Paul", etc.
  fullAddress: string;
  latitude: number;
  longitude: number;
  personId?: string; // Optional: linked to a person
}

export interface Person {
  id: string;
  name: string;
  avatar?: string;
  email?: string;
  preferences: Preferences;
  savedAddresses: Address[];
}

export interface Preferences {
  foodTypes?: string[]; // ["Italian", "Japanese", "Vegetarian"]
  activityTypes?: string[]; // ["Outdoor", "Cultural", "Sports"]
  budget?: 'low' | 'medium' | 'high';
  accessibility?: boolean;
  other?: Record<string, any>;
}

export interface MeetingPoint {
  latitude: number;
  longitude: number;
  name?: string;
  address?: string;
  type: 'calculated' | 'suggested';
}

export interface Suggestion {
  id: string;
  name: string;
  type: 'restaurant' | 'cafe' | 'activity' | 'bar' | 'park' | 'other';
  address: string;
  latitude: number;
  longitude: number;
  rating?: number;
  priceLevel?: number;
  distance?: number; // Distance from meeting point in meters
  travelTime?: number; // Average travel time in minutes
  matchScore?: number; // How well it matches group preferences (0-100)
  imageUrl?: string;
}

export interface Event {
  id: string;
  title: string;
  description?: string;
  date?: Date;
  participants: Person[];
  addresses: Address[];
  meetingPoint?: MeetingPoint;
  suggestions: Suggestion[];
  createdAt: Date;
  updatedAt: Date;
  createdBy: string; // User ID
}

export interface User {
  id: string;
  email: string;
  displayName?: string;
  avatar?: string;
  createdAt: Date;
  person?: Person; // Link to their person profile
}

export interface TravelTimeResult {
  fromAddressId: string;
  toPoint: MeetingPoint;
  durationMinutes: number;
  distanceMeters: number;
  mode: 'driving' | 'walking' | 'transit';
}
