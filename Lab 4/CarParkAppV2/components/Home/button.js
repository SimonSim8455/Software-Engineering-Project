import React from "react";
import { StyleSheet,View,TouchableOpacity} from "react-native";
import { MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';

export default function Button({myLocationHandler, zoomInHandler,zoomOutHandler}){
    
    return(
        <View style={styles.container}>
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
