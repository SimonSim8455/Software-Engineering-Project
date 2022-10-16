import React from "react";
import { StyleSheet ,View, TouchableOpacity,Image ,TextInput} from "react-native";
import rel from "../share/RelativeRes";


export default function SetNotes(){

    const pressedUploadPhoto = () =>{
        console.log("location setNotes at parking settings")
    }
    const uploadPhotoIcon = require("D:/STUDY MATERIAL/SC2006/SC2006 Project/CarParkApp/assets/Pictures/UploadPhotoIcon.png");
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <TouchableOpacity onPress={pressedUploadPhoto}>
                    <Image source = {uploadPhotoIcon} style ={styles.uploadPhtoIcon} />
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