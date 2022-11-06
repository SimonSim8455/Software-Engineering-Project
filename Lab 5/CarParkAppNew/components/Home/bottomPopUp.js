import React ,{useEffect, useState} from "react";
import {StyleSheet, Text, View ,TouchableWithoutFeedback} from "react-native";
import rel from "../share/RelativeRes";
import CustomButton2 from "./customButton2";
import ListOfCarPark from "./listOfCarPark";
import DropDown from "./dropDown";
import NearByCarPark from "../data/nearByCarPark";
import FindNearCarPark from "../ReadCSV/findNearCarPark";
import Animated, { event, set, useAnimatedStyle, useSharedValue } from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import ChooseCarPark from "../data/chooseCarPark";


export default function bottomPopUp({onPress, stackNavigation}){
    
    const [Category, setCategory] = useState([
        {name:"Distance", sort:1},
        {name:"Fare", sort:0},
        // {name:"Availibility", sort:0},
        // {name:"Recommendation", sort:0}
    ])

    const [Distance, setDistance] = useState([
        {name:"Nearest to Furthest", text:"(Departure to Carpark)", sort:1},
        {name:"Furthest to Nearest", text:"(Departure to Carpark)",sort:0},
        {name:"Nearest to Furthest", text:"(Carpark to Destination)",sort:0},
        {name:"Furthest to Nearest", text:"(Carpark to Destination)",sort:0}
    ])

    const [Fare,setFare] = useState([
        {name: "Lowest to Highest",sort:1},
        {name: "Highest to Lowest",sort:0}
    ])

    const [prevCatIndex, setPrevCatIndex] = useState(0);
    const [prevFareIndex, setPrevFareIndex] = useState(0)
    const [prevSortIndex, setPrevSortIndex] = useState(0)

    const [dropSort, setDropSort] = useState(false)
    const [aC,setAC] = useState("Distance");
    const [aSort,setASort] = useState("DC");
    const [aLH,setLH] =useState(true);
    const [item,setItem] = useState(Distance);
    const [dropCat, setDropCat] = useState(false)
    const [listOfCarPark , setListOfCarPark] = useState(FindNearCarPark._carParks ? FindNearCarPark._carParks: []);

    const pressCatHandler = () =>{
        setDropCat(!dropCat);
    }

    const pressSortHandler = () =>{
        setDropSort(!dropSort);
    }

    const filterCat = (index) =>{
        let list = [...Category];
        list[index].sort = 1;
        list[prevCatIndex].sort=0;
        setPrevCatIndex(index);
        return list;
    }

    const filterSort = (index) =>{
        let list = [...Distance];
        list[index].sort = 1;
        list[prevSortIndex].sort=0;
        setPrevSortIndex(index);
        return list;
    }

    const filterFare = (index) =>{
        let list = [...Fare];
        list[index].sort = 1;
        list[prevFareIndex].sort=0;
        setPrevFareIndex(index);
        return list;
    }
    
    const setCatHandler = (title,index) =>{
        if(index == prevCatIndex) return;
        setCategory(
            filterCat(index)
        )
    }

    const setSortHandler = (title,index) =>{
        if(title == "Category"){
            if(index == prevCatIndex) return;
            setCategory(
                filterCat(index)
            )
        }
        else if(title == "Distance"){
            if(index == prevSortIndex) return;
            setDistance(
                filterSort(index)
            )
        }
        else if(title =="Fare"){
            if(index == prevFareIndex) return;
            setFare(
                filterFare(index)
            )
        }
        // else{
        //     if(index == prevAvailIndex) return;
        //     setAvail(filterAvail(index))
        // }
    }

    useEffect(()=>{
        {
            let s;
            let lh;
            for(let z =0;z<Distance.length;z++){
                if(Distance[z].sort==1){
                    if(Distance[z].text == "(Departure to Carpark)"){
                        s = "DC"
                    }
                    else{
                        s="CD"
                    }
    
                    if(Distance[z].name == "Nearest to Furthest"){
                        lh = true;
                    }
                    else{
                        lh=false;
                    }
                }
            }
            setAC("Distance");
            setASort(s);
            setLH(lh);
        }
    },[Distance])

    useEffect(()=>{
        let lh;
        for(let z =0;z<Fare.length;z++){
            if(Fare[z].sort==1){
                if(Fare[z].name == "Lowest to Highest"){
                     lh=true;
                }
                else{
                    lh = false
                }
            }
        }
        setAC("Fare");
        setLH(lh);
    },[Fare])

    useEffect(()=>{
        let a =prevCatIndex;
        if(a == 0){
            setItem(Distance);
        }
        else if(a ==1){
            setItem(Fare);
        }
    },[Category])

    const renderCat = () =>{
        if(dropCat == false){
            return (
                <CustomButton2 title={"Category"} onPress = {pressCatHandler} />
            )
        }
        else{
            return <DropDown items={Category} title={"Category"} onPress={pressCatHandler} setCatHandler={setSortHandler}/>
        }
    }



    // const [prevAvailIndex, setPrevAvailIndex] = useState(0)
    // const [Avail,setAvail] = useState([
    //     {name: "Lowest to Highest",sort:1},
    //     {name: "Highest to Lowest",sort:0}
    // ])
    // const filterAvail = (index) =>{
    //     let list = [...Avail];
    //     list[index].sort = 1;
    //     list[prevAvailIndex].sort=0;
    //     setPrevAvailIndex(index);
    //     return list;
    // }

    const renderSort = () =>{
        if(dropSort == false){
            return (
                <CustomButton2 title={"Sort by"} onPress = {pressSortHandler} />
            )
        }
        else{
            return (
                <DropDown 
                    items={item} 
                    title={Category[prevCatIndex].name} 
                    onPress={pressSortHandler} 
                    setCatHandler={setSortHandler}
                 />
            )
        
        }
    }
    const context = useSharedValue({y:0})
    const translationY = useSharedValue(0);
    const gesture = Gesture.Pan().onStart(()=>{
        context.value = {y:translationY.value}
    }).onUpdate((event)=>{
        translationY.value = event.translationY+context.value.y;
        translationY.value = Math.max(translationY.value, -20);
        translationY.value = Math.min(translationY.value, 290);
    })

    const rBotSheet = useAnimatedStyle(()=>{
        return {
            transform:[{translateY:translationY.value}]
        }
    })

    return(
        <GestureDetector gesture={gesture}>
            <Animated.View style={[styles.container,rBotSheet]}>
                <TouchableWithoutFeedback onPress={onPress}>
                    <View style={styles.line}></View>
                </TouchableWithoutFeedback>
                <View style={styles.content}>
                    <View style={styles.content1}>
                        <View style={styles.button}>
                            {renderCat()}
                        </View>
                        <View style={styles.button2}>
                            {renderSort()}
                        </View>       
                    </View>

                    <View style={styles.carParkList}>
                        <ListOfCarPark 
                            stackNavigation = {stackNavigation}
                            listCarPark = {listOfCarPark} 
                            Category = {aC}
                            SortBy = {aSort}
                            LH ={aLH}
                        />
                    </View>
                </View>
            </Animated.View>
        </GestureDetector>
    )
}

const styles = StyleSheet.create({
    container:{

    },
    line:{
        width:rel("W",30),
        height:rel("H",4),
        alignSelf:"center",
        backgroundColor:"black",
        borderRadius:100,
        marginBottom: rel("H",10)
    },
    content:{
        height:"100%",
        width:"100%",
        backgroundColor:"#1E1D50",
        borderRadius:25,
    },
    content1:{
        height: rel("H",68),
        marginTop: rel("H",14),
        marginLeft:rel("W",34),
    },
    button:{
        flex:1,
        zIndex:2
    },
    button2:{
        zIndex:1,
        flex:1,
        marginTop:rel("H",9)
    },
    carParkList:{
        flex:1,
        marginTop: rel("H",30),
        marginBottom: rel("H",75),
        zIndex: 0
    }
})