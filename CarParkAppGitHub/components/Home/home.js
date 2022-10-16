import React, {useState} from "react";
import { Dimensions,StyleSheet,View,ImageBackground,TouchableWithoutFeedback, Text,Keyboard} from "react-native";
import Rel from "../share/RelativeRes";
import HomeHeader from "./homeHeader";
import HomeButton from "./button";
import PopUpTop from"./popUpTop";
import BottomPopUp from "./bottomPopUp";

const screenHeight = Dimensions.get("screen").height;
export default function Home({navigation}){
    const img = "D:/STUDY MATERIAL/SC2006/SC2006 Project/CarParkApp/assets/Pictures/mapBackGround.png"
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
            <View>
                <ImageBackground source= {require(img)} style = {styles.container}>
                    
                    {renderPopUpTop()}              
                    
                    <View style={styles.button}>
                        <HomeButton />
                    </View>

                    {renderPopUpBot()}
                
                </ImageBackground>
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
    }
})