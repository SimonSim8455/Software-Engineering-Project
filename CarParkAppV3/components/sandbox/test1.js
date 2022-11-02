import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform } from 'react-native';
import OriDes from '../data/oriDes';
import FindNearCarPark from '../ReadCSV/findNearCarPark';

export default function Test1(){

    const findDummy= () =>{
        FindNearCarPark.setCarParks(5);
        console.log(FindNearCarPark.cp2);
    }

    const t2 = () =>{
        console.log(FindNearCarPark.cp2);
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button title="fD" onPress={findDummy} />
            <Button title="t2" onPress={t2} />
        </View>
        );
}