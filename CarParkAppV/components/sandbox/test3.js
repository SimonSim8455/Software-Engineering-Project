import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform } from 'react-native';
import OriDes from '../data/oriDes';


export default function ImagePickerExample() {
  
    const setOrigin = () =>{
        let originDetail={
            name: "origin details",
            formatted_address: "origin address",
            position:{
                latitude: 1,
                longitude: 2,
            }
        }
        OriDes.setOriDetails(originDetail);
    }

    const setDestination = () =>{
        let  destinationDetails ={
            name: "des details",
            formatted_address: "des address",
            position:{
                latitude: 1,
                longitude: 2,
            }
        }
        OriDes.setDesDetails(destinationDetails);
    }

    const getOrigin = () =>{
        console.log(OriDes.getOriDetails())
    }

    const getDestination = () =>{
        console.log(OriDes.getDesDetails());
    }

    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button title="Set Origin" onPress={setOrigin} />
        <Button title="Set Origin" onPress={setDestination} />
        <Button title="Get Origin" onPress={getOrigin} />
        <Button title="Get Origin" onPress={getDestination} />
    </View>
    );
}