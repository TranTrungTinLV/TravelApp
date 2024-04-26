import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import Attraction from './src/screens/Attraction';
import Gallery from './src/screens/Gallery';

const Stack = createStackNavigator()

export default function App() {
  const appTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#ffffff',
    }
  }
  return (
    <NavigationContainer theme={appTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen component={Home} name='Home' />
        <Stack.Screen component={Attraction} name='Attraction' />
        <Stack.Screen component={Gallery} name='Gallery' />


      </Stack.Navigator>

    </NavigationContainer>

  );
}


const styles = StyleSheet.create(
  {
    flex: {
      flex: 1,
    },
    container: {
      // padding: Platform.OS === 'ios' ? 10 : StatusBar.currentHeight,
      backgroundColor: 'red'
    },
    view: {
      marginTop: 10,
      // flex: 1, 
      backgroundColor: 'yellow'
    },
    text: {
      // color: 'white'
    }
  }
)

