import React, { useState, useEffect} from 'react';
import { Button, Image, View, Platform,StyleSheet } from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import ImagePicker from 'react-native-image-crop-picker';
import Rel from '../share/RelativeRes';
import { GOOGLE_API_KEY } from "../../API_KEY_SRC/googleAPIkey"
import MapViewDirections from 'react-native-maps-directions';
import MapView, {LatLng, PROVIDER_GOOGLE, Marker, Callout, Circle,Polygon} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import BackgroundTimer from 'react-native-background-timer';
import PushNotification from 'react-native-push-notification';
import OriDes from '../data/oriDes';



export default function ImagePickerExample() {

    let intervalId;
    const size = 0.001072
    const start = () =>{
        intervalId = BackgroundTimer.setInterval(()=>{
            Geolocation.getCurrentPosition((position) => {
                //position.coords.latitude for latitude 
                //position.coords.longitude for longitude
                let l = position.coords.latitude
                let l2 = OriDes._destinationDetails.position.latitude
                let ln = position.coords.longitude
                let ln2 = OriDes._destinationDetails.position.longitude
                
                let a = l>=l2 ? l-l2 :l2-l;
                let b = ln>=ln2 ? ln-ln2 :ln2-ln;
                if(a<=size && b<=size)
                {
                    PushNotification.localNotification({
                        id:'123',
                        channelId:"test-id",
                        message:"reached",
                        allowWhileIdle: false, 
                        repeatTime: 1, 
                    });
                    BackgroundTimer.clearInterval(intervalId);
                }
                console.log(a)
                console.log(b)
              },
              (error) => console.warn(error.message),
              { enableHighAccuracy: true}
            )
        },30000)
    }

    const emd = () =>{
        BackgroundTimer.clearInterval(intervalId);
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button title="fD"  onPress={start}/>
            <Button title="t2" onPress={emd} />
        </View>
        );

}

const styles = StyleSheet.create({
    
})