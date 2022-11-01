import React, {useState} from "react";
import { Dimensions,StyleSheet,View,ImageBackground,TouchableWithoutFeedback, Text,Keyboard} from "react-native";
import Rel from "../share/RelativeRes";
import Lottie from 'lottie-react-native';

export default function LandingPage(){
    <View style={styles.container}>
        <View>
            <Text>landing page</Text>
        </View>
    </View>

};



const styles = StyleSheet.create({
    container:{
        backgroundColor: "#0e044d",
        height: "100%",
        width:"100%",
    },
    pic:{
        alignSelf:"center",
        marginTop:30,
        marginBottom: 60,
        width: 300,
        height: 300,
    },
});