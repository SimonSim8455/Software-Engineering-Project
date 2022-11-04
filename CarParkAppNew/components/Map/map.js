import MapView, {LatLng, PROVIDER_GOOGLE, Marker, Callout, Circle,Polygon} from 'react-native-maps';
import { StyleSheet,View ,Dimensions,Image,Text, StatusBar, PermissionsAndroid} from 'react-native';
import rel from '../share/RelativeRes';
import React, {useEffect, useRef, useState} from 'react';
import MapViewDirections from 'react-native-maps-directions';
import HomeButton from '../Home/button'
import OriDes from '../data/oriDes';
import NearByCarPark from '../data/nearByCarPark';
import { GOOGLE_API_KEY } from "../../API_KEY_SRC/googleAPIkey"
import FindNearCarPark from '../ReadCSV/findNearCarPark';
import ChooseCarPark from '../data/chooseCarPark';
import UserState from '../data/userState';
import CarParkAPI from '../data/carParkAPI';


const { width, height } = Dimensions.get("screen");
const statusBarHeight = StatusBar.currentHeight;
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const INITIAL_POSITION = {
  latitude: 1.351900,
  longitude: 103.681940,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
}


export default function Map({stackNavigation}){


    useEffect(()=>{
        requestCameraPermission();
    },[])

    

    const requestCameraPermission = async () => {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: "Cool Photo App Camera Permission",
              message:
                "Cool Photo App needs access to your camera " +
                "so you can take awesome pictures.",
              buttonNeutral: "Ask Me Later",
              buttonNegative: "Cancel",
              buttonPositive: "OK"
            }
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("You can use the camera");
          } else {
            console.log("Camera permission denied");
          }
        } catch (err) {
          console.warn(err);
        }
      };

    const mapRef = useRef(null)
    const parkMarker = require("../../assets/Pictures/parkMarkerR2.png")
    const [lat, setLat] = useState(1.351900);
    const [lng,setLng] = useState(103.681940);
    const [dis,setDis] = useState(1000000000000000);
    const [valid,setValid] = useState(false);

    const setCenter = (nativeEvent) =>{

        setLat(nativeEvent.coordinate.latitude)
        setLng(nativeEvent.coordinate.longitude)
        if(valid){
            moveTo({
                latitude: nativeEvent.coordinate.latitude,
                longitude: nativeEvent.coordinate.longitude
            })
        }
        OriDes.setCurrentLocation(nativeEvent.coordinate.latitude,nativeEvent.coordinate.longitude);
    }


    const handleOnPress = () =>{
        setValid(false)
    }
    useEffect(()=>{
        if(UserState.onClickCarPark && UserState.bufferCarPark){
            UserState.setOnClick(false);
            UserState.setSuccessPop(true);
            UserState.setBackAPI(false)
            console.log("Hello")
            stackNavigation.popToTop();
        }

        if(UserState.onSuccessPop && UserState.bufferCarPark){
            ChooseCarPark.clear();
            ChooseCarPark.setKey(1);
            ChooseCarPark.init(UserState.bufferCarPark)
            CarParkAPI.getAvail(UserState.bufferCarPark.name)
            UserState.setSuccessPop(false);
            stackNavigation.navigate("CarParkDetails")
        }


        if(detOD()!=null){
            let b = detOD().destination
            let a = distance(lat,lng,b.latitude,b.longitude);
            if(a<=0.1){
                if(UserState.locState==0){
                    UserState.setBackAPI(false)
                    stackNavigation.pop();
                }
                else if(UserState.locState ==1){
                    stackNavigation.pop();
                }
                else if(UserState.locState ==2){
                    stackNavigation.pop();
                }
                else{
                    return;
                }
            }   
        }
    },[lat,lng])

    const cancelNavigate = () =>{
        if(UserState.locState==3){
            return;
        }
        if(UserState.locState==0){
            UserState.setBackAPI(false)
            stackNavigation.pop();
        }
        else if(UserState.locState ==1){
            stackNavigation.pop();
        }
        else if(UserState.locState ==2){
            stackNavigation.pop();
        }
    }

    const zoomInHandler = async () =>{
        const camera = await mapRef.current?.getCamera()
        if(camera){
            camera.zoom +=1;
            mapRef.current?.animateCamera(camera, {duration: 1000})
        }
    }

    const recenter = async () =>{
        const camera = await mapRef.current?.getCamera()
        if(camera){
            camera.center = {
                latitude: lat,
                longitude: lng
            }
            // camera.center = position;
            mapRef.current?.animateCamera(camera, {duration: 1000})
        }
        setValid(true)
    }
    
    const zoomOutHandler = async () =>{
        const camera = await mapRef.current?.getCamera()
        if(camera){
            camera.zoom -=1;
            mapRef.current?.animateCamera(camera, {duration: 1000})
        }
    }

    useEffect(()=>{
        if(OriDes._destinationDetails!=null){
            setValid(false)
            moveTo(OriDes._destinationDetails.position)
        }
    },[OriDes._destinationDetails])

    const moveTo = async (position) =>{
        const camera = await mapRef.current?.getCamera()
        if(camera){
            camera.center = position;
            mapRef.current?.animateCamera(camera, {duration: 1000})
        }
    }

    const renderRoute = () =>{
        if(detOD()!= null){
            return(
                <MapViewDirections
                    origin={detOD().origin}
                    destination={detOD().destination}
                    apikey={GOOGLE_API_KEY}
                    strokeColor="#6644ff"
                    strokeWidth={4}
                    mode= {detOD().mode}
                />
            )
        }
        else{
            return;
        }
    }

    // useEffect(()=>{
    //     UserState.setLocState(0)
    // },[OriDes._originalDetails, OriDes._destinationDetails])

    const detOD = () =>{
        let origin;
        let destination;
        let mode;
        if(UserState.locState == 3){
            return null;
        }
        if(!(OriDes._originalDetails && OriDes._destinationDetails && ChooseCarPark.position)){
            return null;
        }

        // 0 :departure to car park
        if(UserState.locState ==0){
            origin = OriDes._originalDetails.position;
            destination = ChooseCarPark.position;
            mode = "DRIVING"
        }
        // 1: car park to destination
        else if( UserState.locState == 1){
            origin = ChooseCarPark.position;
            destination = OriDes._destinationDetails.position;
            mode = "WALKING"
        }
        // 2: destination to car park
        else{
            origin = OriDes._destinationDetails.position;
            destination = ChooseCarPark.position
            mode = "WALKING"
        }

        return{
            origin:origin,
            destination:destination,
            mode:mode,
        }
    }

    const distance = (lat1, lon1, lat2, lon2) =>{
        var p = 0.017453292519943295;    // Math.PI / 180
        var c = Math.cos;
        var a = 0.5 - c((lat2 - lat1) * p)/2 + 
                c(lat1 * p) * c(lat2 * p) * 
                (1 - c((lon2 - lon1) * p))/2;
      
        return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
    }

    const renderCarPark = () =>{
        let  listCarPark = FindNearCarPark._carParks;
        if(!listCarPark) return;
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

    const renderCircle = () =>{
        let destination = OriDes._destinationDetails;
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
                showsUserLocation ={true}   
                onUserLocationChange={event => setCenter(event.nativeEvent)}
                onPress = {handleOnPress}
                minDelta={0.02}
                maxDelta={1}
            >  
                {OriDes._originalDetails && <Marker coordinate={OriDes._originalDetails.position} />}
                {OriDes._destinationDetails && <Marker coordinate={OriDes._destinationDetails.position} />}
                {renderRoute()}
                {renderCarPark()}
                {renderCircle()}
            </MapView>
            <View style={styles.button}>
                <HomeButton myLocationHandler={recenter} zoomInHandler ={zoomInHandler} zoomOutHandler= {zoomOutHandler} endNavigate={cancelNavigate}/>
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
        top: rel("H",10)
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
        top: rel("H",10)
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
        right:rel("W",20),
        // top: rel("H",470) -statusBarHeight,
        bottom:rel("H",150),
        height:rel("H",200),
    },
    parkMarker:{
        height:rel("H",20),
        width:rel("W",20),
        resizeMode:'contain'
    }
})