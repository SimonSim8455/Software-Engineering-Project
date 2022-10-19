import React from "react";
import { StyleSheet ,View,Text,ScrollView,Image} from "react-native";
import rel from "../share/RelativeRes";
import Details_1 from "./details_1";
import Reviews from "./reviews";
import PublicReviews from "./publicReviews";

export default function Details(){

    return(
        <View style={styles.container}>
            <ScrollView>
                <Details_1 />
                <Reviews />
                <PublicReviews />
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