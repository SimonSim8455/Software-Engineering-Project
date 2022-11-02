import React ,{useState} from "react";
import {StyleSheet, Text, View ,TouchableWithoutFeedback} from "react-native";
import rel from "../share/RelativeRes";
import CustomButton2 from "./customButton2";
import ListOfCarPark from "./listOfCarPark";
import DropDown from "./dropDown";
import NearByCarPark from "../data/nearByCarPark";
import FindNearCarPark from "../ReadCSV/findNearCarPark";


export default function bottomPopUp({onPress, stackNavigation, callbackHome}){
    
    const [Category, setCategory] = useState([
        {name:"Distance", sort:1},
        {name:"Fare", sort:0},
        {name:"Availibility", sort:0},
        {name:"Recommendation", sort:0}
    ])

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
        setListOfCarPark([...listOfCarPark]);
    }

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

    const setSortHandler = (index) =>{
        if(index == prevSortIndex) return;
        setSortBy(
            filterSort(index)
        )
        setListOfCarPark([...listOfCarPark]);
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
                    items={SortBy} 
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