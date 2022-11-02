import React,{useEffect, useState} from "react";
import { StyleSheet ,View, TouchableOpacity,Image ,TextInput,Text} from "react-native";
import ChooseCarPark from "../data/chooseCarPark";
import rel from "../share/RelativeRes";


export default function SetNotes({edit}){

    const [image,setImage] = useState(ChooseCarPark.imageURI)
    const [initNotes,setInitNotes] = useState(ChooseCarPark.notes);
    const defaultImage = require('../../assets/Pictures/UploadPhotoIcon.png');

    useEffect(()=>{
        ChooseCarPark.setNotes(initNotes);
    },[initNotes])

    const pressedUploadPhoto = () =>{
        // pickImage();
    }

    const renderImage = () =>{
        let imgSRC =  image? {uri :image}: defaultImage;
        if(!edit){
            return(
                <View>
                    <Image source = {imgSRC} style = {styles.uploadPhtoIcon} />
                </View>
            )
        }
        else{
            return(
                <TouchableOpacity onPress={pressedUploadPhoto}>
                    <Image source = {imgSRC} style = {styles.uploadPhtoIcon} />
                </TouchableOpacity>
            )
        }
    }

    // const pickImage = async () => {
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

    const renderNotes = () =>{
        let notesSRC = initNotes? initNotes : "";
        if(!edit){
            return(
                <Text style={styles.input}>
                    {notesSRC}
                </Text>
            )
        }
        else{
            return(
                <TextInput 
                    multiline
                    placeholder="Add your notes here..."
                    style = {styles.input}
                    onChangeText = {(val)=>setInitNotes(val)}
                />
            )
        }
        
    }

    return(
        <View style={styles.container}>
            <View style={styles.content}>
                {renderImage()}
                <View style={styles.verticalLine} />
                {renderNotes()}
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