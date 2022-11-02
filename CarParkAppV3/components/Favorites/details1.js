import React from "react";
import { StyleSheet ,View,Text,ScrollView,Image} from "react-native";
import rel from "../share/RelativeRes";
import FindNearCarPark from "../ReadCSV/findNearCarPark";
import ChooseCarPark from "../data/chooseCarPark";
import CarParkAPI from "../data/carParkAPI";
import DummyUser from "../data/dummyUsers";
import UserState from "../data/userState";

export default function Details_1({carParkName}){


    const mapIcon= "../../assets/Pictures/mapIcon.png"
    const carIcon= "../../assets/Pictures/carIcon.png"
    const humanIcon= "../../assets/Pictures/humanIcon.png"
    const  trolleyIcon= "../../assets/Pictures/trolleyIcon.png"
    const locationCircleIcon= "../../assets/Pictures/locationCircleIcon.png"
    const sandClockIcon= "../../assets/Pictures/sandClockIcon.png"

    let cpr = DummyUser.userArr[UserState.user_index].favorite[carParkName]
    let details;
    if(cpr){
        let api = CarParkAPI.getAvailFav(carParkName);
        console.log(api)
        details={
            location: cpr.location,
            driveTime:"16 min,10.9km",
            walkingTime:"0 mins/0 m",
            rateCar: cpr.hourly_price,
            rateMotor:"None",
            availability: api.lots_available + "/" + api.total_lots,
            openHrs:cpr.openHrs,
        }
    }
    else{
        details={
            location: "50 Jurong Gateway Rd, Singapore 608549",
            driveTime:"16 mins/10.9km",
            walkingTime:"4 mins/360m" ,
            rateCar:"car: $0.60/0.5hour",
            rateMotor:"Motorcycle: $0.70/lot",
            availability:"135/300",
            openHrs:"8.00am - 10.00pm",
        }
    }
        

    return (
        <View style={styles.container}>

            <View style= {styles.content_3line}>
                <Image source = {require(mapIcon)} style={styles.image} />
                <View style ={styles.textBox}>
                    <Text style={styles.title}>Location:</Text>
                    <Text style={styles.des_1}>{details.location}</Text>
                </View>
            </View>

            <View style= {styles.content_3line}>
                <Image source = {require(carIcon)} style={styles.carIcon} />
                <View style ={styles.textBox}>
                    <Text style={styles.title}>Driving time/distance (from departure to carpark):</Text>
                    <Text style={styles.des_1}>{details.driveTime}</Text>
                </View>
            </View>

            <View style= {styles.content_3line}>
                <Image source = {require(humanIcon)} style={styles.image} />
                <View style ={styles.textBox}>
                    <Text style={styles.title}>Walking time/distance (from carpark to destination):</Text>
                    <Text style={styles.des_1}>{details.walkingTime}</Text>
                </View>
            </View>


            <View style= {styles.content_3line}>
                <Image source = {require(trolleyIcon)} style={styles.image} />
                <View style ={styles.textBox}>
                    <Text style={styles.title}>Parking rate:</Text>
                    <Text style={styles.des_1}>{details.rateCar}</Text>
                    <Text style={styles.des_1}>{details.rateMotor}</Text>
                </View>
            </View>

            <View style= {styles.content_2line}>
                <Image source = {require(locationCircleIcon)} style={styles.image} />
                <View style ={styles.textBox}>
                    <Text style={styles.title}>Availability:</Text>
                    <Text style={styles.des_1}>{details.availability}</Text>
                </View>
            </View>

            <View style= {styles.content_2line}>
                <Image source = {require(sandClockIcon)} style={styles.image} />
                <View style ={styles.textBox}>
                    <Text style={styles.title}>Operating hours:</Text>
                    <Text style={styles.des_1}>{details.openHrs}</Text>
                </View>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop:rel("H",10),
    },
    content_2line:{
        flexDirection:"row",
        alignItems:"center",
        marginBottom:rel("H",10),
        height:rel("H",42)
    },
    content_3line:{
        flexDirection:"row",
        alignItems:"center",
        marginBottom:rel("H",10),
        height:rel("H",62)
    },
    image:{
        height:rel("H",45),
        width:rel("W",45),
        resizeMode:"contain",
    },
    carIcon:{
        height:rel("H",35),
        width:rel("W",35),
        resizeMode:"contain",
        marginLeft:rel("W",5),
        marginRight:rel("W",5),
    },
    textBox:{
        flexDirection:'column',
        marginLeft:rel("W",10),
    },
    title:{
        fontSize:16,
        fontWeight:"400"
    },
    des_1:{
        color:"#7d7d7d",
        fontSize:15,
        fontWeight:"400"
    }
})