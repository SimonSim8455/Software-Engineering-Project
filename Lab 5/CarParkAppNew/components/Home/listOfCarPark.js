import React ,{useEffect, useState} from "react";
import { StyleSheet ,View,Text,TouchableOpacity} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import rel from "../share/RelativeRes";
import Octicons  from 'react-native-vector-icons/Octicons';
import ChooseCarPark from "../data/chooseCarPark";
import CarParkAPI from "../data/carParkAPI";
import FindNearCarPark from "../ReadCSV/findNearCarPark";
import UserState from "../data/userState";

export default function ListOfCarPark({stackNavigation, listCarPark, Category, SortBy, LH}){

    let counter2 =1;
    const [ListOfCarPark,setListOfCarPark] = useState(listCarPark);
    const [done,setDone] = useState(0);
     
    const carParkPressedHandler = (key) =>{
        ChooseCarPark.clear();
        ChooseCarPark.setKey(key);
        ChooseCarPark.init(ListOfCarPark[key])
        CarParkAPI.getAvail(ListOfCarPark[key].name)
        stackNavigation.navigate("CarParkDetails")
    }

    useEffect(()=>{
        setListOfCarPark(listCarPark);
    },[listCarPark])


    const renderList = () =>{
        if(listCarPark == undefined) return;
        let key = "Distance"
        if(Category == "Distance" &&  SortBy == "DC" ){
            key = "disFrOri";
        }
        else if(Category == "Distance" &&  SortBy == "CD" ){
            key = "distance";
        } 
        else if( Category == "Fare"){
            key = "fare";
        }

        for(let a = 1;a<listCarPark.length;a++){
            for(let b=a-1;b>=0;b--){
                if(LH == true){
                    if(listCarPark[a][key] < listCarPark[b][key]){
                        let c = listCarPark[a];
                        listCarPark[a] = listCarPark[b];
                        listCarPark[b] = c;
                    }
                    else{
                        break;
                    }
                }
                else{
                    
                    if(listCarPark[a][key] > listCarPark[b][key]){
                        let c = listCarPark[a];
                        listCarPark[a] = listCarPark[b];
                        listCarPark[b] = c;
                        
                    }
                    else{
                        break;
                    }
                }
            }
        }
        let list =listCarPark.map( (item,index) => {
            return(
                <TouchableOpacity key={index} onPress = {()=>carParkPressedHandler(index)}>
                    <View style={styles.content}>
                        <View style={styles.content1}>
                            <View style={styles.nAndName}>
                                <Text style={styles.number}>{(counter2++).toString()}</Text>
                                <Text style={styles.nameText}>{item.name}</Text>
                            </View>
                            
                                <View style={styles.arrow}>
                                    <Octicons name="arrow-right" size={24} style={styles.arrow}/>
                                </View>
                        </View>
                        <View style={styles.conten2}>
                            <Text style={styles.smallText}>{item.location}</Text>
                            <Text style={styles.smallText}>{item.distance} km</Text>
                        </View>              
                    </View>
                </TouchableOpacity>
            )
        })
        return list;
    }

    return(
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                {renderList()}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    content:{
        flexDirection:"column",
        marginLeft:rel("W",10),
        paddingBottom:rel("H",10),
        flex:1,
    },
    content1:{
        flexDirection:"row",
    },
    nAndName:{
        flex:9,
        flexDirection:"row"
    },
    number:{
        color:"#2196F3",
        fontSize:20
    },
    nameText:{
        color:"white",
        marginLeft:rel("W",15),
        fontSize:20,
    },
    arrow:{
        flex:1,
        color:"white"
    },
    conten2:{
        marginLeft:rel("W",25)
    },
    smallText:{
        fontSize:14,
        color:"#9AA0A6",
        fontWeight:"500"
    }
})