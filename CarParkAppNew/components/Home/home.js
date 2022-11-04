import React, {useEffect, useState} from "react";
import { Dimensions,StyleSheet,View,StatusBar,TouchableWithoutFeedback, Text,Keyboard} from "react-native";
import Rel from "../share/RelativeRes";
import HomeHeader from "./homeHeader";
import PopUpTop from "../share/popUpTop";
import BottomPopUp from "./bottomPopUp";
import Map from "../Map/map";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import OriDes from "../data/oriDes";
import NearByCarPark from "../data/nearByCarPark";
import FindNearCarPark from "../ReadCSV/findNearCarPark";
import CarParkAPI from "../data/carParkAPI";
import ChooseCarPark from "../data/chooseCarPark";
import UserState from "../data/userState";


const screenHeight = Dimensions.get("screen").height;
const statusBarHeight = StatusBar.currentHeight;


export default function Home({navigation}){
    
    const drawerNavigation = navigation.getParent();
    const stackNavigation = navigation;
    const [pressed,setPressed] = useState(false)
    const [pressedBot,setPressedBot] = useState(false)
    const [title,setTitle] = useState("Customize your location");

    const inputHandler = () => {
        setPressed(!pressed);
    }
    
    const botPressed = () =>{
        setPressedBot(!pressedBot);
        if(!pressedBot)
            setTitle("Nearby Carpark Results")
        else
            setTitle("Customize your location")
    }

    const getDetails =  () => {
        if(OriDes._destinationDetails != null && OriDes._originalDetails != null){
            // FindNearCarPark.setCarParks(5)   //comment this out 
            CarParkAPI.callAPI();
            botPressed();
        }
    }

    // useEffect(()=>{
    //     if(UserState.onSuccessPop && UserState.bufferCarPark){
    //         ChooseCarPark.clear();
    //         ChooseCarPark.setKey(1);
    //         ChooseCarPark.init(UserState.bufferCarPark)
    //         CarParkAPI.getAvail(UserState.bufferCarPark.name)
    //         UserState.setSuccessPop(false);
    //         stackNavigation.navigate("CarParkDetails")
    //     }
    // },[UserState.onSuccessPop])

    const renderPopUpTop = () =>{
        if(pressed==false){
            return(
                <View style={styles.header}>
                    <HomeHeader drawerNavigation={drawerNavigation} onPressBack= {inputHandler}/>
                </View>    
            )
        }
        else{
            return(
                <View style={styles.popUpTop}>
                    <PopUpTop 
                        drawerNavigation={drawerNavigation} 
                        onPressBack= {inputHandler} 
                        onSearch = {getDetails} 
                        title={title}
                    />
                </View >
            )
        }
    }

    const renderPopUpBot = () =>{
        if(pressedBot==false){
            return (
                <TouchableWithoutFeedback onPress={botPressed}>
                    <View style={styles.line}></View>
                </TouchableWithoutFeedback>
            )
        }
        else{
            return(
                <View style={styles.bottomPopUp}>
                    <BottomPopUp 
                        onPress= {botPressed} 
                        stackNavigation= {navigation} 
     
                    />
                </View >
            )
        }
    }


    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <GestureHandlerRootView style={{flex:1}}>
                <Map stackNavigation = {stackNavigation}/>

                {renderPopUpTop()} 
                
                {renderPopUpBot()}
            </GestureHandlerRootView>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container:{
        height:"100%",
        width:"100%",
    },
    header:{
        position:"absolute",
        height: Rel("H",80) -statusBarHeight,
        width:"100%"
    },
    popUpTop:{
        position:"absolute",
        height: Rel("H",200) - statusBarHeight,
        width:"100%"
    },
    button:{
        position:"absolute",
        alignSelf:"flex-end",
        right:Rel("W",20),
        top: Rel("H",0) -statusBarHeight,
        height:Rel("H",200),
    },
    bottomPopUp:{
        position:"absolute",
        alignSelf:"flex-end",
        top: screenHeight-Rel("H",392),
        width:"100%",
        height: Rel("H",375)
    },
    line:{
        width:Rel("W",30),
        height:Rel("H",4),
        alignSelf:"center",
        backgroundColor:"black",
        borderRadius:100,
        marginTop: Rel("H",screenHeight),
        marginBottom: Rel("H",10)
    },
    details:{
        position:"absolute",
        height:screenHeight - Rel("H",190),
        width:"100%",
        zIndex:10,
        marginTop:Rel("H",190),
        flex:1
    },
})