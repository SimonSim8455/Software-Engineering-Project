import PopUpTopSmall from "./popUpTopSmall"
import React from "react";
import { StyleSheet,View,Text,Image } from "react-native";
import rel from "../share/RelativeRes"


const dummyImg = require("D:/STUDY MATERIAL/SC2006/SC2006 Project/CarParkApp/assets/Pictures/dummyMilkPic.png")

export default function FavorHistPopUp({drawerNavigation,title}){
    return(
        <View>
            <View style={styles.popUpTop}>
                <PopUpTopSmall drawerNavigation={drawerNavigation} title={title} />
            </View>

            <View style={styles.content1}>
                <Image source={dummyImg} style ={styles.backgroundImg} blurRadius={10} />
                <Image source={dummyImg} style ={styles.profileImg} />
                <Text style={styles.titlText}>Milk Shake</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    popUpTop:{
        height:rel("H",80),
        width:"100%"
    },
    content1:{
        width:"100%",
        height:rel("H",158),
        alignItems:"center",
        justifyContent:"center"
    },
    backgroundImg:{
        resizeMode:"cover",
        width:"100%",
        height:rel("H",158),
        position:"absolute",
    },
    profileImg:{
        width:rel("w",110),
        height:rel("H",99),
        resizeMode:"cover",
        borderRadius:150/2,
    },
    titlText:{
        color:"white",
        fontSize:16,
        marginTop:rel("H",5),
        fontWeight:"600"
    },
})