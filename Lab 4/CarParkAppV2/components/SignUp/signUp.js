import React, {useEffect, useState} from "react";
import { Keyboard, StyleSheet, Image,Text,View, TouchableOpacity,TouchableWithoutFeedback, Alert} from "react-native";
import Rel from "../share/RelativeRes"
import CustomButton from "../share/CustomButtonBlue"
import * as ImagePicker from 'expo-image-picker';
import SignUpForms2 from "./signUpForms2";

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

    const pickImage = async () => {
        if(!tick2){
            Alert.alert("Please allow app to access your gallery")
            return;
        }
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.cancelled) {
          setImage(result.uri);
        }
    };

    const renderImage = () =>{
        let imgSRC = require('../../assets/Pictures/UploadPhotoIcon.png')
        if(image!=null){
            imgSRC = {uri :image}
        }
        return(
            <Image source = {imgSRC} style = {styles.pic} />
        )
    }

    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <View style={styles.content}>
                    <TouchableOpacity onPress={pickImage}>
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
        height:Rel("H",312),
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

    }
})