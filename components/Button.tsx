//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableHighlight,TouchableOpacity,  TouchableOpacityProps, StyleProp, ViewStyle, TextStyle } from 'react-native';


interface ButtonProps extends TouchableOpacityProps {
    title: string;
    
  }
// create a component
const Button: React.FC<ButtonProps> = ({ title}) => {
        return (
            <View>
        <TouchableHighlight
  style={{ height: 35, width: "100%", backgroundColor: "#2B4360", borderRadius: 5 }}>
        <Text style={{fontWeight:"500",fontSize:12,color:"white",textAlign:"center",padding:10}}>{title}</Text>
      </TouchableHighlight>
            </View>
        );
    };


// define your styles
// const styles = StyleSheet.create({
//     container: {
//     //     flex: 1,
//     //     justifyContent: 'center',
//     //     alignItems: 'center',
        
//     // },
// });

//make this component available to the app
export default Button;
