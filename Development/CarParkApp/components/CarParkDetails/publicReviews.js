import React from "react";
import { StyleSheet , View,Text,Image} from "react-native";
import {renderStar} from "../share/renderStar"
import rel from "../share/RelativeRes";

export default function PublicReviews(){
    const reviews = [
        {
            imageSRC:require("../../assets/Pictures/personImage.png"),
            name:"Potato Mash",
            rating:3,
            reviews:"This is so bad, cant cant wait cant wait cant wait to to to try try it it out out out ouch",
        },
        {
            imageSRC:require("../../assets/Pictures/personImage.png"),
            name:"Naruto",
            rating:3.0,
            reviews:"My dad so bad, cant even handle claws",
        }
    ]
    const renderReviews = (reviews) =>{
        let list = [];

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