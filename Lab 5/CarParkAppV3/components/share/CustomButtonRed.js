import React from "react";
import { StyleSheet ,View,Text, TouchableOpacity} from "react-native";
import rel from "../share/RelativeRes";


export default function CustomButtonRed({onPress,title}){
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={styles.content2}>
                <Text style={styles.text}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    content2:{
        backgroundColor:"#D00000",
        width:rel("W",231),
        height:rel("H",43),
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center",
        marginTop:rel("H",12)
    },
    text:{
        color:"white",
        fontSize:22,
        fontWeight:"700",
    },
})