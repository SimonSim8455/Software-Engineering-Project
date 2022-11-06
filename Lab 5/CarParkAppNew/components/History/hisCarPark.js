import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet ,View,Text,Image,ScrollView,TouchableOpacity, StatusBar} from "react-native";
import rel from "../share/RelativeRes";
import CommentPopUpTop from "../share/popUpTopSmall";
import ChFeedBack from"./chFeedBack"
import CustomButtonRed from "../share/CustomButtonRed";
import { StackActions } from '@react-navigation/native';
import UserHistory from "../data/userHistory";
import HisButtons from "./hisButtons";
import UserState from "../data/userState";
import DummyUser from "../data/dummyUsers";
import { CommonActions } from "@react-navigation/native";

const statusBarHeight = StatusBar.currentHeight;
export default function HisCarPark({navigation,route}){
    const stackNavigation = navigation;
    const drawerNavigation = navigation.getParent();
    const {index} = route.params;
    const arrowIcon = require("../../assets/Pictures/arrowIcon.png")
    const emptyHeart = require("../../assets/Pictures/heartEmptyIcon.png") ;
    const filledHeart = require("../../assets/Pictures/heartFilledIcon.png")

    const [heart,setHeart] = useState(false)
    const [feedBack,setFeedBack] = useState("")
    const [star,setStar] = useState(0);
    const [name,setName] = useState("");
    const [change,setChange] = useState(false);

    useEffect(()=>{
        if(UserState.user_index != -1){
            if(DummyUser.userArr[UserState.user_index].history != []){
                setHeart(DummyUser.userArr[UserState.user_index].history[index].favorite);
                setFeedBack(DummyUser.userArr[UserState.user_index].history[index].feedBack)
                setStar(DummyUser.userArr[UserState.user_index].history[index].rating);
                setName(DummyUser.userArr[UserState.user_index].history[index].name);
            }
        }
    },[UserState.user_index])
    
    const onDone = () =>{
        stackNavigation.goBack();
    }

    const onDelete = () =>{
        DummyUser.userArr[UserState.user_index].rmvHistory(name);
        UserState.setOnChange(true);
        stackNavigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [
                { name: 'History' },
              ],
            })
          );
    }
    const onBack = () =>{
        stackNavigation.goBack();
    }
    
    const renderHeart = () =>{
        if(heart == false){
            return(
                <TouchableOpacity onPress={onHeart}>
                    <Image source = {emptyHeart} style ={styles.emptyHeartIcon} />
                </TouchableOpacity>
            )
        }
        else{
            return(
                <TouchableOpacity onPress={onHeart}>
                        <Image source = {filledHeart} style ={styles.emptyHeartIcon} />
                </TouchableOpacity>
                
            )
        }
    }

    const onHeart = () =>{
        setHeart(!heart)
    }

    return(
        <View style={styles.container}>
            <View style= {styles.popUpTop}>
                <CommentPopUpTop drawerNavigation={drawerNavigation} title ={"Parked"} />
            </View>
            <View style ={styles.content}>
                <View style={styles.content1}>

                    <View style={styles.content1_1}>
                        <TouchableOpacity onPress={onBack}>
                            <Image source={arrowIcon} style = {styles.arrowIcon} />
                        </TouchableOpacity>
                    </View>
                    {renderHeart()}

                </View>

                <View style={styles.content2}>
                    <Text style={styles.carParkText}>{name}</Text>
                </View>

                <View style={styles.content3}>
                    <ScrollView>
                        <ChFeedBack index={index} heart={heart}/>
                    </ScrollView>
                </View>

                <View style ={styles.content4}>
                    <HisButtons onPressDesCar={onDelete} onPressEnd={onDone}/>
                </View>
            </View>

        </View>
    )
}

const styles =StyleSheet.create({
    container:{

    },
    popUpTop:{
        height: rel("H",90)- statusBarHeight,
        width:"100%"
    },
    content:{
        marginHorizontal:rel("W",21),
        marginTop:rel("H",20),
    },
    content1:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"flex-end",
    },
    content1_1:{
        position:"absolute",
        left:0
    },
    arrowIcon:{
        height:rel("H",28),
        width:rel("W",28),
        resizeMode:"contain",
    },
    emptyHeartIcon:{
        height:rel("H",28),
        width:rel("W",28),
        resizeMode:"contain",
        alignSelf:"flex-end",
    },
    content2:{
        flexDirection:"row",
        alignItems:"center",
        height:rel("H",60),
        marginTop:rel("H",10)
    },
    carParkText:{
        fontSize:20,
        fontWeight: "700",
        color:"#001018",
    },
    content3:{
        height:rel("H",460),
        marginTop:rel("H",5),
        alignItems:"center"
    },
    content4:{
        marginTop:rel("H",10),
        alignItems:"center"
    },
    editTextBox:{
        height:rel("H",30),
        width:rel("W",88),
        alignItems:"center",
        borderRadius:10,
        backgroundColor:"#2e3fd7",
    },
    editText:{
        color:"#ffffff",
        fontSize:20,
        fontWeight:"700",
        alignSelf:"center"
    },
    
})