import MapView, {LatLng, PROVIDER_GOOGLE, Marker, Callout, Circle,Polygon} from 'react-native-maps';
import Constants from "expo-constants";
import { StyleSheet,View ,Dimensions,Image,Text} from 'react-native';
import rel from '../share/RelativeRes';
import React, {useRef, useState} from 'react';
import MapViewDirections from 'react-native-maps-directions';
import HomeButton from '../Home/button'
import { GOOGLE_API_KEY } from '../../googleAPIkey';


const { width, height } = Dimensions.get("screen");

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const INITIAL_POSITION = {
  latitude: 1.351900,
  longitude: 103.681940,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
}


export default function Map({origin,destination,listCarPark}){

    const mapRef = useRef(null)
    const parkMarker = require("../../assets/Pictures/parkMarkerR2.png")

    const zoomInHandler = async () =>{
        const camera = await mapRef.current?.getCamera()
        if(camera){
            camera.zoom +=1;
            mapRef.current?.animateCamera(camera, {duration: 1000})
        }
    }

    const recenter = async (position) =>{
        const camera = await mapRef.current?.getCamera()
        if(camera){
            camera.center = {
                latitude: 1.351900,
                longitude: 103.681940,
            }
            // camera.center = position;
            mapRef.current?.animateCamera(camera, {duration: 1000})
        }
    }
    
    const zoomOutHandler = async () =>{
        const camera = await mapRef.current?.getCamera()
        if(camera){
            camera.zoom -=1;
            mapRef.current?.animateCamera(camera, {duration: 1000})
        }
    }

    const moveTo = async (position) =>{
        const camera = await mapRef.current?.getCamera()
        if(camera){
            camera.center = position;
            mapRef.current?.animateCamera(camera, {duration: 1000})
        }
    }
    const renderRoute = (origin,destination) =>{
        
        if(origin && destination){
            moveTo(destination.position)
        }
        else{
            return;
        }
        return(
            <MapViewDirections
                origin={origin.position}
                destination={destination.positionn}
                apikey={GOOGLE_API_KEY}
                strokeColor="#6644ff"
                strokeWidth={4}
            />
        )
    }

    const renderCarPark = () =>{
        if(listCarPark == undefined) return;
        let list = [];
        for(let i=0;i<listCarPark.length;i++){
            list[i] = (
                <Marker 
                    coordinate={listCarPark[i].position} 
                    key={i}
                    image={parkMarker}
                >
                    <Callout>
                        <Text>{listCarPark[i].name}</Text>
                    </Callout>
                </Marker>
            )
        }
        return list;
    }

    const renderCircle = (destination) =>{
        console.log(destination)
        if(destination == undefined)
            return;
        return(
            <Circle
                center={destination.position}
                radius = {500}
                fillColor = {'rgba(200,300,200,0.5)'}
            />
        )
    }

    return(
        <View style={styles.container1}>
            <MapView 
                ref = {mapRef}
                style={styles.map} 
                initialRegion={INITIAL_POSITION}
                provider={PROVIDER_GOOGLE}     
                          
            >  
                {origin!= undefined && <Marker coordinate={origin.position} />}
                {destination!= undefined && <Marker coordinate={destination.position} />}
                {renderRoute(origin,destination)}
                {renderCarPark()}
                {renderCircle(destination)}
            </MapView>
            <View style={styles.button}>
                <HomeButton myLocationHandler={() =>recenter(origin)} zoomInHandler ={zoomInHandler} zoomOutHandler= {zoomOutHandler}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container1:{
        flex: 1,
        backgroundColor: "#ffffff",
        alignItems: "center",
        justifyContent: "center",
        position: 'absolute',
        top: Constants.statusBarHeight,
    },
    map: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
    },
    searchContainer: {
        position: 'absolute',
        width: "90%",
        backgroundColor:"#c6c6c6",
        borderRadius: 8,
        top: Constants.statusBarHeight,
    },
    input:{
        borderColor:"black",
        borderWidth:1,
    },
    searchBar1:{
        position: 'absolute',
        flexDirection:"row",
        backgroundColor:"#c6c6c6",
        borderWidth:1,
        borderRadius: 5,
        width: rel("W", 255),
        height: rel("H",27),
        alignItems:"center",
    },
    text2:{
        color:"white",
        fontSize:15,
        marginLeft: rel("W",4),
        alignSelf:"center"
    },
    button:{
        position:"absolute",
        alignSelf:"flex-end",
        //justifyContent: "flex-end",
        right:rel("W",20),
        top: rel("H",520),
        height:rel("H",200),
    },
    parkMarker:{
        height:rel("H",20),
        width:rel("W",20),
        resizeMode:'contain'
    }
})