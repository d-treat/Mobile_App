import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,Image } from 'react-native';

export default function RequestPart() {
  return (
    <View style={styles.container}>
        <Image style={styles.logo} source={require('../assets/favicon.png')}/>
      <StatusBar style="auto" />
      <View style={{height:"90%",width:"80%",backgroundColor:"green"}}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:"100%",
    height:"100%",
    display:'flex',
    backgroundColor:"blue"
  
  },
  logo:{
    position: "relative",
    width: '10%',
    height: "20%",
    left: 21,
    top: 50

  }

});
