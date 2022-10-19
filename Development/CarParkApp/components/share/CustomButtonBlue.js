import React from "react";
import { StyleSheet,TouchableOpacity,View,Text} from "react-native";


export default function FlatButton({text, onPress}){
    return(
        <TouchableOpacity onPress = {onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}> {text} </Text>
            </View>
        </TouchableOpacity>

    )
}

const styles= StyleSheet.create({
    button:{
        borderRadius:8,
        borderWidth:3,
        //paddingVertical: 14,
        borderColor: "#0803fe",
        backgroundColor: "#0803fe",
        width: 231,
        height:43,
        alignSelf:"center",
        alignItem: 'center',
        justifyContent: 'center',
        //marginTop: 30,
    },
    buttonText:{
        fontWeight:'bold',
        color:'white',
        textAlign:'center',
        fontSize:20,
    }
})