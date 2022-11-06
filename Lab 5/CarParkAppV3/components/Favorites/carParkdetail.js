import React from "react";
import { StyleSheet ,View,Text,ScrollView,Image} from "react-native";
import rel from "../share/RelativeRes";
import Details_1 from "./details1";
import Reviews from "./reviews1";
import PublicReviews from "./publicReviews1";

export default function Details({carParkName}){

    return(
        <View style={styles.container}>
            <ScrollView>
                <Details_1 carParkName={carParkName}/>
                <Reviews   carParkName={carParkName}/>
                <PublicReviews carParkName={carParkName}/>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height:"100%",
        width:"100%",
        flex:1
    },
    content1:{
        paddingBottom:rel("H",10)
    },
})