import React, { useState } from "react";
import { StyleSheet, View,Text,Image ,TouchableWithoutFeedback} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import rel from "../share/RelativeRes";

export default function FeedBacks() {

    const fullStar = "D:/STUDY MATERIAL/SC2006/SC2006 Project/CarParkApp/assets/Pictures/fullStar.png";
    const emptyStar = "D:/STUDY MATERIAL/SC2006/SC2006 Project/CarParkApp/assets/Pictures/emptyStar.png";
    const cornerIcon = require("D:/STUDY MATERIAL/SC2006/SC2006 Project/CarParkApp/assets/Pictures/cornerIcon.png")

    const [numStar,setNumStar] = useState(0)

    const renderStar = () =>{
        let numFull=0,numEmpty= 0;

        numFull = numStar;
    
        numEmpty = 5-numStar;
        let list = [];
        let i= 0;
        
        for(i =0;i<numFull;i++){
            let tmp=i;
            list[i] = (
                <TouchableWithoutFeedback key={i} onPress={() => setNumStar(tmp+1)}>
                    <Image source= {require(fullStar)} style = {styles.starsIcon}/>
                </TouchableWithoutFeedback>
            )
        }
        let j =0;
        for(j =0;j<numEmpty;j++){
            let tmp = j+i;
            list[j+i] = (
                <TouchableWithoutFeedback key={j+i} onPress= {() => setNumStar(tmp+1)}>
                    <Image source= {require(emptyStar)} style = {styles.starsIcon}/>
                </TouchableWithoutFeedback>
            )
        }
        return list;
    }
    
    
    return(
        <View style={styles.container}>
            <Text style = {styles.title}>Location:</Text>
            <Text style={styles.desText}>50 GateWay Jurong LON L L LO S A P OPOSOMPPMP OAPOKAP</Text>

            <View style = {{flexDirection:"row",marginTop:rel("H",15)}}>
                    <Text style = {styles.title}>Date: </Text>
                    <Text style = {styles.desText}>30/8/2002</Text>
            </View>

            <View style = {{flexDirection:"row"}}>
                    <Text style = {styles.title}>Start time: </Text>
                    <Text style = {styles.desText}>09:40</Text>
            </View>

            <View style = {{flexDirection:"row"}}>
                    <Text style = {styles.title}>End time: </Text>
                    <Text style = {styles.desText}>11:40</Text>
            </View>

            <View style = {{flexDirection:"row"}}>
                    <Text style = {styles.title}>Duration: </Text>
                    <Text style = {styles.desText}>1.5 hours</Text>
            </View>

            <Text style = {[styles.title, {marginTop:rel("H",15)}]}>Total fare:</Text>
            <Text style={styles.desText}>[car]</Text>

            <Text style = {[styles.title, {marginTop:rel("H",15)}]}>FeedBack: </Text>

            <View style={styles.content1}>
                <View style={styles.textBox}>
                    <TextInput
                        multiline
                        placeholder="Leave your comment here..."
                        style={styles.feedBackText}
                    />
                </View>

                <View style={styles.stars}>
                    {renderStar()}
                </View>

                <Image source={cornerIcon} style={styles.cornerIcon} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height:"100%",
        width:"100%",
        flex :1,
    },
    title:{
        fontSize:16,
        fontWeight:"400"
    },
    desText:{
        color:"#7b7b7b",
        fontSize:15,
        fontWeight:"400"
    },
    content1:{
        marginTop:rel("H",15),
        borderRadius:4,
        borderWidth:1,
        borderColor:"#8996A2",
        height:rel("H",226),
        width:rel("W",306),
    },
    textBox:{
        paddingHorizontal:rel("W",16),
        paddingTop:rel("H",10),
        height:rel("H",175)
    },
    feedBackText:{
        
    },
    stars:{
        flexDirection:"row",
        position:"absolute",
        bottom:rel("H",15),
        left:rel("W",15),
        flex:1,
    },
    starsIcon:{
        height:rel("H",32),
        width:rel("W",32),
        resizeMode:"contain",
    },
    cornerIcon:{
        position:"absolute",
        bottom:rel("H",2),
        right:0,
        height:rel("H",15),
        width:rel("W",15),
        resizeMode:"contain",
        flex:1,
    }
})