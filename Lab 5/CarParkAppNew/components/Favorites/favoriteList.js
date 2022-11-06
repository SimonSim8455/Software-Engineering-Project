import { StyleSheet,View,Text ,Image, TouchableOpacity} from "react-native";
import React, {useEffect, useState} from "react";
import rel from "../share/RelativeRes";
import UserState from "../data/userState";
import DummyUser from "../data/dummyUsers";
import CarParkAPI from "../data/carParkAPI";

export default function FavoriteList({stackNavigation}){

    const [carParks,setCarParks] = useState([
        {name:"BlueSGCarPArk", location:"B2, near Lobby B", distance:10, time:1, key:0},
        {name:"JE Mall", location:"B2, near Lobby B", distance:11, time:1,key:1},
        {name:"J_Cube", location:"B2, near Lobby B", distance:12, time:1,key:2},
        {name:"LOL", location:"B2, near Lobby B", distance:13, time:1,key:3},
        {name:"J_Cube", location:"B2, near Lobby B", distance:12, time:1,key:4},
        {name:"J_Cube", location:"B2, near Lobby B", distance:12, time:1,key:5},
        {name:"J_Cube", location:"B2, near Lobby B", distance:12, time:1,key:6},
    ])


    useEffect(()=>{
        if(UserState.user_index!=-1){
            let d = DummyUser.userArr[UserState.user_index].favorite;
            let c =[];
            let e = Object.keys(d);
            for(let j=0;j<e.length;j++){
                c[j] = d[e[j]];
            }
            setCarParks(c);
            CarParkAPI.callAPIFav(e)
        }
        UserState.setFavChg(false)
    },[UserState.user_index,UserState.favChg])

    const heartFilled = require("../../assets/Pictures/heartFilledIcon.png")

    const onPressList =(item)=>{
        stackNavigation.navigate("FavCarParkDetails",{item})
    }
    const renderList = () =>{
        
        let list = (carParks.map((item,index) =>{
            return(
                <TouchableOpacity style={styles.box} key={index} onPress={() => onPressList(item)}>
                    <Text style={styles.carParkName}>{item.name}</Text>
                    <View style={styles.innerBox}>
                        <Text style ={styles.location}>{item.location}</Text>
                        <Image source = {heartFilled} style ={styles.heartIcon} />
                    </View>
                </TouchableOpacity>
            )
        }))
        return list;
    }
    return(
        <View style={styles.container}>
            {renderList()}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    box:{
        height:rel("H",78),
        width:rel("w",295),
        shadowColor:"black",
        shadowOpacity:10,
        shadowRadius:10,
        elevation:10,
        backgroundColor:"#ffffff",
        marginBottom:rel("w",22),
        paddingHorizontal:rel("W",5),
        justifyContent:"center"
    },
    carParkName:{
        fontSize:22,
        fontWeight:"800"
    },
    innerBox:{
        flexDirection:"row",
        alignItems:"center"
    },
    location:{
        fontSize:16,
        fontWeight:"500"
    },
    heartIcon:{
        height:rel("H",20),
        width:rel("w",20),
        resizeMode:"contain",
        position : "absolute",
        right:0
    }
})