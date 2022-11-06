import { StyleSheet,View,Text ,Image, TouchableOpacity} from "react-native";
import React, {useEffect, useState} from "react";
import rel from "../share/RelativeRes";
import UserState from "../data/userState";
import DummyUser from "../data/dummyUsers";

export default function HistoryList({stackNavigation}){

    const [carParks,setCarParks] = useState([
        {name:"BlueSGCarPArk", location:"B2, near Lobby B", distance:10, price: 6.05, day: 12, month: 10, year: 2022, time:1.00, key:0},
        {name:"JE Mall", location:"B2, near Lobby B", distance:11, price: 7.05, day: 13, month: 10, year: 2022, time:1.05, key:1},
        {name:"J_Cube", location:"B2, near Lobby B", distance:12, price: 6.90, day: 14, month: 10, year: 2022, time:3.78, key:2},
        {name:"LOL", location:"B2, near Lobby B", distance:13, price: 1.50, day: 15, month: 10, year: 2022, time:8.90, key:3},
        {name:"J_Cube", location:"B2, near Lobby B", distance:12, price: 6.05, day: 16, month: 10, year: 2022, time:2.78, key:4},
        {name:"J_Cube", location:"B2, near Lobby B", distance:12, price: 6.05, day: 17, month: 10, year: 2022, time:3.78, key:5},
        {name:"J_Cube", location:"B2, near Lobby B", distance:12, price: 6.05, day: 18, month: 10, year: 2022, time:2.78, key:6},
    ])

    const [carParks2, setCarParks2] = useState([]);

    useEffect(()=>{
        if(UserState.user_index != -1){
            setCarParks2(DummyUser.userArr[UserState.user_index].history);
        }
    },[UserState.user_index])

    const arrowKey = require("../../assets/Pictures/arrowRightIcon.png")

    const onPressList =(index)=>{
        stackNavigation.navigate("HisCarPark",{index})
    }
    const renderList = () =>{
        let list = (carParks2.map((item,index) =>{
            return(
                <TouchableOpacity style={styles.box} key={index} onPress={() => onPressList(index)}>
                    <View>
                        <Text style={styles.carParkName}>{item.name}</Text>
                        <Text style={styles.price}>{item.total_fare}</Text>
                    </View>

                    <View style={styles.innerBox}>
                        <Text style ={styles.date}>{item.date}  {item.duration} hours</Text>
                        <Image source = {arrowKey} style ={styles.arrowIcon} />
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
        shadowOpacity:30,
        shadowRadius:20,
        elevation:15,
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
    date:{
        fontSize:16,
        fontWeight:"500"
    },
    price:{
        fontSize:22,
        fontWeight:"900",
        position : "absolute",
        right:10
    },
    arrowIcon:{
        height:rel("H",20),
        width:rel("w",20),
        resizeMode:"contain",
        position : "absolute",
        right:0
    }
})