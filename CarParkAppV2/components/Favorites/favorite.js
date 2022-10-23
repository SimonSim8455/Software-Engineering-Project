import React, {useState} from "react";
import { StyleSheet,View,Text } from "react-native";
import rel from "../share/RelativeRes";
import FavorHistPopUp from "../share/favorHistPopUp";
import { ScrollView } from "react-native-gesture-handler";
import FavoriteList from "./favoriteList";

export default function Favorite({navigation}){
    const drawerNavigation = navigation;

    return(
        <View style={styles.container}>
            <View style={styles.popUpTop}>
                <FavorHistPopUp drawerNavigation={drawerNavigation} title={"My favourites"} />
            </View>

            <View style={styles.content1}>
                <ScrollView>
                    <FavoriteList/>
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        flex:1
    },
    popUpTop:{
        height:rel("H",238)
    },
    content1:{
        marginHorizontal:rel("W",25),
        marginTop:rel("H",26),
        flex:1,
    }
})