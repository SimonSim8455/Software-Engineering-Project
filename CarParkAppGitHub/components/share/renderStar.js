
import React from "react";
import { StyleSheet,Image} from "react-native";
import rel from "./RelativeRes";

const fullStar = "D:/STUDY MATERIAL/SC2006/SC2006 Project/CarParkApp/assets/Pictures/fullStar.png";
const halfStar = "D:/STUDY MATERIAL/SC2006/SC2006 Project/CarParkApp/assets/Pictures/halfStar.png";
const emptyStar = "D:/STUDY MATERIAL/SC2006/SC2006 Project/CarParkApp/assets/Pictures/emptyStar.png";

export const renderStar = (score) =>{
    let numFull=0,numHalf=0,numEmpty= 0;

    numFull = parseInt(score,10);
    
    if((score*10)%10 >=5)
        numHalf++;

    numEmpty = 5 - (numFull + numHalf);

    let list = [];
    let counter =0;
    for(let i =0;i<numFull;i++){
        list[counter] = (
            <Image source= {require(fullStar)} style = {styles.starsIcon} key={counter}/>
        )
        counter++;
    }

    for(let i =0;i<numHalf;i++){
        list[counter] = (
            <Image source= {require(halfStar)} style = {styles.starsIcon} key={counter}/>
        )
        counter++;
    }

    for(let i =0;i<numEmpty;i++){
        list[counter] = (
            <Image source= {require(emptyStar)} style = {styles.starsIcon} key={counter}/>
        )
        counter++;
    }
    //console.log(numFull);
    return list;
}

const styles = StyleSheet.create({
    starsIcon:{
        height:rel("H",16),
        width:rel("W",16),
        resizeMode:"contain",
    },
})