import React, {useState} from "react";
import { Dimensions,StyleSheet,View,ImageBackground,TouchableWithoutFeedback, Text,Keyboard} from "react-native";
import Rel from "../share/RelativeRes";
import HomeHeader from "./homeHeader";
import HomeButton from "./button";
import PopUpTop from"./popUpTop";
import BottomPopUp from "./bottomPopUp";

import MapView, {LatLng, PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Constants from "expo-constants";

const screenHeight = Dimensions.get("screen").height;

const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const INITIAL_POSITION = {
  latitude: 1.351900,
  longitude: 103.681940,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
}

export default function Home({navigation}){
    const img = "../../assets/Pictures/mapBackGround.png"
    const [pressed,setPressed] = useState(false)
    const [pressedBot,setPressedBot] = useState(false)
    const [title,setTitle] = useState("Customize your location");

    const drawerNavigation = navigation.getParent();
    
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
                    <PopUpTop drawerNavigation={drawerNavigation} onPressBack= {inputHandler} onSearch = {botPressed} title={title}/>
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
                    <BottomPopUp onPress= {botPressed} stackNavigation= {navigation}/>
                </View >
            )
        }
    }


    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View >
                <MapView 
                    style={styles.map} 
                    initialRegion={INITIAL_POSITION}
                    provider={PROVIDER_GOOGLE}
                >
                </MapView>
             
                {renderPopUpTop()} 
                
                <View style={styles.button}>
                    <HomeButton />
                </View>

                {renderPopUpBot()}

            </View>
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
        height: Rel("H",70),
        width:"100%"
    },
    popUpTop:{
        position:"absolute",
        height: Rel("H",190),
        width:"100%"
    },
    button:{
        position:"absolute",
        alignSelf:"flex-end",
        //justifyContent: "flex-end",
        right:Rel("W",20),
        top: Rel("H",520),
        height:Rel("H",200),
    },
    bottomPopUp:{
        position:"absolute",
        alignSelf:"flex-end",
        top: screenHeight-Rel("H",375),
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

    // GOOGLE MAP
    container1:{
        flex: 1,
        backgroundColor: "#ffffff",
        alignItems: "center",
        justifyContent: "center",
        position: 'absolute',
        top: Constants.statusBarHeight,
        padding: 8,
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    searchContainer: {
        position: 'absolute',
        width: "90%",
        backgroundColor: '#ffffff',
        shadowColor: "#000000",
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 4,
        padding: 8,
        borderRadius: 8,
        top: Constants.statusBarHeight,
  },

})