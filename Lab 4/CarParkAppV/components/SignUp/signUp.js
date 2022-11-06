import React, {useEffect, useState} from "react";
import { Keyboard, StyleSheet, Image,Text,View, TouchableOpacity,TouchableWithoutFeedback, Alert, StatusBar} from "react-native";
import Rel from "../share/RelativeRes"
import CustomButton from "../share/CustomButtonBlue"
import AntDesign  from 'react-native-vector-icons/AntDesign';

import SignUpForms2 from "./signUpForms2";

const statusBarHeight = StatusBar.currentHeight;
export default function SignUp({navigation}) {
    
    const [tick,setTick] = useState(false)
    const [tick2,setTick2] = useState(false);
    const [pressed,setPressed] = useState(false);
    const [passed,setPassed] = useState(false);
    const [image,setImage] = useState(null);
    const [pressed2,setPressed2] = useState(false);

    const checked = "../../assets/Pictures/checkBlue.png";
    const unchecked = "../../assets/Pictures/uncheck.png";
    
    useEffect(() =>{
        if(passed){
            if(!tick){
                Alert.alert("Please allow app to access your location")
            }
            else
            navigation.navigate("Drawer")
        }
    },[passed,pressed2])
    
    useEffect(()=>{
        if(pressed == true)
            setPressed2(!pressed2)
        setPressed(false)
    },[pressed])

    const callBack = () =>{
        setPassed(!passed)
    }

    const renderTicks = () =>{
        return (
            <Image 
                style= {styles.checkBox}
                source = { tick == true? require(checked): require(unchecked)}
            />
        );
    }   

    const renderTicks2 = () =>{
        return (
            <Image 
                style= {styles.checkBox}
                source = { tick2 == true? require(checked): require(unchecked)}
            />
        );
    }  

    // const pickImage = async () => {
    //     if(!tick2){
    //         Alert.alert("Please allow app to access your gallery")
    //         return;
    //     }
    //     let result = await ImagePicker.launchImageLibraryAsync({
    //       mediaTypes: ImagePicker.MediaTypeOptions.All,
    //       allowsEditing: true,
    //       aspect: [4, 3],
    //       quality: 1,
    //     });
    
    //     console.log(result);
    
    //     if (!result.cancelled) {
    //       setImage(result.uri);
    //     }
    // };

    const renderImage = () =>{
        let imgSRC = require('../../assets/Pictures/UploadPhotoIcon.png')
        if(image!=null){
            imgSRC = {uri :image}
        }
        return(
            <Image source = {imgSRC} style = {styles.pic} />
        )
    }

    const presshandler = () =>{
        navigation.goBack();
    }

    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <View style = {styles.popUpTop}>
                    <Text style = {styles.header1Text}>Sign Up</Text>
                </View>

                <View style ={styles.header2}>
                    <View style={styles.header2Content}>
                        <TouchableWithoutFeedback onPress={presshandler}>
                            <AntDesign name="arrowleft" size={24} color="black" />
                        </TouchableWithoutFeedback>

                        <Text style ={styles.header2Text}>Create Account</Text>
                    </View>
                </View>

                <View style={styles.content}>
                    <TouchableOpacity>
                        {renderImage()}
                    </TouchableOpacity>
                   
                    <View style={styles.forms}>
                        <SignUpForms2 isPressed= {pressed} callBack={callBack}/>
                    </View>
                
                    <View style= {styles.tick}>
                        <TouchableOpacity onPress = {() => setTick(!tick)}> 
                            {renderTicks()}
                        </TouchableOpacity>
                        <Text style={styles.tickText}>Allow the app to access your location.</Text>
                    </View>

                    <View style= {styles.tick}>
                        <TouchableOpacity onPress = {() => setTick2(!tick2)}> 
                            {renderTicks2()}
                        </TouchableOpacity>
                        <Text style={styles.tickText}>Allow the app to access your gallery.</Text>
                    </View>

                    <View style={styles.button}>
                        <CustomButton text ={"Register"} onPress ={()=>setPressed(true)} />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff"
    },
    content:{
        flex :1, 
        padding :40,
        paddingTop: 10,
    },
    pic:{
        width: Rel("W",125),
        height: Rel("H",116),
        resizeMode:"contain",
        alignSelf:"center"
    },
    forms:{
        height:Rel("H",340),
        weight:Rel("W",316)
    },
    icon:{
        flex:1,
        color:"#555"
    },
    tick:{
        flexDirection: "row",
        marginTop : 10,
        height: Rel("H",24)
    },
    tickText:{
        paddingLeft : 10,
    },
    button:{
        marginTop:Rel("H",25),
    },
    checkBox:{
        height:20,
        weight:20,
        resizeMode:"contain",

    },
    popUpTop:{
        height:Rel("H",90) - statusBarHeight,
        backgroundColor:"#0f0f2d",
        justifyContent:"center"
    },
    header1Text:{
        fontSize:20,
        color:"white",
        paddingLeft: Rel("W",58)
    },
    header2:{
        backgroundColor:"#fff"
    },
    header2Content:{
        paddingLeft: Rel("W",14),
        flexDirection: "row",
        marginTop: 15,

    },
    header2Text:{
        fontSize:20,
        paddingLeft: Rel("W",20),
    }
})