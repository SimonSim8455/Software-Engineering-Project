import React, { useEffect, useState } from "react";
import { StyleSheet, View,Text,Image ,TouchableWithoutFeedback, TouchableOpacity} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import UserState from "../data/userState";
import DummyUser from "../data/dummyUsers";
import DummyReview from "../data/dummyReviews";
import rel from "../share/RelativeRes";

export default function FeedBacks({index}) {

    const fullStar = "../../assets/Pictures/fullStar.png";
    const emptyStar = "../../assets/Pictures/emptyStar.png";
    const cornerIcon = require("../../assets/Pictures/cornerIcon.png")

    const [numStar,setNumStar] = useState(0)
    const [feedBack,setFeedBack] = useState("");
    const [location,setLocation] = useState("");
    const [date,setDate] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime,setEndTime] =useState("");
    const [duration,setDuration] = useState("");
    const [carParkFare,setCarParkFare] = useState("");
    const [perHour,setPerHour] = useState("");
    const [total_fare,setTotal] =  useState("");
    const [change,setChange] = useState(false);
    const [color,setColor] = useState("#2e3fd7");
    const [init,setInit] = useState("a");

    useEffect(()=>{
        if(UserState.user_index != -1){
            if(DummyUser.userArr[UserState.user_index].history != []){
                setFeedBack(DummyUser.userArr[UserState.user_index].history[index].feedBack)
                setNumStar(DummyUser.userArr[UserState.user_index].history[index].rating);
                setLocation(DummyUser.userArr[UserState.user_index].history[index].location);
                setDate(DummyUser.userArr[UserState.user_index].history[index].date);
                setStartTime(DummyUser.userArr[UserState.user_index].history[index].startTime);
                setEndTime(DummyUser.userArr[UserState.user_index].history[index].endTime);
                setDuration(DummyUser.userArr[UserState.user_index].history[index].duration);
                setCarParkFare(DummyUser.userArr[UserState.user_index].history[index].carParkFare);
                setPerHour(DummyUser.userArr[UserState.user_index].history[index].perHour);
                setTotal(DummyUser.userArr[UserState.user_index].history[index].total_fare);
                setInit("b")
            }
        }
    },[UserState.user_index])

    useEffect(()=>{
        if(change){
            setColor("red");
        }
    },[change])

    useEffect(()=>{
        if(init !="a" && init !="b"){
            setChange(true)
        }
    },[numStar,feedBack])

    useEffect(()=>{
        if(init =="b"){
            setInit("c")
        }
    },[init])

    const onEdit = () =>{
        if(change){
            DummyUser.userArr[UserState.user_index].setRating(numStar,index)
            DummyUser.userArr[UserState.user_index].setFeedBack(feedBack,index);
            DummyReview.addReviews(DummyUser.userArr[UserState.user_index].history[index].name,{
                rating:numStar,
                feedBack:feedBack,
                imageSRC:DummyUser.userArr[UserState.user_index].imageUri,
                name:DummyUser.userArr[UserState.user_index].firstName + DummyUser.userArr[UserState.user_index].lastName,
            })
        }
        setChange(false);
        setColor("#2e3fd7")
    }

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
            <TouchableOpacity onPress={onEdit}>
                <View style= {[styles.editTextBox, {backgroundColor:color,}]}>
                    <Text style= {styles.editText}>Edit</Text>
                </View>
            </TouchableOpacity>

            <Text style = {styles.title}>Location:</Text>
            <Text style={styles.desText}>{location}</Text>

            <View style = {{flexDirection:"row",marginTop:rel("H",15)}}>
                    <Text style = {styles.title}>Date: </Text>
                    <Text style = {styles.desText}>{date}</Text>
            </View>

            <View style = {{flexDirection:"row"}}>
                    <Text style = {styles.title}>Start time: </Text>
                    <Text style = {styles.desText}>{startTime}</Text>
            </View>

            <View style = {{flexDirection:"row"}}>
                    <Text style = {styles.title}>End time: </Text>
                    <Text style = {styles.desText}>{endTime}</Text>
            </View>

            <View style = {{flexDirection:"row"}}>
                    <Text style = {styles.title}>Duration: </Text>
                    <Text style = {styles.desText}>{duration} hours</Text>
            </View>

            <Text style = {[styles.title, {marginTop:rel("H",15)}]}>Total fare:</Text>
            <Text style={styles.desText}>[car] {duration} hours x ${carParkFare}/{perHour} hours = ${total_fare}</Text>

            <Text style = {[styles.title, {marginTop:rel("H",15)}]}>FeedBack: </Text>

            <View style={styles.content1}>
                <View style={styles.textBox}>
                    <TextInput
                        multiline
                        style={styles.feedBackText}
                        value= {feedBack}
                        onChangeText={(val)=>setFeedBack(val)}
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
    },
    editTextBox:{
        height:rel("H",30),
        width:rel("W",88),
        alignItems:"center",
        borderRadius:10,
    },
    editText:{
        color:"#ffffff",
        fontSize:20,
        fontWeight:"700",
        alignSelf:"center"
    },
})