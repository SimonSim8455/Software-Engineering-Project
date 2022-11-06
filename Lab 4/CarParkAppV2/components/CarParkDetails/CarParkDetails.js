import React from "react";
import { StyleSheet ,View,Text} from "react-native";
import rel from "../share/RelativeRes";
import {Ionicons} from "@expo/vector-icons";
import Buttons from "./Buttons";
import Details from "./details";
import PopUpTop from "../share/popUpTop"
import { getPosition } from "../share/getPosition";


export default function CarParkDetails({navigation,route}){
    const drawerNavigation = navigation.getParent();
    const stackNavigation = navigation;
    const {name , initialLocations, callbackHome} = route.params;
    const onSearch = (details) =>{
        callbackHome(details);
        stackNavigation.pop()
    }
    const onPressStart =() =>{
        navigation.navigate("StartParking", {name,initialLocations, callbackHome})
    }
    const onPressNavigate = () =>{
        navigation.pop()
    }
    const onPressShare = () =>{

    }
    return(
        <View style={styles.container}>
            <View style= {styles.popUpTop}>
                    <PopUpTop drawerNavigation={drawerNavigation} onPressBack= {() => navigation.pop()} 
                    onSearch = {onSearch} title={"Journey"}
                    initialLocations={initialLocations}/>
            </View>
            <View style = {styles.content}>
                <View style={styles.content1}>
                    <Ionicons name="arrow-back" size={30} color="black" onPress={() => navigation.goBack()}/>
                    <Text style={styles.carParkText}>{name}</Text>
                </View>

                <View style={styles.content2}>
                    <Details />
                </View>

                <View style={styles.content3}>
                    <Buttons onPressStart = {onPressStart} onPressShare={onPressShare} onPressNavigate = {onPressNavigate}/>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        height:"100%",
        width:"100%",
        backgroundColor:"white",
    },
    popUpTop:{
        height: rel("H",190),
        width:"100%"
    },
    content:{
        paddingHorizontal:rel("W",21),
        marginTop:rel("H",8),
        //flex:1,
    },
    content1:{
        flexDirection:"row",
        alignItems:"center",
        height:rel("H",60)
    },
    carParkText:{
        fontSize:20,
        fontWeight: "700",
        color:"#001018",
        marginLeft:rel("W",10)
    },
    content2:{
        height:rel("H",380),
        width:"100%",
    },
    
})