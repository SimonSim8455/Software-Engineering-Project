import React ,{useEffect, useState} from "react";
import {StyleSheet, Text, View ,TouchableWithoutFeedback} from "react-native";
import rel from "../share/RelativeRes";
import CustomButton2 from "./customButton2";
import ListOfCarPark from "./listOfCarPark";
import DropDown from "./dropDown";
import NearByCarPark from "../data/nearByCarPark";
import FindNearCarPark from "../ReadCSV/findNearCarPark";
import { set } from "react-native-reanimated";


export default function bottomPopUp({onPress, stackNavigation}){
    
    const [Category, setCategory] = useState([
        {name:"Distance", sort:1},
        {name:"Fare", sort:0},
        {name:"Availibility", sort:0},
        {name:"Recommendation", sort:0}
    ])

    const [aC,setAC] = useState("Distance");
    const [aSort,setASort] = useState("DC");
    const [aLH,setLH] =useState(true);
    const [item,setItem] = useState(SortBy);

    const [dropCat, setDropCat] = useState(false)
    const [prevCatIndex, setPrevCatIndex] = useState(0);
    const [listOfCarPark , setListOfCarPark] = useState(FindNearCarPark._carParks ? FindNearCarPark._carParks: []);

    const pressCatHandler = () =>{
        setDropCat(!dropCat);
    }

    const filterCat = (index) =>{
        let list = [...Category];
        list[index].sort = 1;
        list[prevCatIndex].sort=0;
        setPrevCatIndex(index);
        return list;
    }

    const setCatHandler = (index) =>{
        if(index == prevCatIndex) return;
        setCategory(
            filterCat(index)
        )
    }

    useEffect(()=>{
        {
            let c;
            for(let z = 0;z<Category.length;z++){
                if(Category[z].sort ==1){
                    c = Category[z].name
                    break;
                }
            }
            let s;
            let lh;
            for(let z =0;z<SortBy.length;z++){
                if(SortBy[z].sort==1){
                    if(SortBy[z].text == "(Departure to Carpark)"){
                        s = "DC"
                    }
                    else{
                        s="CD"
                    }
    
                    if(SortBy[z].name == "Nearest to Furthest"){
                        lh = true;
                    }
                    else{
                        lh=false;
                    }
                }
            }
            setAC(c);
            setASort(s);
            setLH(lh);
        }
    },[SortBy])

    useEffect(()=>{
        let c = "Fare"
        for(let z =0;z<Fare.length;z++){
            if(Fare[z].sort==1){
                if(Fare[z].name == "Lowest to Highest"){
                    s = true
                }
                else{
                    lh = false
                }
            }
        }
        setAC(c);
        setLH(lh);
    },[Fare])

    useEffect(()=>{
        let c = "Avail"
        for(let z =0;z<Avail.length;z++){
            if(Avail[z].sort==1){
                if(Avail[z].name == "Lowest to Highest"){
                    s = true
                }
                else{
                    lh = false
                }
            }
        }
        setAC(c);
        setLH(lh);
    },[Avail])

    useEffect(()=>{
        let a =prevCatIndex;
        if(a == 0){
            setItem(SortBy);
        }
        else if(a ==1){
            setItem(Fare);
        }
        else if(a==2){
            setItem(Avail);
        }
    },[Category])

    const renderCat = () =>{
        if(dropCat == false){
            return (
                <CustomButton2 title={"Category"} onPress = {pressCatHandler} />
            )
        }
        else{
            return <DropDown items={Category} title={"Category"} onPress={pressCatHandler} setCatHandler={setCatHandler}/>
        }
    }

    const [dropSort, setDropSort] = useState(false)
    const [prevSortIndex, setPrevSortIndex] = useState(0)

    const [SortBy, setSortBy] = useState([
        {name:"Nearest to Furthest", text:"(Departure to Carpark)", sort:1},
        {name:"Furthest to Nearest", text:"(Departure to Carpark)",sort:0},
        {name:"Nearest to Furthest", text:"(Carpark to Destination)",sort:0},
        {name:"Furthest to Nearest", text:"(Carpark to Destination)",sort:0}
    ])

    const pressSortHandler = () =>{
        setDropSort(!dropSort);
    }

    const filterSort = (index) =>{
        let list = [...SortBy];
        list[index].sort = 1;
        list[prevSortIndex].sort=0;
        setPrevSortIndex(index);
        return list;
    }

    const setSortHandler = (title,index) =>{
        if(title == "SortBy"){
            if(index == prevSortIndex) return;
            setSortBy(
                filterSort(index)
            )
        }
        else if(title =="Fare"){
            if(index == prevFareIndex) return;
            setFare(
                filterFare(index)
            )
        }
        else{
            if(index == prevAvailIndex) return;
            setAvail(filterAvail(index))
        }
    }

    const [prevFareIndex, setPrevFareIndex] = useState(0)
    const [Fare,setFare] = useState([
        {name: "Lowest to Highest",sort:1},
        {name: "Highest to Lowest",sort:0}
    ])
    const filterFare = (index) =>{
        let list = [...Fare];
        list[index].sort = 1;
        list[prevFareIndex].sort=0;
        setPrevFareIndex(index);
        return list;
    }

    const [prevAvailIndex, setPrevAvailIndex] = useState(0)
    const [Avail,setAvail] = useState([
        {name: "Lowest to Highest",sort:1},
        {name: "Highest to Lowest",sort:0}
    ])
    const filterAvail = (index) =>{
        let list = [...Avail];
        list[index].sort = 1;
        list[prevAvailIndex].sort=0;
        setPrevAvailIndex(index);
        return list;
    }

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
                    title={"Sort by"} 
                    onPress={pressSortHandler} 
                    setCatHandler={setSortHandler}
                 />
            )
        
        }
    }

    return(
            <View style={[styles.container]}>
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
            </View>
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