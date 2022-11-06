import React from "react";
import { StyleSheet ,View,Text,ScrollView,Image} from "react-native";
import rel from "../share/RelativeRes";
import FindNearCarPark from "../ReadCSV/findNearCarPark";
import ChooseCarPark from "../data/chooseCarPark";
import CarParkAPI from "../data/carParkAPI";

export default function Details_1(){


    const mapIcon= "../../assets/Pictures/mapIcon.png"
    const carIcon= "../../assets/Pictures/carIcon.png"
    const humanIcon= "../../assets/Pictures/humanIcon.png"
    const  trolleyIcon= "../../assets/Pictures/trolleyIcon.png"
    const locationCircleIcon= "../../assets/Pictures/locationCircleIcon.png"
    const sandClockIcon= "../../assets/Pictures/sandClockIcon.png"

    let details;
    let cpr = ChooseCarPark;
    details={
        location: cpr.location,
        driveTime: cpr.disFrOri+"km",
        walkingTime:cpr.distance +"km",
        rateCar: cpr.carParkFare,
        rateMotor:"None",
        availability: CarParkAPI.choosen.lots_available + "/" + CarParkAPI.choosen.total_lots,
        openHrs:cpr.openHrs,
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
                    <Text style={styles.des_1}>${details.rateCar}/hr</Text>
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