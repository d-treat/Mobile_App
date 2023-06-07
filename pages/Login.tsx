import { StatusBar } from "expo-status-bar";
import React, {useState} from "react";
import Button from '../components/Button';
import Logo from '../components/logo';
import { Text, View,TextInput,Image,TouchableHighlight} from 'react-native';
import {styles} from '../styles/styles';
import axios from "axios";

export default function LoginPage(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleEmailChange = (text: string) => {
        setEmail(text);
      };
    
      const handlePasswordChange = (text: string) => {
        setPassword(text);
      };
      const handleSendRequest = () => {

        const data = {
          email: email,
          password: password,
        };
        axios.post('', data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
    return(
        <View style={styles.container}>
            <Logo></Logo>
            <StatusBar style="auto" />
            <View style={styles.main}>
                <View style={styles.description}>
                    <Text style={styles.paragraph}>Sign In</Text>
                    <Text style={styles.header}>Welcome back to d-treat. PLease enter your details</Text>
                </View>
                <View style={styles.form}>
                <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={handleEmailChange}
                /> 
                <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={handlePasswordChange}
                />
                <TouchableHighlight
                style={{ height: 35, width: 320, backgroundColor: "#009289", borderRadius: 5 }}
                onPress={handleSendRequest}
                >
                <Text style={{ fontWeight: "500", fontSize: 12, color: "white", textAlign: "center", padding: 10 }}>
                    LogIn
                </Text>
                </TouchableHighlight>
                    <View style={{width:"100%",height:"5%",display:"flex", flexDirection:"row", justifyContent:"space-evenly",alignItems:"center"}}>
                        <Image source={require('../assets/Line.png')}/>
                        <Text>OR</Text>
                        <Image source={require('../assets/Line.png')}/>
                    </View>
                <Button title="Login with Google"></Button> 
                </View>
            </View>
        </View>
    )
}