import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import Icon from './icons';
// import FileInput from 'react-native-file-input';
import { StyleSheet, Text, View,TextInput,Image,Button,TouchableHighlight} from 'react-native';

export default function RequestPart() {
    // const [text, setText] = useState('');

    // const handleChangeText = (inputText: string) => {
    //   setText(inputText);
    // };
  return (
    <View style={styles.container}>
        <Image style={styles.logo} source={require('../assets/favicon.png')}/>
      <StatusBar style="auto" />
      <View style={styles.main}>
        <View style={styles.description}> 
            <Text style={styles.paragraph}>Request Partnership</Text>
            <Text style={styles.header}>Welcome to D-TREAT. Please enter your details.</Text>
        </View>
        <View style={styles.form}>
        <TextInput
        style={styles.input}
        placeholder="Full Names"
        // value={text}
        // onChangeText={handleChangeText}
      /> 
        <TextInput
        style={styles.input}
        placeholder="Phone Number"
        // value={text}
        // onChangeText={handleChangeText}
      /> 
        <TextInput
        style={styles.input}
        placeholder="Address"
        // value={text}
        // onChangeText={handleChangeText}
      /> 
         <TextInput
        style={styles.input}
        placeholder="Email"
        // value={text}
        // onChangeText={handleChangeText}
      /> 
         <TextInput
        style={styles.input}
        placeholder="Email"
        // value={text}
        // onChangeText={handleChangeText}
      /> 

     <TextInput
        style={styles.textArea}
        multiline
        numberOfLines={10} // Set the number of lines you want to display initially
        placeholder="Enter Message (Why should you be given the partnership?)2"

      />  
   <TouchableHighlight
  style={{ height: 35, width: 320, backgroundColor: "#009289", borderRadius: 5 }}>
        <Text style={{fontWeight:"500",fontSize:12,color:"white",textAlign:"center",padding:10}}>Send Request</Text>
      </TouchableHighlight>
      <View>
      <Icon name="line" size={32} color="red" style={{ marginRight: 10 }} />
      <Text>OR</Text>
      </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:"100%",
    height:"100%",
    backgroundColor:"white",
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-between",
    alignItems:"center"

  
  },
  logo:{
    position: "relative",
    width: "100%",
    height: "10%",
    left: 21,
    top: 50,
    backgroundColor:"black"
  },
  main:{
    backgroundColor:"white",
    height:"80%",
    width:"80%",
    display:"flex",
    flexDirection:"column"

  },
  description:{
    height:"8%",
    width:"100%",

  },
  paragraph:{
    fontFamily: 'Spartan',
    fontWeight:"600",
    fontSize: 16,
    textAlign:"justify",
    color: "#2B4360",
    width:"100%",
  },
  header:{
    fontFamily: 'Didact Gothic',
    fontStyle: "normal",
    fontWeight:"400",
    fontSize: 10,
    lineHeight:13,
    color: "#91918E",
  },
  form:{
    height:"100%",
    width:'100%',
    // backgroundColor:'blue'
  },
  input:{
    width: "100%", // Equivalent of width: 300px - (2 * borderWidth)
    height: 40,
    backgroundColor: 'rgba(217, 217, 217, 0.1)',
    borderWidth: 0.5,
    borderColor: 'rgba(43, 67, 96, 0.25)',
    borderRadius: 5,
    padding: 10,
    fontSize:10,
    fontWeight:"400",
    marginBottom:20
    
  },
  textArea:{
    width: "100%", // Equivalent of width: 300px - (2 * borderWidth)
    height: 120,
    backgroundColor: 'rgba(217, 217, 217, 0.1)',
    borderWidth: 0.5,
    borderColor: 'rgba(43, 67, 96, 0.25)',
    borderRadius: 5,
    padding: 10,
    fontSize:10,
    fontWeight:"400",
    lineHeight:150,
    marginBottom:20

  }
});
