import React from "react";
import {View,Text,StyleSheet,Image ,TouchableOpacity} from 'react-native';
import rel from "../share/RelativeRes";
import Entypo from 'react-native-vector-icons/Entypo';

export function DrawerContent(props){
    const dummyImg = require("../../assets/Pictures/dummyMilkPic.png")
    const humanGrayIcon = require("../../assets/Pictures/humanGrayIcon.png")
    const bookGrayIcon = require("../../assets/Pictures/bookGrayIcon.png")
    const bankIcon = require("../../assets/Pictures/bankIcon.png")
    
    const onPressFavor = () =>{
        props.navigation.navigate("Favorite")
    }
    const onPressHistory = () =>{
        props.navigation.navigate("History")
    }
    const onPressAccount = () =>{
        props.navigation.navigate("Account")
    }

    const onPressHome = () =>{
        props.navigation.navigate("HomeStack")
    }

    const onPressSandbox = () =>{
        props.navigation.navigate("SandBox")
    }

    return(
        <View style={styles.container}>
            <View style ={styles.content1}>
                    <Image source={dummyImg} style ={styles.backgroundImg} blurRadius={40} />
                <View style={styles.content1_1}>
                    <Image source={dummyImg} style ={styles.profileImg} />
                    <Text style={styles.titlText}>Milk Shake</Text>
                    <Text style={styles.titlText}>MilkShake@gmail.com</Text>
                </View>
            </View>
            <View style={styles.content2}>
                <TouchableOpacity style = {styles.home} onPress={onPressHome}>
                    <Entypo name="home" size={24} color="gray"  />
                    <Text style={styles.accountText}>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.content4} onPress={onPressAccount}>
                    <Image source={bankIcon} style = {styles.bankIcon} />
                    <Text style={styles.accountText}>Account</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.content4} onPress={onPressFavor}>
                    <Image source={humanGrayIcon} style = {styles.humanIcon} />
                    <Text style={styles.favoriteText}>My favorites</Text>
                    <Text style={styles.numFavText}>100</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.content4} onPress={onPressHistory}>
                    <Image source={bookGrayIcon} style = {styles.humanIcon} />
                    <Text style={styles.favoriteText}>My history</Text>
                    <Text style={styles.numFavText}>100</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.content4} onPress={onPressSandbox}>
                    <Image source={bookGrayIcon} style = {styles.humanIcon} />
                    <Text style={styles.favoriteText}>SandBox</Text>
                    <Text style={styles.numFavText}>100</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        shadowColor:"black",
        shadowOpacity:10,
        elevation:100
    },
    content1:{
        height:rel("H",172),
        justifyContent:"center"
    },
    content1_1:{
        marginLeft:rel("W",19),
        marginTop:rel("H",15)
    },
    backgroundImg:{
        resizeMode:"cover",
        width:"100%",
        height:rel("H",172),
        position:"absolute",
    },
    profileImg:{
        width:rel("w",64),
        height:rel("H",59),
        resizeMode:"cover",
        borderRadius:150/2,
        shadowColor: '#202020',
        shadowOffset: {width: 0, height: 10},
        shadowRadius: 5,
        elevation:10,
    },
    titlText:{
        color:"white",
        fontSize:16,
        marginTop:rel("H",5),
        fontWeight:"600"
    },
    bankIcon:{
        height:rel("H",24),
        width:rel("W",24),
        resizeMode:"contain",
        marginLeft:rel("W",13),
        marginTop:rel("H",12),
        marginBottom:rel("H",10)
    },
    home:{
        marginLeft:rel("W",13),
        marginTop:rel("H",12),
        marginBottom:rel("H",10),
        flexDirection:"row",
        alignItems:"center"
    },
    humanIcon:{
        height:rel("H",50),
        width:rel("W",50),
        resizeMode:"contain"
    },
    favoriteText:{
        fontSize:16,
        fontWeight:"500",
        marginLeft:rel("W",10)
    },
    accountText:{
        marginLeft:rel("W",23),
        fontSize:16,
        fontWeight:"500",
    },
    numFavText:{
        fontSize:16,
        fontWeight:"400",
        position:"absolute",
        right:rel("W",20)
    },
    content2:{
        marginLeft:rel("W",5),
        marginTop:rel("H",5),
    },
    content4:{
        flexDirection:"row",
        alignItems:"center"
    }
})