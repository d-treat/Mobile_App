import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View, Text, SafeAreaView,TextInput,Image } from 'react-native';
import RequestPart from './components/requestPart';

export default function App() {
  return (
    <View style={styles.container}>
      <RequestPart></RequestPart>
      <StatusBar  backgroundColor="#2B4360" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    width:"100%",
    height:"100%",
    backgroundColor:"green"
 
  },
});
