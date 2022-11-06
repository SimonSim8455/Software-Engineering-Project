import React, { useEffect, useState } from "react";
import { StyleSheet , View,Text,Image} from "react-native";
import {renderStar} from "../share/renderStar"
import rel from "../share/RelativeRes";
import DummyReview from "../data/dummyReviews";
import ChooseCarPark from "../data/chooseCarPark";

export default function PublicReviews({carParkName}){
    const [name,setName] =useState(carParkName);
    const [reviews,setReviews] = useState(null);

    useEffect(()=>{
        if(DummyReview.reviews_ob.hasOwnProperty(name)){
            setReviews(DummyReview.reviews_ob[name].publicReviews);
        }
        else{
            setReviews(null)
        }
    },[])


    const renderReviews = (reviews) =>{
        let list = [];
        if(reviews){
            for(let i=0;i<reviews.length;i++){
                list[i] = (
                    <View style= {styles.iReviews} key={i}>
                        <View style={{flexDirection:"row",alignItems:"center"}}>
                            <Image source = {reviews[i].imageSRC} style={styles.image} />
                            <Text style={styles.name}>{reviews[i].name}</Text>
                            <View style={styles.star}>
                                {renderStar(reviews[i].rating)}
                            </View>
                        </View>
                        <Text style= {styles.reviewText}>{reviews[i].reviews}</Text>
                    </View>
                )
            }
            return list;
        }
        return <View></View>;
    }
    return(
        <View style={styles.content}>
            {renderReviews(reviews)}
        </View>
    )
}

const styles = StyleSheet.create({
    content:{
        
    },
    iReviews:{
        marginTop:rel("H",20)
    },
    image:{
        height:rel("H",40),
        width:rel("W",40),
        resizeMode:"contain",
    },
    name:{
        fontSize:15,
        fontWeight:"600",
        marginLeft:rel("W",10)
    },
    star:{
        position:"absolute",
        right:rel("W",15),
        flexDirection:"row"
    },
    reviewText:{
        marginTop:rel("H",6),
        fontSize:14,
        fontWeight:"400"
    }
})