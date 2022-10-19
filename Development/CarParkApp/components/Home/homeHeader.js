import React from "react";
import { StyleSheet, Text, View ,TouchableWithoutFeedback} from "react-native";
import {MaterialIcons} from "@expo/vector-icons";
import Rel from "../share/RelativeRes";
import { Ionicons } from '@expo/vector-icons'; 

export default function HomeHeader({drawerNavigation, onPressBack}) {
    const drawer = () =>{
        drawerNavigation.openDrawer();
    }
    return (
        <View style ={styles.container}>
            <View style ={styles.content}>
                
                <MaterialIcons name= "menu" size={30} style = {styles.menuIcon} onPress ={drawer}/>
                
                <TouchableWithoutFeedback onPress={onPressBack}>
                    <View style = {styles.searchBar}>
                        <Ionicons name="search" size={24} style={styles.sIcon}/>
                        <Text style={styles.sText}>
                            Find Carpark
                        </Text>
                    </View>
                </TouchableWithoutFeedback>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:"flex-end",
        height:"100%",
        width:"100%"
    },
    content:{
        flexDirection:"row",
        paddingLeft:Rel("W",14),
    },
    menuIcon:{
        
    },
    searchBar:{
        flexDirection:"row",
        marginLeft: Rel("W",14),
        backgroundColor:'rgba(62, 70, 83, 0.81)',
        borderWidth:1,
        borderRadius: 5,
        width: Rel("W", 294),
        height: Rel("H",30),
        alignItems:"center"
    },
    sIcon:{
        color:"white",
        paddingLeft: Rel("W",5)
    },
    sText:{
        paddingLeft: Rel("W",5),
        color:"white",
        fontSize:16,
        width:'100%'
    }
})