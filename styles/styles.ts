import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
    
      },
      textLink:{
        padding: 10,
        color: "#218D82",
        textDecorationLine: "underline",
      }
    });