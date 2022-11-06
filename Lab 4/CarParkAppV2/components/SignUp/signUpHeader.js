import React from "react";
import { StyleSheet, Text, View ,Dimensions} from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import Rel from "../share/RelativeRes"


const ob = Dimensions.get('screen');

export default function SignUpHeader({navigation , title}) {
    const presshandler = () =>{
        navigation.goBack();
    }
    return (
        <View style ={styles.container}>
            <View style ={styles.header1}>
                <Text style = {styles.header1Text}>Sign Up</Text>
            </View>

            <View style ={styles.header2}>
                <View style={styles.header2Content}>
                    <AntDesign name="arrowleft" size={24} color="black" onPress={presshandler}/>
                    <Text style ={styles.header2Text}>Create Account</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height: Rel("H",135),

    },
    header1:{
        height:"62.5%",
        backgroundColor:"#0f0f2d"
    },
    header1Text:{
        fontSize:20,
        color:"white",
        paddingTop:Rel("H",40),
        paddingLeft: Rel("W",58)
    },
    header2:{
        height: "37.5%",
        backgroundColor:"#fff"
    },
    header2Content:{
        paddingLeft: Rel("W",14),
        flexDirection: "row",
        marginTop: 15,

    },
    header2Text:{
        fontSize:20,
        paddingLeft: Rel("W",20),
    }
})