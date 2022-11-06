import React from "react";
import { StyleSheet ,View,Text, TouchableWithoutFeedback,StatusBar} from "react-native";
import rel from "../share/RelativeRes";
import Icon from 'react-native-vector-icons/Ionicons';
import Buttons from "../CarParkDetails/Buttons";
import Details from "./carParkdetail";
import PopUpTop from "../share/popUpTop"
import OriDes from "../data/oriDes";
import NearByCarPark from "../data/nearByCarPark";
import FindNearCarPark from "../ReadCSV/findNearCarPark";
import ChooseCarPark from "../data/chooseCarPark";
import UserData from "../data/UserData";
import DummyUser from "../data/dummyUsers";
import UserState from "../data/userState";
import FavPopUpTop from "./favPopUpTop"
import CarParkAPI from "../data/carParkAPI";


const statusBarHeight = StatusBar.currentHeight;
export default function FavCarParkDetails({navigation,route}){
    const drawerNavigation = navigation.getParent();
    const stackNavigation = navigation;
    const {item} = route.params;
    const onSearch = () =>{
        if(OriDes._destinationDetails && OriDes._originalDetails){
            FindNearCarPark.setCarParks(5);

            CarParkAPI.callAPI();
        }
        drawerNavigation.navigate("HomeStack");
    }

    const onPressStart =() =>{
        OriDes.setOriDetails("Current")
        let d = {
            name: item.name,
            formatted_address: item.location,
            geometry:{
                location:{
                    lat: item.position.latitude,
                    lng: item.position.longitude,
                }
            }
        }
        OriDes.setDesDetails(d);
        carParkPressedHandler(item);
        drawerNavigation.navigate("HomeStack",{screen : "StartParking" })
    }

    const onPressNavigate = () =>{
        OriDes.setOriDetails("Current")
        let d = {
            name: item.name,
            formatted_address: item.location,
            geometry:{
                location:{
                    lat: item.position.latitude,
                    lng: item.position.longitude,
                }
            }
        }
        OriDes.setDesDetails(d);
        carParkPressedHandler(item);
        drawerNavigation.navigate("HomeStack",{screen : "Home"})
    }

    const onPressShare = () =>{

    }

    const carParkPressedHandler = (cp) =>{
        ChooseCarPark.clear();
        ChooseCarPark.init(cp)
    }


    return(
        <View style={styles.container}>
            <View style= {styles.popUpTop}>
                    <FavPopUpTop 
                        drawerNavigation={drawerNavigation} 
                        onSearch = {onSearch} 
                        title={"Favorite"}
                        item = {item}
                   />
            </View>
            <View style = {styles.content}>
                <View style={styles.content1}>
                    <TouchableWithoutFeedback onPress={() => stackNavigation.goBack()}>
                        <Icon name="arrow-back" size={30} color="black" />
                    </TouchableWithoutFeedback>
                    <Text style={styles.carParkText}>{item.name}</Text>
                </View>

                <View style={styles.content2}>
                    <Details carParkName = {item.name}/>
                </View>

                <View style={styles.content3}>
                    <Buttons onPressStart = {onPressStart} onPressShare={onPressShare} onPressNavigate = {onPressNavigate}/>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        height:"100%",
        width:"100%",
        backgroundColor:"white",
    },
    popUpTop:{
        height: rel("H",200) - statusBarHeight,
        width:"100%"
    },
    content:{
        paddingHorizontal:rel("W",21),
        marginTop:rel("H",8),
        //flex:1,
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
    content2:{
        height:rel("H",370),
        width:"100%",
    },
    
})