import React ,{useState}from "react";
import { StyleSheet, Text, View , Image} from "react-native";
import {MaterialIcons,Ionicons} from "@expo/vector-icons";
import rel from "../share/RelativeRes";
import CustomButton from "./customButton";

export default function PopUpTop({drawerNavigation,onPressBack, onSearch,title}){
    
    const renderText= (title) =>{
        return <Text style= {styles.text}>{title}</Text>
    }
    const drawer = () =>{
        drawerNavigation.openDrawer();
    }

    const icon1 = "D:/STUDY MATERIAL/SC2006/SC2006 Project/CarParkApp/assets/Pictures/searchIcon1.png"
    const icon2 = "D:/STUDY MATERIAL/SC2006/SC2006 Project/CarParkApp/assets/Pictures/locationIconRed.png"
    return(
            <View style={styles.container}>
                <View style = {styles.content}>
                    <View style={styles.content1}>
                        <MaterialIcons name= "menu" size={35} style = {styles.menuIcon} onPress ={drawer}/>
                        {renderText(title)}
                    </View>

                    <View style={styles.content2}>
                        <Ionicons name="arrow-back" size={24} color="white" onPress= {onPressBack}/>
                        <Image source={require(icon1)} style={styles.icon1}/>
                        <View style={styles.searchBar1}>
                            <Ionicons name="search" size={20} style={styles.icon2}/>
                            <Text style= {styles.text2}>Customize start location or current location</Text>
                        </View>
                    </View>

                    <View style={styles.content3}>
                        <Image source={require(icon2)} style={styles.icon3}/>
                        <View style={styles.searchBar1}>
                            <Ionicons name="search" size={20} style={styles.icon2}/>
                            <Text style= {styles.text2}>Customize start location or current location</Text>
                        </View>
                    </View>

                    <View style={styles.content4}>
                        <CustomButton title={"Search"} onPress={onSearch} />
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
    content2:{
        flexDirection:"row",
        alignItems:"center",
        marginLeft: rel("W",22)

    },
    icon1:{
        width: rel("H",35),
        height: rel("W",35),
        resizeMode:"contain",
    },
    searchBar1:{
        flexDirection:"row",
        backgroundColor:"#c6c6c6",
        borderWidth:1,
        borderRadius: 5,
        width: rel("W", 241),
        height: rel("H",27),
        alignItems:"center",
        
    },
    icon2:{
        color:"white",
        paddingLeft:rel("W",8)
    },
    text2:{
        color:"white",
        fontSize:15,
        marginLeft: rel("W",4),
        alignSelf:"center"
    },
    content3:{
        marginLeft:rel("W",48),
        flexDirection:"row"
    },
    icon3:{
        width: rel("H",24),
        height: rel("W",24),
        marginRight: rel("W",5),
        resizeMode:"contain",
    },
    content4:{
        marginTop:rel("H",8),
        marginLeft:rel("W",75),
        height: rel("H",27),
        width: rel("W",61)
    }
    
    
})