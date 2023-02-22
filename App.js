import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import RestaurantDetailPage from './src/screens/RestaurantDetailsPage';
export default function App() {
  return (
    <View style={styles.container}>
      <RestaurantDetailPage />

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
});
