import React, { useState } from "react";
import { StyleSheet ,View,Text,Image,ScrollView,TouchableOpacity} from "react-native";
import rel from "../share/RelativeRes";
import CommentPopUpTop from "./commentPopUpTop";
import FeedBacks from "./feedBacks";
import CustomButtonRed from "../share/CustomButtonRed";
import { StackActions } from '@react-navigation/native';

export default function Comments({navigation}){
    const stackNavigation = navigation;
    const drawerNavigation = navigation.getParent();

    const arrowIcon = require("../../assets/Pictures/arrowIcon.png")
    const emptyHeart = require("../../assets/Pictures/heartEmptyIcon.png") ;
    const filledHeart = require("../../assets/Pictures/heartFilledIcon.png")

    const [heart,setHeart] = useState(false)
    const toHomeCount = 4;
    const onDone = () =>{
        const popAction = StackActions.pop(toHomeCount);
        stackNavigation.dispatch(popAction);
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
                    <Text style={styles.carParkText}>Blue CraAprk Hello ASIIN INSI ISNIININSIISISNISISINIS</Text>
                </View>

                <View style={styles.content3}>
                    <ScrollView>
                        <FeedBacks />
                    </ScrollView>
                </View>

                <View style ={styles.content4}>
                    <CustomButtonRed onPress={onDone} title={"Done"} />
                </View>
            </View>

        </View>
    )
}

const styles =StyleSheet.create({
    container:{

    },
    popUpTop:{
        height: rel("H",80),
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
    }
    
})