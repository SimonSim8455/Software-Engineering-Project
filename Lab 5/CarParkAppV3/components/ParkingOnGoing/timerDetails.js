import React ,{useState,useEffect} from "react";
import { StyleSheet, View,Text ,Button} from "react-native";
import ChooseCarPark from "../data/chooseCarPark";
import BackgroundTimer from 'react-native-background-timer';
import FindNearCarPark from "../ReadCSV/findNearCarPark";
import rel from "../share/RelativeRes";
import SetNotes from "../share/setNotes";
import PushNotification from 'react-native-push-notification'

export default function TimerDetails({desCar,end,back,end3}){
    const [secondLeft,setSecondLeft] = useState(ChooseCarPark.duration*60*60);
    const [inter,setInter] = useState();

    useEffect(()=>{
        end1();
        end2();
        console.log("Start")
    },[])

    useEffect(()=>{
        if(desCar || end || back ||end3){
            endEar();
        }
    },[desCar,end,back, end3])


    const endEar = () =>{
        PushNotification.cancelAllLocalNotifications();
        BackgroundTimer.clearInterval(inter)
        console.log("end1")
    }

    let sec = secondLeft;
    const start = () =>{
        setInter(BackgroundTimer.setInterval(()=>{
            sec= sec-1;
            if(sec>=0){
                setSecondLeft(sec);
            }
        },1000))
    }

    const end1 = () =>{
        start();
        let tr = ChooseCarPark.duration*60*60 - ChooseCarPark.alertTime*60;
        PushNotification.localNotificationSchedule({
            id:'123',
            channelId:"test-id",
            message: `Left ${ChooseCarPark.alertTime} minutes`, // (required)
            date: new Date(Date.now() +  tr * 1000), // in 60 secs
            allowWhileIdle: false, 
            repeatTime: 1, 
          });
    }

    const end2 = () =>{
        let tr = ChooseCarPark.duration*60*60;
        PushNotification.localNotificationSchedule({
            id: '124',
            channelId:"test-id",
            message: `Time Ups`, 
            date: new Date(Date.now() +  tr * 1000), // in 60 secs
            allowWhileIdle: false, 
            repeatTime: 1, 
          });
    }

    const clockify = () =>{
        let hours = Math.floor(secondLeft/ 60 /60)
        let mins = Math.floor(secondLeft/60 % 60)
        let seconds = Math.floor(secondLeft%60)

        let displayHours = hours <10 ? `0${hours}` : hours;
        let displayMins = mins <10 ? `0${mins}` : mins;
        let displaySeconds = seconds <10 ? `0${seconds}` : seconds;
        
        return {
            displayHours,
            displayMins,
            displaySeconds
        }
    }

    return(
        <View style={styles.container}>
            <View style={styles.content1}>
                <Text style = {styles.title}>Location:</Text>
                <Text style={styles.desText}>{ChooseCarPark.location}</Text>
                
                <View style = {{flexDirection:"row",marginTop:rel("H",15)}}>
                    <Text style = {styles.title}>Start time: </Text>
                    <Text style = {styles.desText}>{ChooseCarPark.startTime}</Text>
                </View>

                <View style = {{flexDirection:"row"}}>
                    <Text style = {styles.title}>End time: </Text>
                    <Text style = {styles.desText}>{ChooseCarPark.endTime}</Text>
                </View>

                <Text style = {[styles.title, {marginTop:rel("H",15)}]}>Estimated Carparking Fare:</Text>
                <Text style={styles.desText}>[car] {ChooseCarPark.duration} hours x ${ChooseCarPark.carParkFare}/{ChooseCarPark.perHour} hours = ${ChooseCarPark.total_fare}</Text>

                <Text style = {[styles.title, {marginTop:rel("H",15)}]}>Timer:</Text>
                <View style= {{flexDirection:"row"}}>
                    <Text style={styles.desText}>alert</Text>
                    <View style={styles.alertTimeBox}>
                        <Text style= {styles.alertTimeText}>
                            {clockify().displayHours}:
                            {clockify().displayMins}:
                            {clockify().displaySeconds}
                        </Text>
                    </View>
                    <Text style={styles.desText}>hours before end time</Text>
                </View>
            </View>

            <View style= {styles.content2 }>
                <SetNotes edit={false}/>
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
    content1:{

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
    alertTimeBox:{
        marginHorizontal:rel("H",10),
        alignItems:"center",
        borderRadius:4,
        borderWidth:1,
        width:rel("W",100),
        height:rel('H',28),
        borderColor:"#8996a2",
    },
    alertTimeText:{
        fontSize:16,
        fontWeight:"400",
    },
    content2:{
        height:rel("H",136),
        width:rel("W",305),
        marginTop:rel("H",10),
        backgroundColor:"#f7fcff",
        borderRadius: 16,
    },
})