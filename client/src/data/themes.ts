export interface Theme {
  id: string;
  name: string;
  germanName: string;
  icon: string;
  description: string;
  color: string;
}

export const themes: Theme[] = [
  { id: 'familie', name: 'Family', germanName: 'Familie', icon: '👨‍👩‍👧‍👦', description: 'Family members, relationships', color: '#7c83ff' },
  { id: 'wohnen', name: 'Living', germanName: 'Wohnen', icon: '🏠', description: 'Housing, rooms, furniture', color: '#ff6b6b' },
  { id: 'einkaufen', name: 'Shopping', germanName: 'Einkaufen', icon: '🛒', description: 'Shopping, stores, prices', color: '#51cf66' },
  { id: 'essen', name: 'Food', germanName: 'Essen', icon: '🍽️', description: 'Food, drinks, restaurants', color: '#ffc107' },
  { id: 'arbeit', name: 'Work', germanName: 'Arbeit', icon: '💼', description: 'Jobs, workplace, applications', color: '#00bcd4' },
  { id: 'freizeit', name: 'Free Time', germanName: 'Freizeit', icon: '⚽', description: 'Hobbies, sports, activities', color: '#e91e63' },
  { id: 'reisen', name: 'Travel', germanName: 'Reisen', icon: '✈️', description: 'Travel, transport, directions', color: '#ff9800' },
  { id: 'gesundheit', name: 'Health', germanName: 'Gesundheit', icon: '🏥', description: 'Body, health, doctor visits', color: '#4caf50' },
  { id: 'medien', name: 'Media', germanName: 'Medien', icon: '📱', description: 'Phone, internet, TV, news', color: '#9c27b0' },
  { id: 'natur', name: 'Nature', germanName: 'Natur', icon: '🌳', description: 'Weather, environment, animals', color: '#009688' },
];
