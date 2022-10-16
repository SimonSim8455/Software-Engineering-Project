import React, { useState } from "react";
import { StyleSheet, View,Text,Image } from "react-native";
import SetTimer from "./setTimer";
import SetNotes from "./setNotes";
import rel from "../share/RelativeRes";
import { TouchableOpacity } from "react-native-gesture-handler";


export default function ParkingSetting(){
    const plusGrayIcon = require("D:/STUDY MATERIAL/SC2006/SC2006 Project/CarParkApp/assets/Pictures/grayPlusIcon.png");
    const minusGrayIcon = require("D:/STUDY MATERIAL/SC2006/SC2006 Project/CarParkApp/assets/Pictures/grayMinusIcon.png");

    const [alertTime,setAlertTime] = useState(0)
    const pressedPlusAlertTime = () =>{
        setAlertTime(alertTime+1)
    }
    const pressedMinusAlertTime = () =>{
        setAlertTime(alertTime-1)
    }
    return(
        <View style = {styles.container}>
            <View style={styles.content1}>
                <Text style = {styles.title}>Location:</Text>
                <Text style={styles.desText}>50 GateWay Jurong LON L L LO S A P OPOSOMPPMP OAPOKAP</Text>
                <Text style={[styles.title, {marginTop:rel("H",15)}]}>Enter your parking time estimation:</Text>
            </View>

            <View style={styles.content2}>
                <SetTimer />
            </View>

            <View style={styles.content3}>
                <Text style = {styles.title}>Estimated Carparking Fare:</Text>
                <Text style={styles.desText}>[car] 1.5hrs</Text>
                <Text style={styles.desText}>[mortor] 1.5hrs</Text>
                <Text style={[styles.title, {paddingTop:rel("H",14)}]}>Timer</Text>
                <View style={styles.content3_1}>
                    <Text style={styles.desText}>alert</Text>
                    <View style={styles.alertTimeBox}>
                        <Text style={styles.alertTimeText}>{alertTime}</Text>
                        <TouchableOpacity onPress={pressedPlusAlertTime}>
                            <Image source = {plusGrayIcon} style = {styles.plusGrayIcon} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={pressedMinusAlertTime}>                       
                            <Image source = {minusGrayIcon} style = {styles.plusGrayIcon} />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.desText}>mins before end time</Text>
                </View>
            </View>

            <View style = {styles.content4}>
                <SetNotes />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    content1:{

    },
    title:{
        fontSize:16,
        fontWeight:"400"
    },
    desText:{
        color:"#7b7b7b",
        fontSize:15,
        fontWeight:"400"
    },
    content2:{
        marginTop:rel("H",11),
        height:rel("H",100),
        width:rel("W",240),
        alignSelf:"center",
        borderRadius:16,
        shadowOpacity: 10, 
        shadowRadius:2, 
        shadowColor:"black",
        elevation: 10,
        backgroundColor:"#ffffff"
    },
    content3:{
        marginTop:rel("H",10),
    },
    content3_1:{
        flexDirection:"row"
    },
    alertTimeBox:{
        borderRadius:4,
        borderWidth:1,
        width:rel("W",81),
        height:rel('H',28),
        marginHorizontal:rel("W",10),
        paddingRight:rel("W",5),
        flexDirection:"row",
        alignItems:"center",
        borderColor:"#8996a2",
    },
    alertTimeText:{
        fontSize:16,
        fontWeight:"400",
        paddingLeft:rel("W",10),
        flex:1,
    },
    plusGrayIcon:{
        height:rel("H",20),
        width:rel("W",20),
        resizeMode:"contain"
    },
    content4:{
        height:rel("H",136),
        width:rel("W",305),
        marginTop:rel("H",10),
        backgroundColor:"#f7fcff",
        borderRadius: 16,
    }
})

