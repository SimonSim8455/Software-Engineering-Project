import React from "react";
import { StyleSheet ,View,Text, TouchableWithoutFeedback,StatusBar} from "react-native";
import rel from "../share/RelativeRes";
import Icon from 'react-native-vector-icons/Ionicons';
import Buttons from "./Buttons";
import Details from "./details";
import PopUpTop from "../share/popUpTop"
import OriDes from "../data/oriDes";
import NearByCarPark from "../data/nearByCarPark";
import FindNearCarPark from "../ReadCSV/findNearCarPark";
import ChooseCarPark from "../data/chooseCarPark";
import CarParkAPI from "../data/carParkAPI";
import UserState from "../data/userState";


const statusBarHeight = StatusBar.currentHeight;
export default function CarParkDetails({navigation}){
    const drawerNavigation = navigation.getParent();
    const stackNavigation = navigation;
    const onSearch = () =>{
        if(OriDes._destinationDetails && OriDes._originalDetails){
            FindNearCarPark.setCarParks(5);
            CarParkAPI.callAPI();
        }
        stackNavigation.pop()
    }
    const onPressStart =() =>{
        navigation.navigate("StartParking")
    }
    const onPressNavigate = () =>{
        UserState.setLocState(1)
        navigation.pop()
    }
    const onPressShare = () =>{

    }
    return(
        <View style={styles.container}>
            <View style= {styles.popUpTop}>
                    <PopUpTop 
                        drawerNavigation={drawerNavigation} 
                        onPressBack= {() => navigation.pop()} 
                        onSearch = {onSearch} 
                        title={"Journey"}
                   />
            </View>
            <View style = {styles.content}>
                <View style={styles.content1}>
                    <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                        <Icon name="arrow-back" size={30} color="black" />
                    </TouchableWithoutFeedback>
                    <Text style={styles.carParkText}>{ChooseCarPark.name}</Text>
                </View>

                <View style={styles.content2}>
                    <Details/>
                </View>

                <View style={styles.content3}>
                    <Buttons onPressStart = {onPressStart} onPressShare={onPressShare} onPressNavigate = {onPressNavigate}/>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        height:"100%",
        width:"100%",
        backgroundColor:"white",
    },
    popUpTop:{
        height: rel("H",200) - statusBarHeight,
        width:"100%"
    },
    content:{
        paddingHorizontal:rel("W",21),
        marginTop:rel("H",8),
        //flex:1,
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
        height:rel("H",370),
        width:"100%",
    },
    
})