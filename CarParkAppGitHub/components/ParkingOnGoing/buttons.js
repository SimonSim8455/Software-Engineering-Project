import React from "react";
import { StyleSheet ,View,Text, Image, TouchableOpacity} from "react-native";
import rel from "../share/RelativeRes";


export default function Buttons({onPressDesCar, onPressCarDes, onPressEnd}){
    
    const navImg = "D:/STUDY MATERIAL/SC2006/SC2006 Project/CarParkApp/assets/Pictures/navigateButton.png"
    return(
        <View style={styles.container}>
            <View style={styles.content1}>
                <View style={styles.content1_1}>
                    <Text style={styles.smallText}>From carpark to destination</Text>
                    <TouchableOpacity onPress={onPressCarDes}>
                        <View style = {styles.navigateButton}>
                            <Image source = {require(navImg)} style={styles.navigationIcon}/>
                            <Text style={styles.text}>Navigate</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.line}></View>

                <View style={styles.content1_1}>
                    <Text style={styles.smallText}>From destination to carpark</Text>
                    <TouchableOpacity onPress={onPressDesCar}>
                        <View style = {styles.navigateButton}>
                            <Image source = {require(navImg)} style={styles.navigationIcon}/>
                            <Text style={styles.text}>Navigate</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <TouchableOpacity onPress={onPressEnd}>
                <View style={styles.content2}>
                    <Text style={styles.text}>End Parking</Text>
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
    },
    content1_1:{
        flexDirection:"column",
        alignItems:"center"
    },
    smallText:{
        fontSize:12,
        fontWeight:"600",
        marginBottom:rel("H",2),
        color:"#7b7b7b"
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