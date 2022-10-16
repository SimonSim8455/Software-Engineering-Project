import React from "react";
import { StyleSheet ,View,Text, Image, TouchableOpacity} from "react-native";
import rel from "../share/RelativeRes";


export default function Buttons({onPressShare, onPressNavigate, onPressStart}){
    
    const navImg = "D:/STUDY MATERIAL/SC2006/SC2006 Project/CarParkApp/assets/Pictures/navigateButton.png"
    const shrImg = "D:/STUDY MATERIAL/SC2006/SC2006 Project/CarParkApp/assets/Pictures/shareIcon.png"
    return(
        <View style={styles.container}>
            <View style={styles.content1}>

                <TouchableOpacity onPress={onPressNavigate}>
                    <View style = {styles.navigateButton}>
                        <Image source = {require(navImg)} style={styles.navigationIcon}/>
                        <Text style={styles.text}>Navigate</Text>
                    </View>
                </TouchableOpacity>

                <View style={styles.line}></View>

                <TouchableOpacity onPress={onPressShare}>
                    <View style = {styles.navigateButton}>
                        <Image source = {require(shrImg)} style={styles.shareIcon}/>
                        <Text style={styles.text}>Share</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={onPressStart}>
                <View style={styles.content2}>
                    <Text style={styles.text}>Start Parking</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        marginTop:rel("H",10)
    },
    content1:{
        flexDirection:"row",
        justifyContent:"space-around",
    },
    navigateButton:{
        flexDirection:"row",
        backgroundColor:"#00537d",
        borderRadius:20,
        width:rel("W",143),
        height:rel("H",37),
        alignItems:"center",   
        justifyContent:"center"
    },
    navigationIcon:{
        height:rel("H",24),
        width:rel("W",24),
        resizeMode:"contain",
        marginRight:rel("W",12),
        marginLeft:rel("W",10),
        position:"absolute",
        left:0
    },
    text:{
        color:"white",
        fontSize:22,
        fontWeight:"700",
    },
    line:{
        borderLeftColor:"#d3d3d3",
        borderLeftWidth:2,
        borderTopLeftRadius:10,
        marginHorizontal:rel("W",10),
        height:rel("H",25),
        alignSelf:"center"
    },
    shareIcon:{
        height:rel("H",20),
        width:rel("W",20),
        resizeMode:"contain",
        marginRight:rel("W",10),
        marginLeft:rel("W",10),
        position:"absolute",
        left:0
    },
    content2:{
        backgroundColor:"#D00000",
        width:rel("W",231),
        height:rel("H",43),
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center",
        marginTop:rel("H",12)
    }
})