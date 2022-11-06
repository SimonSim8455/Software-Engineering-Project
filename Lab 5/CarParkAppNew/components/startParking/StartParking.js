import React ,{useState,useCallback}from "react";
import { StyleSheet ,View,Text,ScrollView,StatusBar} from "react-native";
import PopUpTop from "../share/popUpTop"
import rel from "../share/RelativeRes";
import Ionicons from 'react-native-vector-icons/Ionicons';
import ParkingSetting from "./parkingSetting";
import CustomButtonRed from "../share/CustomButtonRed";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import OriDes from "../data/oriDes";
import NearByCarPark from "../data/nearByCarPark";
import FindNearCarPark from "../ReadCSV/findNearCarPark";
import ChooseCarPark from "../data/chooseCarPark";
import CarParkAPI from "../data/carParkAPI";

const statusBarHeight = StatusBar.currentHeight;
export default function StartParking({navigation}){
    const stackNavigation = navigation;
    const drawerNavigation = navigation.getParent();

    const onSearch = () =>{
        if(OriDes._destinationDetails && OriDes._originalDetails){
            FindNearCarPark.setCarParks(5);
            CarParkAPI.callAPI();
        }
        stackNavigation.pop(2)
    }

    const onPressConitnue=() =>{
        Date.prototype.addHours = function(h) {
            this.setTime(this.getTime() + (h*60*60*1000));
            return this;
        }
        const date = new Date();
        let a = date.toLocaleString('en-US', {hour12: false});
        date.addHours(ChooseCarPark.duration);
        let c = a.length;
        let d = date.toLocaleString('en-US', {hour12: false});
        ChooseCarPark.setStartTime(a.substring(c-8,c-3));
        ChooseCarPark.setEndTime(d.substring(c-8,c-3))
        ChooseCarPark.setDate(a.substring(0,c-10))
        stackNavigation.navigate("ParkingOnGoing")
    }

    return(
        <View style={styles.container}>
            <View style={styles.popUpTop}>
                <PopUpTop 
                    drawerNavigation={drawerNavigation} 
                    onPressBack= {() => navigation.pop()} 
                    onSearch = {onSearch} 
                    title={"Parking"}
                />
            </View>

            <View style = {styles.content}>
                <View style={styles.content1}>
                    <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                        <Ionicons name="arrow-back" size={30} color="black" />
                    </TouchableWithoutFeedback>
                    <Text style={styles.carParkText}>{ChooseCarPark.name}</Text>
                </View>

                <View style={styles.content2}>
                    <ScrollView>
                        <ParkingSetting  />
                    </ScrollView>
                </View>
            </View>

            <View style = {styles.content3}>
                <CustomButtonRed title={"Continue"} onPress = {onPressConitnue}/>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height: "100%",
        width:"100%",
        backgroundColor:"white"
    },
    popUpTop:{
        height: rel("H",200) -statusBarHeight,
        width:"100%"
    },
    content:{
        paddingHorizontal:rel("W",21),
        marginTop:rel("H",8),
    },
    content1:{
        flexDirection:"row",
        alignItems:"center",
        height:rel("H",60)
    },
    carParkText:{
        fontSize:20,
        fontWeight: "700",
        color:"#001018",
        marginLeft:rel("W",10)
    },
    content2:{
        width:"100%",
        height:rel("H",400),
    },
    content3:{
        marginTop:rel("H",10),
        alignItems:"center"
    }
})