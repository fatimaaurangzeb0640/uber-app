import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { store } from './store';
import RootStack from './navigators/RootStack';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider style={styles.appContainer}>
        <RootStack/>
      </SafeAreaProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    // borderColor: "red",
    // borderWidth: 2,
    padding: 10
  }
});
