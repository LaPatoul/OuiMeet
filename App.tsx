import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MainNavigator } from './src/navigation/MainNavigator';

export default function App() {
  return (
    <SafeAreaProvider>
      <MainNavigator />
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
