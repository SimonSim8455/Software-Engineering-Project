import React from "react";
import { StyleSheet,View,TouchableOpacity} from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome  from 'react-native-vector-icons/FontAwesome';
import AntDesign  from 'react-native-vector-icons/AntDesign';
import UserState from "../data/userState";
export default function Button({myLocationHandler, zoomInHandler,zoomOutHandler,endNavigate}){
    
    const renderEnd = () =>{
        if(UserState.locState !=3){
            return(
                <TouchableOpacity onPress={endNavigate}>
                    <View style={styles.button}>
                        <FontAwesome name="circle" size={60} color="black" />
                        <MaterialIcons name="cancel-schedule-send" size={35} style={styles.icon} />
                    </View>
                </TouchableOpacity >
            )
        }else{
            return(
                <View></View>
            )
        }
    }
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={endNavigate}>
                <View style={styles.button}>
                    <FontAwesome name="circle" size={60} color="black" />
                    <MaterialIcons name="cancel-schedule-send" size={35} style={styles.icon} />
                </View>
            </TouchableOpacity >
            <TouchableOpacity onPress={myLocationHandler}>
                <View style={styles.button}>
                    <FontAwesome name="circle" size={60} color="black" />
                    <MaterialIcons name="my-location" size={35} style={styles.icon}/>
                </View>
            </TouchableOpacity >

            <TouchableOpacity  onPress={zoomInHandler}>
                <View style={styles.button}>
                    <FontAwesome name="circle" size={60} color="black" />
                    <AntDesign name="plus" size={35} style={styles.icon}/>
                </View>
            </TouchableOpacity >

            <TouchableOpacity  onPress={zoomOutHandler}>
                <View style={styles.button}>
                    <FontAwesome name="circle" size={60} color="black" />
                    <AntDesign name="minus" size={35} style={styles.icon}/>
                </View>
            </TouchableOpacity >
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height:"100%",
        width:"100%",
        alignItems:"center"
    },
    button:{
        justifyContent:"center"
    },
    icon:{
        position:"absolute",
        color:"white",
        alignSelf:"center",
    }
})
