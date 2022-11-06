import React, {useState} from "react";
import { StyleSheet,View,Text,StatusBar } from "react-native";
import rel from "../share/RelativeRes";
import FavorHistPopUp from "../share/favorHistPopUp";
import { ScrollView } from "react-native-gesture-handler";
import HistoryRender from "./historyRender";

const statusBarHeight = StatusBar.currentHeight;
export default function History({navigation}){
    const drawerNavigation = navigation.getParent();
    const stackNavigation = navigation;
    
    return(
        <View style={styles.container}>
        <View style={styles.popUpTop}>
            <FavorHistPopUp drawerNavigation={drawerNavigation} title={"My history"} />
        </View>

        <View style={styles.content1}>
            <ScrollView>
                <HistoryRender stackNavigation={stackNavigation}/>
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
        height:rel("H",238) - statusBarHeight
    },
    content1:{
        marginHorizontal:rel("W",25),
        marginTop:rel("H",26),
        flex:1,
    }
})