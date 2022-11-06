import React from "react";
import { StyleSheet,View,TouchableOpacity,Text} from "react-native";
import rel from "../share/RelativeRes";
import Fontisto   from 'react-native-vector-icons/Fontisto';

export default function CustomButton({onPress, title}){
    return(
        <TouchableOpacity onPress={onPress}>
            <View style= {styles.container}>
                <Text style={styles.text}>{title}</Text>
                <Fontisto name="angle-down" size={20} style={styles.icon}/>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container:{
        height:rel("H",32),
        width:rel("W",296),
        backgroundColor:"rgba(255, 255, 255, 0.62)",
        alignItems:"center",
        borderRadius: 32,
        marginTop:rel("H",9),
        flexDirection:"row"
    },
    text:{
        fontSize : 16,
        fontWeight: "400",
        paddingLeft:rel("W",34),
        color:"#3E3B3B",
        flex:9
    },
    icon:{
        flex:1,
        color:"white",
        paddingRight:rel("W",4)
    }
})