import React, {useState} from "react";
import { Dimensions,StyleSheet,View,ImageBackground,TouchableWithoutFeedback, Text,Keyboard} from "react-native";
import Rel from "../share/RelativeRes";
import HomeHeader from "./homeHeader";
import PopUpTop from "../share/popUpTop";
import BottomPopUp from "./bottomPopUp";
import Map from "../Map/map";
import { getPosition } from "../share/getPosition";
import { GestureHandlerRootView } from "react-native-gesture-handler";


const screenHeight = Dimensions.get("screen").height;
export default function Home({navigation}){
    
    const drawerNavigation = navigation.getParent();
    const [pressed,setPressed] = useState(false)
    const [pressedBot,setPressedBot] = useState(false)
    const [title,setTitle] = useState("Customize your location");
    const [carParks,setCarParks] = useState(undefined);

    const inputHandler = () => {
        setPressed(!pressed);
    }
    
    const botPressed = () =>{
        setPressedBot(!pressedBot);
        if(!pressedBot)
            setTitle("Nearby Carpark Results")
        else
            setTitle("Customize your location")
    }

    const [locations,setLocations] = useState({
        originDetails:undefined,
        destinationDetails:undefined
    })

    const getDetails =  (details) =>{
        if(!details) return;
        setLocations(getPosition(details));
        if(details.destinationDetails != null && details.originDetails !=null){
            getCarParkList();
        }
    }
    
    const callback = (details) =>{
        if(!details) return;
        setLocations(getPosition(details));
        if(details.destinationDetails != null && details.originDetails !=null){
            getCarParkList();
        }
    }

    const getCarParkList = () =>{
        setCarParks([
            {name:"Jurong Point Car Park - Entrance A", location:"B2, near Lobby B", distance:10, time:1, key:0,
                position:{
                    latitude:1.3405221921150023,
                    longitude:103.70690144596188
                }
            },
            {name:"Block 664 MSCP HDB Jurong West", location:"B2, near Lobby B", distance:10, time:1, key:1,
                position:{
                    latitude:1.3397928308316414, 
                    longitude:103.70387591420366
                }
            },
            {name:"Jurong Point Car Park - Entrance B", location:"B2, near Lobby B", distance:10, time:1, key:2,
                position:{
                    latitude:1.3389883879962463, 
                    longitude:103.70524920521265
                }
            },
            {name:"697 Multi Storey Car Park", location:"B2, near Lobby B", distance:10, time:1, key:3,
                position:{
                    latitude:1.3419272845533288, 
                    longitude:103.70863951740495
                }
            },
        ])
        botPressed();
    }
    

    const renderPopUpTop = () =>{
        if(pressed==false){
            return(
                <View style={styles.header}>
                    <HomeHeader drawerNavigation={drawerNavigation} onPressBack= {inputHandler}/>
                </View>    
            )
        }
        else{
            return(
                <View style={styles.popUpTop}>
                    <PopUpTop drawerNavigation={drawerNavigation} onPressBack= {inputHandler} 
                        onSearch = {getDetails} title={title}
                        // initialLocations ={{
                        //     originDetails:{
                        //         name: "",
                        //         formatted_address: "",
                        //         position:{
                        //             latitude: undefined,
                        //             longitude: undefined
                        //         }
                        //     },
                        //     destinationDetails:{
                        //         name: "",
                        //         formatted_address: "",
                        //         position:{
                        //             latitude: undefined,
                        //             longitude: undefined
                        //         }
                        //     },
                        // }}
                        initialLocations = {{
                            originDetails:{
                                name: "Hall 9 - Block 45",
                                formatted_address: "26 Nanyang Ave, Hall 9 - Block 45, Singapore 639812",
                                position:{
                                    latitude:1.3510210126826618, 
                                    longitude:103.68580822679573
                                }
                            },
                            destinationDetails:{
                                name: "Jurong Point",
                                formatted_address: "1 Jurong West Central 2, Singapore 648886",
                                position:{
                                    latitude:1.3398730072174543, 
                                    longitude:103.70727684648821
                                }   
                            }
                        }}
                    />
                </View >
            )
        }
    }

    const renderPopUpBot = () =>{
        if(pressedBot==false){
            return (
                <TouchableWithoutFeedback onPress={botPressed}>
                    <View style={styles.line}></View>
                </TouchableWithoutFeedback>
            )
        }
        else{
            return(
                <View style={styles.bottomPopUp}>
                    <BottomPopUp onPress= {botPressed} stackNavigation= {navigation} listCarPark ={carParks} 
                        initialLocations ={{
                            originDetails:{
                                name: locations.originDetails.name,
                                formatted_address: locations.originDetails.formatted_address,
                                position:{
                                    latitude: locations.originDetails.position.latitude,
                                    longitude: locations.originDetails.position.longitude
                                }
                            },
                            destinationDetails:{
                                name: locations.destinationDetails.name,
                                formatted_address: locations.destinationDetails.formatted_address,
                                position:{
                                    latitude: locations.destinationDetails.position.latitude,
                                    longitude: locations.destinationDetails.position.longitude
                                }
                            },
                        }}
                        callbackHome = {callback}
                    />
                </View >
            )
        }
    }


    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <GestureHandlerRootView style={{flex:1}}>
                <Map origin ={locations.originDetails} destination= {locations.destinationDetails} listCarPark = {carParks}/>

                {renderPopUpTop()} 
                
                {renderPopUpBot()}
            </GestureHandlerRootView>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container:{
        height:"100%",
        width:"100%",
    },
    header:{
        position:"absolute",
        height: Rel("H",70),
        width:"100%"
    },
    popUpTop:{
        position:"absolute",
        height: Rel("H",190),
        width:"100%"
    },
    button:{
        position:"absolute",
        alignSelf:"flex-end",
        //justifyContent: "flex-end",
        right:Rel("W",20),
        top: Rel("H",520),
        height:Rel("H",200),
    },
    bottomPopUp:{
        position:"absolute",
        alignSelf:"flex-end",
        top: screenHeight-Rel("H",375),
        width:"100%",
        height: Rel("H",375)
    },
    // bottomPopUp:{
    //     flex:1,
    //     height:"100%",
    //     width:"100%",
    //     position:"absolute"
    // },
    line:{
        width:Rel("W",30),
        height:Rel("H",4),
        alignSelf:"center",
        backgroundColor:"black",
        borderRadius:100,
        marginTop: Rel("H",screenHeight),
        marginBottom: Rel("H",10)
    },
    details:{
        position:"absolute",
        height:screenHeight - Rel("H",190),
        width:"100%",
        zIndex:10,
        marginTop:Rel("H",190),
        flex:1
    },
})