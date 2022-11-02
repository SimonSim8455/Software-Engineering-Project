import React, { useEffect ,useState} from "react";
import { StyleSheet, View, Text, Image, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity} from "react-native";
import CustomButton from "../share/CustomButtonBlue"
import CheckError from "../Login/checkLoginError"
import Lottie from 'lottie-react-native';
import { useNavigation } from "@react-navigation/native";
import CommentPopUpTop from "../CommentsRatings/commentPopUpTop";
import {MaterialIcons,Ionicons} from "@expo/vector-icons";

export default function LandingPage({navigation}){
    const navigationBack = useNavigation();

    return(
        <View style= {styles.container}>
            <MaterialIcons name= "menu" size={35} style = {styles.menuIcon} onPress ={navigationBack.openDrawer}/>
            <TouchableWithoutFeedback onPress= {Keyboard.dismiss}>
                <View style = {styles.content}>
                    <Lottie style={styles.pic} source={require('../../assets/Pictures/EzPark_Title.mp4.lottie.json')} autoPlay loop/>
                    <TouchableOpacity style={styles.button}>
                        <View style={styles.content2}>
                            <Text style={styles.buttonText}>Start Journey</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button2}>
                        <View style={styles.content3}>
                            <Text style={styles.buttonText2}>Learn More</Text>
                        </View>
                    </TouchableOpacity>
                    <Lottie style={styles.pic2} source={require('../../assets/Pictures/EzPark_Map.mp4.lottie.json')} autoPlay loop/>
                </View>
            </TouchableWithoutFeedback>  
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#0e044d",
        flex:1,
    },
    content:{
        flex :1, 
        padding :20,
        paddingTop: 1,
    },
    menuIcon:{
        color: "white",
        marginLeft: 12,
        marginTop: 30,
    },
    pic:{
        alignSelf: "center",
        marginTop: -5,
        //marginBottom: 60,
        width: 300,
        height: 300,
    },
    pic2:{
        alignSelf: "center",
        //width: "90%",
        height: 300
    },
    content2:{
        backgroundColor:"#00c2cb",
        width:300,
        height:43,
        borderRadius:15,
        justifyContent:"center",
        alignItems:"center",
    },
    buttonText:{
        color:"white",
        fontSize:22,
        fontWeight:"700",
    },
    button:{
        alignItems: "center",
        marginBottom: 25,
        marginTop: 25,
    },
    content3:{
        backgroundColor:"#004aad",
        width:300,
        height:47,
        borderRadius:15,
        justifyContent:"center",
        alignItems:"center",
    },
    buttonText2:{
        color:"white",
        fontSize:22,
        fontWeight:"700",
        padding: 2,
    },
    button2:{
        alignItems: "center",
        marginBottom: 5,
    },
})