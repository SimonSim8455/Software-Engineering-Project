import React ,{useState,useCallback}from "react";
import { StyleSheet ,View,Text,ScrollView} from "react-native";
import PopUpTop from "../share/popUpTop"
import rel from "../share/RelativeRes";
import {Ionicons} from "@expo/vector-icons";
import ParkingSetting from "./parkingSetting";
import CustomButtonRed from "../share/CustomButtonRed";


export default function StartParking({navigation,route}){
    const stackNavigation = navigation;
    const drawerNavigation = navigation.getParent();
    const {name,initialLocations,callbackHome} = route.params;

    const [imageUri,setImageUri] = useState(null);
    const [notes,setNotes] =useState(null);

    const onSearch = (details) =>{
        callbackHome(details);
        stackNavigation.pop(2)
    }

    const onPressConitnue=() =>{
        stackNavigation.navigate("ParkingOnGoing",{name,initialLocations,callbackHome,imageUri,notes})
    }

    const getImgNote = useCallback((imageUri,notes)=>{
        setImageUri(imageUri);
        setNotes(notes);
    })

    return(
        <View style={styles.container}>
            <View style={styles.popUpTop}>
                <PopUpTop 
                    drawerNavigation={drawerNavigation} 
                    onPressBack= {() => navigation.pop()} 
                    onSearch = {onSearch} 
                    title={"Parking"}
                    initialLocations={initialLocations}
                />
            </View>

            <View style = {styles.content}>
                <View style={styles.content1}>
                    <Ionicons name="arrow-back" size={30} color="black" onPress={() => navigation.goBack()}/>
                    <Text style={styles.carParkText}>{name}</Text>
                </View>

                <View style={styles.content2}>
                    <ScrollView>
                        <ParkingSetting getImgNoteCallBack = {getImgNote}/>
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
        height: rel("H",190),
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
        height:rel("H",410),
    },
    content3:{
        marginTop:rel("H",10),
        alignItems:"center"
    }
})