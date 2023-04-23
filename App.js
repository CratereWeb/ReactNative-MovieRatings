import { StyleSheet, Text, View } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import AddFilmScreen from './components/screens/AddFilmScreen';
import FilmothequeScreen from './components/screens/FilmothequeScreen';


export default function App() {

  const Stack = createNativeStackNavigator();
  
  return (

    <NavigationContainer>
      <Text title="Movie Ratings"></Text>
      <Stack.Navigator initialRouteName='Filmothèque'>
        <Stack.Screen name={'Filmothèque'} component={FilmothequeScreen} ></Stack.Screen>
        <Stack.Screen name={'Ajouter un film'} component={AddFilmScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
