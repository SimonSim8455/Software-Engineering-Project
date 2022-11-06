import React ,{useState}from "react";
import { StyleSheet, Text, View,TouchableWithoutFeedback } from "react-native";
import rel from "../share/RelativeRes";
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function CommentPopUpTop({drawerNavigation,title}){
    
    const renderText= (title) =>{
        return <Text style= {styles.text}>{title}</Text>
    }
    const drawer = () =>{
        drawerNavigation.openDrawer();
    }

    return(
            <View style={styles.container}>
                <View style = {styles.content}>
                    <View style={styles.content1}>
                        <TouchableWithoutFeedback onPress ={drawer}>
                            <Icon name= "menu" size={35} style = {styles.menuIcon}/>
                        </TouchableWithoutFeedback>
                        {renderText(title)}
                    </View>
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height:'100%',
        width:'100%',
        backgroundColor:"#0f0f2d"
    },
    content:{
        marginTop: rel("H",30),
        marginLeft: rel("W",10)
    },
    content1:{
        flexDirection:"row",
        alignItems:"center"
    },
    menuIcon:{
        color: "white"
    },
    text:{
        marginLeft: rel("W",10),
        color: "white",
        fontSize:20,
    },
})