import BackgroundTimer from 'react-native-background-timer';
import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform } from 'react-native';


export default function TestTimer(){
    let intervalId;
    let sec =1*60;
    const start = () =>{
        intervalId = BackgroundTimer.setInterval(()=>{
            console.log(sec);
            sec = sec -1;
            if(sec <= 0){
                BackgroundTimer.clearInterval(intervalId);
                console.log()
            }
        },1000)
    }

    const end = () =>{
        BackgroundTimer.clearInterval(intervalId);
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button title="start" onPress={start} />
            <Button title="end" onPress={end} />
        </View>
        );
}