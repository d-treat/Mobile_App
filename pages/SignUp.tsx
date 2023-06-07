import { StatusBar } from "expo-status-bar";
import React, {useState} from "react";
import Button from '../components/Button';
import Logo from '../components/logo';
import { Text, View,TextInput,Image,TouchableHighlight, TouchableOpacity} from 'react-native';
import {styles} from '../styles/styles';
import axios from "axios";

export default function SignupPage({navigation}: any){
    const [names, setNames] = useState('');
    const [number, setNumbers] = useState('');
    const [email, setEmail] = useState('');
    const [speciality, setSpeciality] = useState('');
    const [gender, setGender] = useState('');
    const [cv, setCv] = useState('');
    const [organization, setOrganization] = useState('');
    const [country, setCountry] = useState('');
    const handleNameChange = (text: string) =>{
        setNames(text)
    };
    const handleNumberChange = (text: string) =>{
        setNumbers(text)
    };
    const handleEmailChange = (text: string) =>{
        setEmail(text)
    };
    const handleCountryChange = (text: string) =>{
        setCountry(text)
    };
    const handleCvChange = (text: string) =>{
        setCv(text)
    };
    const handleSpecialityChange = (text: string) =>{
        setSpeciality(text)
    };
    const handleGenderChange = (text: string) =>{
        setGender(text)
    };
    const handleOrganizationChange = (text: string) =>{
        setOrganization(text)
    };
    const handleSubmit = () => {
        console.log("submitting the form");
        console.log(names);
        setNames('');
        setNumbers('');
        setEmail('');
        setCountry('');
        setCv('');
        setSpeciality('');
        setGender('');
        setOrganization('');
    }
    const handleNavigation = () => { 
        navigation.navigate('login'); 
      };
    return(
        <View style={styles.container}>
            <Logo></Logo>
            <StatusBar style="auto" />
            <View style={styles.main}>
                <View style={styles.description}>
                    <Text style={styles.paragraph}>Sign Up</Text>
                    <Text style={styles.header}>Welcome back to d-treat. PLease enter your details</Text>
                </View>
                <View style={styles.form}>
                <TextInput
                style={styles.input}
                placeholder="Full Names"
                value={names} onChangeText={handleNameChange}
                />
                <TextInput
                style={styles.input}
                placeholder="phone Number"
                value={number} onChangeText={handleNumberChange}
                />
                <TextInput
                style={styles.input}
                placeholder="speciality"
                value={speciality} onChangeText={handleSpecialityChange}
                />
                <TextInput
                style={styles.input}
                placeholder="gender"
                value={gender} onChangeText={handleGenderChange}
                />
                <TextInput
                style={styles.input}
                placeholder="CV"
                value={cv} onChangeText={handleCvChange}
                />
                <TextInput
                style={styles.input}
                placeholder="Email"
                value={email} onChangeText={handleEmailChange}
                />
                <TextInput
                style={styles.input}
                placeholder="organization"
                value={organization} onChangeText={handleOrganizationChange}
                />
                <TextInput
                style={styles.input}
                placeholder="country"              
                value={country} onChangeText={handleCountryChange}
                />
                <TouchableHighlight onPress={handleSubmit}
                style={{ height: 35, width: "100%", backgroundColor: "#009289", borderRadius: 5 }}                >
                <Text style={{ fontWeight: "500", fontSize: 12, color: "white", textAlign: "center", padding: 10 }}>
                    Sign Up
                </Text>
                </TouchableHighlight>
                    <View style={{width:"100%",height:"5%",display:"flex", flexDirection:"row", justifyContent:"space-evenly",alignItems:"center"}}>
                        <Image source={require('../assets/Line.png')}/>
                        <Text>OR</Text>
                        <Image source={require('../assets/Line.png')}/>
                    </View>
                <Button title="Login with Google"></Button> 
                <Text>
                Already have an account?{' '}
                <TouchableOpacity onPress={handleNavigation}>
                <Text style={styles.textLink}>Sign in</Text>
                </TouchableOpacity>
                </Text>
                </View>
            </View>
        </View>
    )
}