//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image} from 'react-native';

// create a component
const Logo
 = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/logo.jpg')}/>
            <Text style={{color:"#2B4360",fontWeight:"400",fontSize:12, fontFamily:"JejuGothic",textAlign:"auto",paddingBottom:30}}>D-TREAT
            </Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        display:"flex",
        flexDirection:"row",
        // justifyContent: 'space-evenly',
        alignItems: 'center',
        position: "relative",
        width: "100%",
        height: "10%",
        // left: ,
        top: 50,
        // backgroundColor:"pink",
        
    },
});

//make this component available to the app
export default Logo
;
