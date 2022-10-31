import React ,{useRef, useState}from "react";
import { StyleSheet, Text, View , Image,TouchableWithoutFeedback} from "react-native";
import {MaterialIcons,Ionicons} from "@expo/vector-icons";
import rel from "./RelativeRes"
import CustomButton from "../Home/customButton";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_API_KEY } from "../../googleAPIkey";

import { useDispatch } from 'react-redux';
import { setDestinationData, setOriginData } from '../../slices/navSlice';
import { useSelector } from 'react-redux';
import { selectDestination, selectOrigin } from '../../slices/navSlice';


export default function PopUpTop({drawerNavigation,onPressBack, onSearch,title,initialLocations}){

    const dispatch = useDispatch();

    const moveTo = async (position) =>{
        const camera = await mapRef.current?.getCamera()
        if(camera){
            camera.center = position
            mapRef.current?.animateCamera(camera, {duration: 1000})
        }
    }

    const onPlaceSelected = (details) => {
        const position = {
          latitude: details.geometry.location.lat,
          longitude: details.geometry.location.lng,
        }
        moveTo(position);
      }

    const renderText= (title) =>{
        return <Text style= {styles.text}>{title}</Text>
    }
    const drawer = () =>{
        drawerNavigation.openDrawer();
    }

    const [locations,setLocations] = useState(initialLocations);

    const getLocations = (data,details,lable) =>{
        if(lable == "Origin"){
            getOrigin(details);
        }  
        else{
            getDestination(details);
        }

    }

    const getOrigin = (details) =>{
        setLocations({
            originDetails:{
                name: details.name,
                formatted_address: details.formatted_address,
                position:{
                    latitude: details.geometry.location.lat,
                    longitude: details.geometry.location.lng,
                }
            },
            destinationDetails: locations.destinationDetails,
        })
        
    }

    const getDestination = (details) =>{
        setLocations({
            destinationDetails:{
                name: details.name,
                formatted_address: details.formatted_address,
                position:{
                    latitude: details.geometry.location.lat,
                    longitude: details.geometry.location.lng,
                }
            },
            originDetails: locations.originDetails,
        })
    }

    const [origin,setOrigin] = useState(false);
    const [dest,setDest] = useState(false);
    const [originValue,setOriginValue] = useState(initialLocations.originDetails.formatted_address)
    const [destinationValue,setDestinationValue] = useState(initialLocations.destinationDetails.formatted_address)
    
    const handleChangeText= (text,lable) =>{
        if(lable == "Origin")
            setOriginValue(text);
        else
            setDestinationValue(text);
    }
    
    const renderSearhBar = (lable,title) =>{
        let text,renderOut,setRender;
        if(lable == "Origin"){
            text = originValue;
            renderOut = origin;
            setRender = setOrigin;
        }
        else{
            text = destinationValue;
            renderOut = dest;
            setRender = setDest;
        }
        
        if(!renderOut){
            if(text != ''){
                return(
                    <View style={styles.searchBar2}>
                        <Text style= {styles.text2} numberOfLines={1}>{text}</Text>
                    </View>
                )
            }
            else{
                return(
                    <View style={styles.searchBar2}>
                        <Ionicons name="search" size={20} style={styles.icon2}/>
                        <Text style= {styles.text2}>{title}</Text>
                    </View>
                )
            }
        } 
        else{
            return(
                <View style = {styles.searchBar1}>
                    <GooglePlacesAutocomplete
                        placeholder='Search'
                        fetchDetails
                        styles={{
                            textInput: styles.textInput,
                            row:styles.row,
                            description:styles.dropDownText,
                        }}
                        onPress={(data, details) => {
                            handleChangeText(details.formatted_address,lable)
                            getLocations(data,details,lable)
                            onPlaceSelected(details)
                            {lable=="Origin" ? (dispatch(setOriginData({
                                location: details.geometry.location,
                                description: data.description
                            }))) : (dispatch(setDestinationData({
                                location: details.geometry.location,
                                description: data.description
                            })))}
                        }}
                        query={{
                            key: GOOGLE_API_KEY,
                            language: 'en',
                        }}
                        suppressDefaultStyles={true}
                        enablePoweredByContainer={false}
                        textInputProps={{
                            value: lable =="Origin" ? originValue : destinationValue,
                            onChangeText: (text) => {handleChangeText(text,lable)}
                        }}
                    />
                </View>
            )
        }
    }

    const delayOnSearch = () =>{
        onSearch(locations);
    }
    const icon1 = "../../assets/Pictures/searchIcon1.png"
    const icon2 = "../../assets/Pictures/locationIconRed.png"
    return(
            <View style={styles.container}>
                <View style = {styles.content}>
                    <View style={styles.content1}>
                        <MaterialIcons name= "menu" size={35} style = {styles.menuIcon} onPress ={drawer}/>
                        {renderText(title)}
                    </View>

                        <View style={styles.content2}>
                            <Ionicons name="arrow-back" size={24} color="white" onPress= {onPressBack}/>
                            <Image source={require(icon1)} style={styles.icon1}/>
                            <TouchableWithoutFeedback onPress={()=>setOrigin(!origin)}>
                                {renderSearhBar("Origin","Choose start location")}
                            </TouchableWithoutFeedback>
                        </View>

                        <View style={styles.content3}>
                            <Image source={require(icon2)} style={styles.icon3}/>
                            <TouchableWithoutFeedback onPress={()=>setDest(!dest)}>
                                {renderSearhBar("Destination","Enter your destination")}
                            </TouchableWithoutFeedback>
                        </View>


                    <View style={styles.content4}>
                        <CustomButton title={"Search"} onPress={delayOnSearch} />
                    </View>

                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height:'100%',
        width:'100%',
        backgroundColor:"#0f0f2d",
        flex:1,
    },
    content:{
        marginTop: rel("H",30),
        marginLeft: rel("W",10)
    },
    content1:{
        flexDirection:"row",
        alignItems:"center",
    },
    menuIcon:{
        color: "white"
    },
    text:{
        marginLeft: rel("W",10),
        color: "white",
        fontSize:20,
    },
    content2:{
        flexDirection:"row",
        alignItems:"center",
        marginLeft: rel("W",22),
    },
    icon1:{
        width: rel("H",35),
        height: rel("W",35),
        resizeMode:"contain",
    },
    searchBar1:{
        flexDirection:"row",
        backgroundColor:"white",
        borderWidth:1,
        borderRadius: 5,
        width: rel("W", 255),
    },
    searchBar2:{
        flexDirection:"row",
        backgroundColor:"#c6c6c6",
        borderWidth:1,
        borderRadius: 5,
        width: rel("W", 255),
        height:rel("H",29.3),
    },
    icon2:{
        color:"white",
        paddingLeft:rel("W",8),
        alignSelf:"center"
    },
    text2:{
        backgroundColor:"#c6c6c6",
        fontSize:15,
        marginLeft: rel("W",4),
        color:"black",
        fontWeight:"500",
        alignSelf:"center",
    },
    textInput:{
        fontSize:17,
        fontWeight:"500",
        marginLeft:rel("W",10),
    },
    content3:{
        marginLeft:rel("W",48),
        flexDirection:"row",
        marginTop:rel("H",10),
    },
    icon3:{
        width: rel("H",24),
        height: rel("W",24),
        marginRight: rel("W",5),
        resizeMode:"contain",
    },
    content4:{
        marginTop:rel("H",12),
        marginLeft:rel("W",75),
        height: rel("H",27),
        width: rel("W",61)
    },
    row:{
        flexDirection:"row",
        borderBottomColor:"black",
        borderBottomWidth:1,
    },
    dropDownText:{
        fontSize:15,
        marginLeft: rel("W",5),
        marginVertical:rel("H",7),
    },

})