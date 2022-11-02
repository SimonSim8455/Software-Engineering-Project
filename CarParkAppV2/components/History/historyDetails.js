import React, {useState} from "react";
import { StyleSheet,View,Text,TouchableOpacity } from "react-native";
import rel from "../share/RelativeRes";
import FavorHistPopUp from "../share/favorHistPopUp";
import { ScrollView } from "react-native-gesture-handler";
import {Ionicons} from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

export default function HistoryDetails({navigation}){
    const drawerNavigation = navigation;
    const navigationBack = useNavigation();

    let carpark={
        location: "50 Jurong Gateway Rd, Singapore 608549",
        rateCar:"car: $0.60/ 0.5hour",
        rateMotor:"Motorcycle: $0.70/ lot",
        availability:"135/300",
        openHrs:"8.00am - 10.00pm",

        startLocation: "24 Nanyang Ave, Block 48, Singapore 639811",
        destination: "10 Jurong East Street 12, Singapore 609690",
        driveTime:"16 mins/ 10.9km",
        walkingTime:"4 mins/ 350m",
        fare: "$3.40",
        startTime: "9:00:30",
        endTime: "13:30:46"
    }
    
    return(
        <View style={styles.container}>
        <View style={styles.popUpTop}>
            <FavorHistPopUp drawerNavigation={drawerNavigation} title={"My history details"} />
        </View>

        <View style={styles.content}>
            <Ionicons name="arrow-back" size={30} color="black" onPress={() => navigationBack.navigate("History")}/>
            <Text style={styles.carParkText}>JE Mall</Text>
        </View>

        <View style={styles.content1}>
        
            <ScrollView>
                <View>
                    <Text style={styles.heading1}>Car park Information</Text>
                </View>
                <View style= {styles.content_3line}>
                    <View style ={styles.textBox}>
                        <Text style={styles.title}>Location:</Text>
                        <Text style={styles.des_1}>{carpark.location}</Text>
                    </View>
                </View>
                <View style= {styles.content_3line}>
                    <View style ={styles.textBox}>
                        <Text style={styles.title}>Parking rate:</Text>
                        <Text style={styles.des_1}>{carpark.rateCar}</Text>
                        <Text style={styles.des_1}>{carpark.rateMotor}</Text>
                    </View>
                </View>
                <View style= {styles.content_3line}>
                    <View style ={styles.textBox}>
                        <Text style={styles.title}>Operating hours:</Text>
                        <Text style={styles.des_1}>{carpark.openHrs}</Text>
                    </View>
                </View>

                <View>
                    <Text style={styles.heading1}>History Record</Text>
                </View>
                <View style= {styles.content_3line}>
                    <View style ={styles.textBox}>
                        <Text style={styles.title}>Start location:</Text>
                        <Text style={styles.des_1}>{carpark.startLocation}</Text>
                    </View>
                </View>
                <View style= {styles.content_3line}>
                    <View style ={styles.textBox}>
                        <Text style={styles.title}>Destination:</Text>
                        <Text style={styles.des_1}>{carpark.destination}</Text>
                    </View>
                </View>
                <View style= {styles.content_3line}>
                    <View style ={styles.textBox}>
                        <Text style={styles.title}>Driving time/ distance (from departure to carpark):</Text>
                        <Text style={styles.des_1}>{carpark.driveTime}</Text>
                    </View>
                </View>
                <View style= {styles.content_3line}>
                    <View style ={styles.textBox}>
                        <Text style={styles.title}>Walking time/ distance (from carpark to destination):</Text>
                        <Text style={styles.des_1}>{carpark.walkingTime}</Text>
                    </View>
                </View>
                <View style= {styles.content_3line}>
                    <View style ={styles.textBox}>
                        <Text style={styles.title}>Total car-parking fare:</Text>
                        <Text style={styles.des_1}>{carpark.fare}</Text>
                    </View>
                </View>
                <View style= {styles.content_3line}>
                    <View style ={styles.textBox}>
                        <Text style={styles.title}>Parking Duration:</Text>
                        <Text style={styles.des_1}>Start parking time: {carpark.startTime}</Text>
                        <Text style={styles.des_1}>End parking time: {carpark.endTime}</Text>
                    </View>
                </View>

            </ScrollView>
        </View>

        <TouchableOpacity style={styles.button} onPress={()=>navigationBack.navigate("LandingPage")}>
            <View style={styles.content2}>
                <Text style={styles.text}>Park Again</Text>
            </View>
        </TouchableOpacity>
    </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        flex:1
    },
    popUpTop:{
        height:rel("H",238)
    },
    content:{
        flexDirection:"row",
        alignItems:"center",
        //height:rel("H",60),
        marginTop: 20,
        marginLeft: 20,
    },
    content1:{
        marginHorizontal:rel("W",25),
        //marginTop:rel("H",26),
        flex:1,
    },
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
    button:{
        alignItems: "center",
        marginBottom: 20,
    },
    content_3line:{
        flexDirection:"row",
        alignItems:"center",
        marginBottom:rel("H",10),
        height:rel("H",62)
    },
    textBox:{
        flexDirection:'column',
        marginLeft:rel("W",10),
    },
    title:{
        fontSize:16,
        fontWeight:"500"
    },
    des_1:{
        color:"#7d7d7d",
        fontSize:15,
        fontWeight:"400"
    },
    carParkText:{
        fontSize: 24,
        fontWeight: "700",
        color:"#001018",
        marginLeft:rel("W",20)
    },
    heading1:{
        fontSize: 30,
        fontWeight: "700",
        paddingTop: 10,
        color: "#0e044d"
    },
})