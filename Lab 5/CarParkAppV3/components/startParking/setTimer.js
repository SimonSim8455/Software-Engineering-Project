import React, { useEffect, useState } from "react";
import { StyleSheet ,View,Text,Image,TouchableOpacity} from "react-native";
import rel from "../share/RelativeRes";


export default function SetTimer({getHrs}){
    const stopWatchIcon = require("../../assets/Pictures/stopWatch.png")
    const plusIcon = require("../../assets/Pictures/plusTimerIcon.png")
    const minusIcon = require("../../assets/Pictures/minusTimerIcon.png")

    const [hours,setHours] = useState(0)
    const [minutes,setMinutes] = useState(0)

    useEffect(()=>{
        getHrs((hours+minutes/60).toFixed(2))
    },[hours,minutes])
     
    const pressedPlusH = () =>{
        setHours(hours+1)
    }
    const pressedMinusH = () =>{
        setHours(hours-1)
    }
    const pressedPlusM = () =>{
        setMinutes(minutes+1)
    }
    const pressedMinusM = () =>{
        setMinutes(minutes-1)
    }

    return(
        <View style= {styles.container}>
            <View style={styles.content}>
                <View style= {styles.content1}>
                    <Image source={stopWatchIcon} style = {styles.stopWatchIcon} />
                </View>

                <View style={styles.content2}>
                    <View style={styles.outerTextBox}>
                        <View style={styles.innerTextBox1}>
                            <Text style={styles.bigText}>{hours}</Text>
                            <Text style={styles.smallText}>h</Text>
                        </View>
                        <View style={styles.innerTextBox2}>
                            <Text style={styles.bigText}>{minutes}</Text>
                            <Text style={styles.smallText}>m</Text>
                        </View>
                    </View>
                    <View style = {styles.outerIcon}>
                        <View style={styles.innerIcon1}>
                            <TouchableOpacity onPress={pressedPlusH}>
                                <Image source={plusIcon} style = {styles.plusIcon} />
                            </TouchableOpacity>
                            
                            <TouchableOpacity onPress={pressedMinusH}>
                                <Image source={minusIcon} style = {styles.plusIcon} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.innerIcon2}>
                            <TouchableOpacity onPress={pressedPlusM}>
                                <Image source={plusIcon} style = {styles.plusIcon} />
                            </TouchableOpacity>
                            
                            <TouchableOpacity onPress={pressedMinusM}>
                                <Image source={minusIcon} style = {styles.plusIcon} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
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
        paddingHorizontal:rel("W",20),
        flexDirection:"row"
    },
    content1:{
        flexDirection:"row"
    },
    stopWatchIcon:{
        height:rel("H",40),
        width:rel("W",40),
        resizeMode:"contain"
    },
    innerTextBox1:{
        flexDirection:"row",
        marginRight:rel("W",35),
        alignItems:"flex-end",
        justifyContent:"flex-end",
        flex:1,
    },
    innerTextBox2:{
        flexDirection:"row",
        marginRight:rel("W",5),
        justifyContent:"flex-end",
        alignItems:"flex-end",
        flex:1,
    },
    outerTextBox:{
        flexDirection:"row",
    },
    bigText:{
        fontSize:32,
        fontWeight:"500"
    },
    smallText:{
        fontSize:20,
        fontWeight:"400"
    },
    content2:{
        marginLeft:rel("W",12),
    },
    outerIcon:{
        flexDirection:"row",
        marginLeft:rel("W",10)
    },
    innerIcon1:{
        flexDirection:"row",
    },
    innerIcon2:{
        flexDirection:"row",
        marginLeft:rel("W",30)
    },
    plusIcon:{
        height:rel("H",27),
        width:rel("W",27),
        resizeMode:"contain"
    }
})