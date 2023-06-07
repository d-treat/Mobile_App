import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import Button from './Button';
import Logo from './logo';
// import styles from '../styles/styles'
// import FileInput from 'react-native-file-input';
import { StyleSheet, Text, View,TextInput,Image,TouchableHighlight} from 'react-native';
import {styles} from '../styles/styles'
export default function RequestPart() {
    // const [text, setText] = useState('');

    // const handleChangeText = (inputText: string) => {
    //   setText(inputText);
    // };
  return (
    <View style={styles.container}>
      <Logo></Logo>
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
        placeholder="Organisation"
        // value={text}
        // onChangeText={handleChangeText}
      /> 

     <TextInput
        style={styles.textArea}
        multiline
        numberOfLines={10} // Set the number of lines you want to display initially
        placeholder="Message (Why should you be given the partnership?)"

      />  
   <TouchableHighlight
  style={{ height: 35, width: 320, backgroundColor: "#009289", borderRadius: 5 }}>
        <Text style={{fontWeight:"500",fontSize:12,color:"white",textAlign:"center",padding:10}}>Send Request</Text>
      </TouchableHighlight>
      <View style={{width:"100%",height:"5%",display:"flex", flexDirection:"row", justifyContent:"space-evenly",alignItems:"center"}}>
      <Image source={require('../assets/Line.png')}/>
      <Text>OR</Text>
      <Image source={require('../assets/Line.png')}/>
      </View>
    <Button title="Cancel"></Button>
        </View>
      </View>
    </View>
  );
}