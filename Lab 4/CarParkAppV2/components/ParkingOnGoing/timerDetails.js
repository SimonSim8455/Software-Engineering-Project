import React ,{useState,useEffect} from "react";
import { StyleSheet, View,Text ,Button} from "react-native";
import rel from "../share/RelativeRes";
import SetNotes from "../share/setNotes";

export default function TimerDetails({imageUri,notes}){
    const [secondLeft,setSecondLeft] = useState(15*60)


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
                <Text style={styles.desText}>50 GateWay Jurong LON L L LO S A P OPOSOMPPMP OAPOKAP</Text>
                
                <View style = {{flexDirection:"row",marginTop:rel("H",15)}}>
                    <Text style = {styles.title}>Start time: </Text>
                    <Text style = {styles.desText}>09:40</Text>
                </View>

                <View style = {{flexDirection:"row"}}>
                    <Text style = {styles.title}>End time: </Text>
                    <Text style = {styles.desText}>11:10</Text>
                </View>

                <Text style = {[styles.title, {marginTop:rel("H",15)}]}>Estimated Carparking Fare:</Text>
                <Text style={styles.desText}>[car]</Text>

                <Text style = {[styles.title, {marginTop:rel("H",15)}]}>Timer:</Text>
                <View style= {{flexDirection:"row"}}>
                    <Text style={styles.desText}>alert</Text>
                    <View style={styles.alertTimeBox}>
                        <Text style= {styles.alertTimeText}>
                            {clockify().displayMins}:
                            {clockify().displaySeconds}
                        </Text>
                    </View>
                    <Text style={styles.desText}>mins before end time</Text>
                </View>
            </View>

            <View style= {styles.content2 }>
                <SetNotes imageUri={imageUri} notes={notes} edit={false} getImgNoteCallBack={()=>{}}/>
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
        width:rel("W",50),
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