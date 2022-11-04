import React, { useCallback, useState } from "react";
import { StyleSheet ,View,Text,ScrollView,TouchableOpacity,TouchableWithoutFeedback,StatusBar} from "react-native";
import PopUpTop from "../share/popUpTop"
import TimerDetails from "./timerDetails";
import rel from "../share/RelativeRes";
import Buttons from "./buttons";
import Ionicons  from 'react-native-vector-icons/Ionicons';
import OriDes from "../data/oriDes";
import NearByCarPark from "../data/nearByCarPark";
import FindNearCarPark from "../ReadCSV/findNearCarPark";
import ChooseCarPark from "../data/chooseCarPark";
import CarParkAPI from "../data/carParkAPI";
import UserState from "../data/userState";
import DummyUser from "../data/dummyUsers";

const statusBarHeight = StatusBar.currentHeight;
export default function ParkingOnGoing({navigation}){
    const stackNavigation = navigation;
    const drawerNavigation = navigation.getParent();

    const [desCar,setDesCar] = useState(false);
    const [end,setEnd] = useState(false);
    const [back,setBack] = useState(false);
    const [end3,setEnd3] = useState(false);

    const onSearch = () =>{
        if(OriDes._destinationDetails && OriDes._originalDetails){
            FindNearCarPark.setCarParks(5);
            CarParkAPI.callAPI();
        }
        stackNavigation.pop(3)
    }
    const onEdit = () =>{
        setBack(true)
        stackNavigation.pop();
    }
    const onPressDesCar = () =>{
        UserState.setLocState(2);
        stackNavigation.push("Home");
    }
    const onPressCarDes = () =>{
        UserState.setLocState(1);
        stackNavigation.push("Home");
    }
    const onPressDesEnd = () =>{
        setEnd3(true)
        UserState.setLocState(3);
        const date = new Date();
        let a = date.toLocaleString('en-US', {hour12: false});
        let c = a.length;
        let e = a.substring(c-8,c-3);
        ChooseCarPark.setEndTime(e);
        let [H,diff] =calFare(e,ChooseCarPark.startTime);
        
        let fare = H ==0 ? ChooseCarPark.carParkFare : H * ChooseCarPark.carParkFare;
        ChooseCarPark.setFare(fare);

        getMonth(fare);
        let rd = diff == 0? 0: (diff/60);
        ChooseCarPark.setDuration(rd);
        stackNavigation.navigate("Comments")
    }

    const getMonth = (fare) =>{
        var dateObj = new Date();
        var month = dateObj.getUTCMonth() + 1; //months from 1-12
        var day = dateObj.getUTCDate();
        var year = dateObj.getUTCFullYear();
        DummyUser.userArr[UserState.user_index].addMonthly_Fare(year,month,fare);
    }

    const calFare = (a,b) =>{
        let c = parseInt(a.substring(0,2));
        let d = parseInt(b.substring(0,2));
        let e = parseInt(a.substring(3,5));
        let f = parseInt(b.substring(3,5));
        let H = d>=c? (d-c) : (c-d);
        let diff = Math.abs((c*60 + e) - (d*60 +f));
        console.log(diff);
        return [H,diff];
    }

    const onBack = () =>{
        setBack(true)
        stackNavigation.pop()
    }


    return(
        <View style={styles.container}>
            <View style={styles.popUpTop}>
                <PopUpTop 
                        drawerNavigation={drawerNavigation} 
                        onPressBack= {() => stackNavigation.pop()} 
                        onSearch = {onSearch} 
                        title={"Parked"}
                />
            </View>

            <View style={styles.content}>
                <View style={styles.content1}>
                    <TouchableWithoutFeedback onPress={onBack}>
                        <Ionicons name="arrow-back" size={30} color="black"/>
                    </TouchableWithoutFeedback>
                    <Text style={styles.carParkText}>{ChooseCarPark.name}</Text>
                </View>

                <TouchableOpacity onPress={onEdit}>
                    <View style= {styles.editTextBox}>
                        <Text style= {styles.editText}>Edit</Text>
                    </View>
                </TouchableOpacity>

                <View style={styles.content2}>
                    <ScrollView>
                        <TimerDetails desCar={desCar} end={end} back={back} end3= {end3}/>
                    </ScrollView>
                </View>

                <View style={styles.content3}>
                    <Buttons onPressDesCar={onPressDesCar} onPressCarDes={onPressCarDes} onPressEnd={onPressDesEnd}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height:"100%",
        width:"100%",
        //backgroundColor:"#ffffff"
    },
    popUpTop:{
        height: rel("H",200) - statusBarHeight,
        width:"100%"
    },
    content:{
        paddingHorizontal:rel("W",21),
        marginTop:rel("H",8),
    },
    content1:{
        flexDirection:"row",
        alignItems:"center",
        height:rel("H",60)
    },
    carParkText:{
        fontSize:20,
        fontWeight: "700",
        color:"#001018",
        marginLeft:rel("W",10)
    },
    editTextBox:{
        height:rel("H",30),
        width:rel("W",88),
        alignItems:"center",
        borderRadius:10,
        backgroundColor:"#2e3fd7",
    },
    editText:{
        color:"#ffffff",
        fontSize:20,
        fontWeight:"700",
        alignSelf:"center"
    },
    content2:{
        height:rel("H",310),
        marginTop:rel("H",5)
    },
    content3:{

    }
    
    
})