import { NativeModules } from 'react-native';
import { StyleSheet, View,Text,Button } from "react-native";
import { useEffect, useState } from "react";

const { CarParkLotsModule } = NativeModules;

export default function ReadAPI(){
    const testInit = () =>{
        CarParkLotsModule.Init(cb=>{
            console.log(cb);
        })
    }

    const carParkLost = () =>{
        let test = ["BH1","T16","BM3","TM36"]
        CarParkLotsModule.carParkLots(test,(cb=>{
            console.log(cb);
        }))
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Button title="Test Init" onPress={testInit}/>
          <Button title="carPark" onPress={carParkLost} />
        </View>
    );
}