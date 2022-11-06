import PopUpTopSmall from "./popUpTopSmall"
import React, {useState,useEffect} from "react";
import { StyleSheet,View,Text,Image,StatusBar } from "react-native";
import rel from "../share/RelativeRes"
import DummyUser from "../data/dummyUsers";
import UserState from "../data/userState";

const statusBarHeight = StatusBar.currentHeight;
export default function FavorHistPopUp({drawerNavigation,title}){
    const [dummyImg,setDummyImg] = useState(require('../../assets/Pictures/UploadPhotoIcon.png'));
    useEffect(()=>{
        if(UserState.user_index != -1){
            setDummyImg(DummyUser.userArr[UserState.user_index].imageUri);
        }
    },[UserState.user_index])
    return(
        <View>
            <View style={styles.popUpTop}>
                <PopUpTopSmall drawerNavigation={drawerNavigation} title={title} />
            </View>

            <View style={styles.content1}>
                <Image source={dummyImg} style ={styles.backgroundImg} blurRadius={10} />
                <Image source={dummyImg} style ={styles.profileImg} />
                <Text style={styles.titlText}>Sim2 OL2</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    popUpTop:{
        height:rel("H",90) - statusBarHeight,
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
        width:rel("w",80),
        height:rel("H",100),
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