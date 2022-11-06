import React, { useEffect, useState } from "react";
import {View,Text,StyleSheet,Image ,TouchableOpacity} from 'react-native';
import rel from "../share/RelativeRes";
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import DummyUser from "../data/dummyUsers";
import UserState from "../data/userState";

export function DrawerContent(props){
    const [dummyImg,setDummyImg] = useState(require('../../assets/Pictures/UploadPhotoIcon.png'));
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [email,setEmail] = useState("")
    const [histNum ,setHisNum] = useState(0);
    const [favNum,setFavNum] = useState(0);

    useEffect(()=>{
        if(UserState.user_index != -1){
            setDummyImg(DummyUser.userArr[UserState.user_index].imageUri);
            setFirstName(DummyUser.userArr[UserState.user_index].firstName)
            setLastName(DummyUser.userArr[UserState.user_index].lastName)
            setEmail(DummyUser.userArr[UserState.user_index].email)
            setHisNum(DummyUser.userArr[UserState.user_index].history.length);
            let a = DummyUser.userArr[UserState.user_index].favorite;
            setFavNum(Object.keys(a).length);
        }
    },[UserState.user_index])

    useEffect(()=>{
        if(UserState.user_index != -1 && UserState.onChnage){
            setDummyImg(DummyUser.userArr[UserState.user_index].imageUri);
            setFirstName(DummyUser.userArr[UserState.user_index].firstName)
            setLastName(DummyUser.userArr[UserState.user_index].lastName)
            setEmail(DummyUser.userArr[UserState.user_index].email)
            setHisNum(DummyUser.userArr[UserState.user_index].history.length);
            let a = DummyUser.userArr[UserState.user_index].favorite;
            setFavNum(Object.keys(a).length);
        }
        UserState.setOnChange(false);
    },[UserState.onChnage])

    const humanGrayIcon = require("../../assets/Pictures/humanGrayIcon.png")
    const bookGrayIcon = require("../../assets/Pictures/bookGrayIcon.png")
    const bankIcon = require("../../assets/Pictures/bankIcon.png")
    
    const onPressFavor = () =>{
        props.navigation.navigate("FavoriteStack")
    }
    const onPressHistory = () =>{
        props.navigation.navigate("HistoryStack")
    }
    const onPressAccount = () =>{
        props.navigation.navigate("Account")
    }

    const onPressHome = () =>{
        props.navigation.navigate("HomeStack")
    }

    // const onPressSandbox = () =>{
    //     props.navigation.navigate("SandBox")
    // }

    const onPressHelp = () =>{
        props.navigation.navigate("HelpPage")
    }

    const onPressLogout = () =>{
        props.navigation.navigate("Login")
    }

    return(
        <View style={styles.container}>
            <View style ={styles.content1}>
                    <Image source={dummyImg} style ={styles.backgroundImg} blurRadius={20} />
                <View style={styles.content1_1}>
                    <Image source={dummyImg} style ={styles.profileImg} />
                    <Text style={styles.titlText}>{firstName} {lastName}</Text>
                    <Text style={styles.email}>{email}</Text>
                </View>
            </View>
            <View style={styles.content2}>
                <TouchableOpacity style = {styles.home} onPress={onPressHome}>
                    <Entypo name="home" size={24} color="gray"  />
                    <Text style={styles.accountText}>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.home} onPress={onPressAccount}>
                    <Entypo name="user" size={24} color="gray"  />
                    <Text style={styles.accountText}>My Account</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.home} onPress={onPressFavor}>
                    <Entypo name="heart" size={24} color="gray"  />
                    <Text style={styles.accountText}>My Favourites</Text>
                    <Text style={styles.numFavText}>{favNum}</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.home} onPress={onPressHistory}>
                    <Entypo name="box" size={24} color="gray"  />
                    <Text style={styles.accountText}>My History</Text>
                    <Text style={styles.numFavText}>{histNum}</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.home} onPress={onPressHelp}>
                    <Entypo name="info-with-circle" size={24} color="gray"  />
                    <Text style={styles.accountText}>Help</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.logout} onPress={onPressLogout}>
                    <Entypo name="log-out" size={24} color="gray"  />
                    <Text style={styles.accountText}>Log Out</Text>
                </TouchableOpacity>

                {/* <TouchableOpacity style = {styles.content4} onPress={onPressSandbox}>
                    <Image source={bookGrayIcon} style = {styles.humanIcon} />
                    <Text style={styles.favoriteText}>SandBox</Text>
                    <Text style={styles.numFavText}>100</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.home} onPress={onPressHelp}>
                    <AntDesign name="questioncircleo" size={24} color="grey"/>
                    <Text style={styles.accountText}>Help</Text>
                </TouchableOpacity> */}
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
        width:rel("w",62),
        height:rel("H",72),
        resizeMode:"cover",
        borderRadius: 400,
        shadowColor: '#202020',
        shadowOffset: {width: 0, height: 10},
        shadowRadius: 5,
        elevation:10,
    },
    titlText:{
        color:"white",
        fontSize:17,
        marginTop:rel("H",5),
        fontWeight:"600",
        textShadowOffset: {width: 1, height: 1},
        textShadowColor: "#a3a3a3",
        textShadowRadius: 1,
    },
    email:{
        color:"white",
        fontSize: 14,
        marginTop:rel("H",1),
        fontWeight:"400",
        textShadowOffset: {width: 1, height: 1},
        textShadowColor: "#a3a3a3",
        textShadowRadius: 1,
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
    },
    logout:{
        marginLeft:rel("W",13),
        marginTop:rel("H",253),
        marginBottom:rel("H",10),
        flexDirection:"row",
        alignItems:"center"
    },
})