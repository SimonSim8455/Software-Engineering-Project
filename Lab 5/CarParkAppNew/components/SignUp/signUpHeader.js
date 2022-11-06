import React from "react";
import { StyleSheet, Text, View ,Dimensions, StatusBar} from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import AntDesign  from 'react-native-vector-icons/AntDesign';
import Rel from "../share/RelativeRes"


const statusBarHeight = StatusBar.currentHeight;

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
                    <TouchableWithoutFeedback onPress={presshandler}>
                        <AntDesign name="arrowleft" size={24} color="black" />
                    </TouchableWithoutFeedback>

                    <Text style ={styles.header2Text}>Create Account</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height: Rel("H",135) - statusBarHeight,
    },
    header1:{
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