import React,{useEffect, useState} from "react";
import { StyleSheet ,View, TouchableOpacity,Image ,TextInput} from "react-native";
import rel from "../share/RelativeRes";
import * as ImagePicker from 'expo-image-picker';


export default function SetNotes(){
    const[image,setImage] = useState(null)


    const pressedUploadPhoto = () =>{
        pickImage();
    }

    const renderImage = () =>{
        let imgSRC = require('../../assets/Pictures/UploadPhotoIcon.png')
        if(image!=null){
            imgSRC = {uri :image}
        }
        return(
            <Image source = {imgSRC} style = {styles.uploadPhtoIcon} />
        )
    }

    const pickImage = async () => {
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

    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <TouchableOpacity onPress={pressedUploadPhoto}>
                    {renderImage()}
                </TouchableOpacity>
                <View style={styles.verticalLine} />
                <TextInput 
                    multiline
                    placeholder="Add your notes here..."
                    style = {styles.input}
                />
            </View>
        </View>
    )   
}

const styles = StyleSheet.create({
    container:{
        height:"100%",
        width:"100%",
        justifyContent:"center"
    },
    content:{
        flexDirection:"row",
        marginHorizontal:rel("W",3)
    },
    uploadPhtoIcon:{
        height:rel("H",120),
        width:rel('W',120),
        resizeMode:"contain"
    },
    verticalLine:{
        height: rel("H",101),
        borderLeftColor:"#d9dde1",
        borderLeftWidth:1.3,
        paddingHorizontal:rel("W",10),
        alignSelf:"center"
    },
    input:{
        alignSelf:"flex-start",
        flex:1,
        color:"#7b7b7b"
    }
})