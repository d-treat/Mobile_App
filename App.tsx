import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View, Text, SafeAreaView,TextInput,Image } from 'react-native';
import LoginPage from './pages/Login';
import SignupPage from './pages/SignUp';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import RequestPart from './components/requestPart';
const Stack = createStackNavigator();
export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="signup" component={SignupPage} options={{ headerShown: false }}/>
        <Stack.Screen name="request" component={RequestPart} options={{ headerShown: false }} />
        <Stack.Screen name="login" component={LoginPage} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
      <StatusBar  backgroundColor="#2B4360" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    width:"100%",
    height:"100%",
    backgroundColor:"white"
 
  },
});
