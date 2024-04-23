import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home';

export default function App() {
  return (
     <Home/>

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

