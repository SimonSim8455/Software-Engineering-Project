import React from "react";
import { StyleSheet,View,TouchableOpacity,Text} from "react-native";

export default function CustomButton({onPress, title}){
    return(
        <TouchableOpacity onPress={onPress}>
            <View style= {styles.container}>
                <Text style={styles.text}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        height:"100%",
        width:"100%",
        backgroundColor:"#324E78",
        justifyContent:"center",
        borderRadius: 32,
    },
    text:{
        fontSize : 15,
        fontWeight: "400",
        alignSelf:"center",
        color:"white"
    }
})