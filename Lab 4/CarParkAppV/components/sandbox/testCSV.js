import { StyleSheet, View,Text,Button } from "react-native";
import { useEffect, useState } from "react";
import { NativeModules } from 'react-native';
import CSVData from "../ReadCSV/readCSV";
const { SearchCarParkModule } = NativeModules;


export default function TestCSV(){
  
  useEffect(()=>{
      SearchCarParkModule.Init(cb=>{
        console.log(cb);
      });

      for(let y=0;y<CSVData().hdb.length;y++){
        SearchCarParkModule.insertCarPark(CSVData().hdb[y],0);
      }

      for(let y=0;y<CSVData().mall.length;y++){
        SearchCarParkModule.insertCarPark(CSVData().mall[y],1);
      }
  },[])

  const press = () =>{
      SearchCarParkModule.findNearCarPark(1.3398730072174543,103.70727684648821,5,(carParks)=>{
        console.log(carParks);
      })
  }

  const testCSV = () =>{
    console.log(CSVData().hdb[0]);
  }

  const getNum = () =>{
    SearchCarParkModule.getNum(num=>{
      console.log(num);
    })
  }

  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button title="Test CSV" onPress={testCSV}/>
        <Button title="Results" onPress={press}/>
        <Button title="Get Num" onPress={getNum} />
      </View>
  );
}