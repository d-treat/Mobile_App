import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Button from './Button';
import Logo from './logo';
// import styles from '../styles/styles'
// import FileInput from 'react-native-file-input';
import {ScrollView, StyleSheet, Text, View,TextInput,Image,TouchableHighlight} from 'react-native';
import {styles} from '../styles/styles'
export default function RequestPart({navigation}:any) {


  const [names, setNames] = useState('');
  const [number, setNumbers] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [organization, setOrganization] = useState('');
  const [textinput, setTextinput] = useState('');
  const handleNameChange = (text: string) =>{
    setNames(text)
};
const handleNumberChange = (text: string) =>{
    setNumbers(text)
};
const handleEmailChange = (text: string) =>{
    setEmail(text)
};
const handleOrganizationChange = (text: string) =>{
    setOrganization(text)
};
const handleAddressChange =(text:string) =>{
  setAddress(text);
}
const handleTextinputChange =(text:string) =>{
  setTextinput(text);
}
const handleSubmit = () => {
    console.log("requesting data");
    console.log(names);
    setNames('');
    setNumbers('');
    setEmail('');
    setOrganization('');
}
const handleNavigation = () => { 
  navigation.navigate('login'); 
};
  return (
    <ScrollView>
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
        value={names}
        onChangeText={handleNameChange}
      /> 
        <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={number}
        onChangeText={handleNumberChange}
      /> 
        <TextInput
        style={styles.input}
        placeholder="Address"
        value={address}
        onChangeText={handleAddressChange}
      /> 
         <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={handleEmailChange}
      /> 
         <TextInput
        style={styles.input}
        placeholder="Organisation"
        value={organization}
        onChangeText={handleOrganizationChange}
      /> 

     <TextInput
        style={styles.textArea}
        multiline
        numberOfLines={10} // Set the number of lines you want to display initially
        placeholder="Message (Why should you be given the partnership?)"
        value={textinput} onChangeText={handleTextinputChange}
      />  
   <TouchableHighlight onPress={handleSubmit}
  style={{ height: 35, width: "100%", backgroundColor: "#009289", borderRadius: 5 }}>
        <Text style={{fontWeight:"500",fontSize:12,color:"white",textAlign:"center",padding:10}}>Send Request</Text>
      </TouchableHighlight>
      <View style={{width:"100%",height:"5%",display:"flex", flexDirection:"row", justifyContent:"space-evenly",alignItems:"center"}}>
      <Image source={require('../assets/Line.png')}/>
      <Text>OR</Text>
      <Image source={require('../assets/Line.png')}/>
      </View>
    <Button title="Cancel"></Button>
    <Text>
                Already Our partner?{' '}
                <TouchableOpacity onPress={handleNavigation}>
                <Text style={styles.textLink}>Sign in</Text>
                </TouchableOpacity>
                </Text>
        </View>
      </View>
    </View>
    </ScrollView>
  );
}