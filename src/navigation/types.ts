import { Event } from '../types';

export type RootStackParamList = {
  MainTabs: undefined;
  CreateEvent: { eventId?: string };
  MapResults: { eventId: string };
  PersonProfile: { personId: string };
  EditPreferences: { personId: string };
};

export type MainTabParamList = {
  Home: undefined;
  Events: undefined;
  Profile: undefined;
};
