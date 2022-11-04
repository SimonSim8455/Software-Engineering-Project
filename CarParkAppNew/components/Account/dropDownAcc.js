import React from "react";
import { StyleSheet , View,Text, TouchableWithoutFeedback,TouchableOpacity} from "react-native";
import rel from "../share/RelativeRes";


export default function DropDownAcc({items,title,onPressYear,onPressDrop,mY}){

    const renderDrop0 = () =>{
        let list = items.map( (item,index) =>{
            return(
                <TouchableWithoutFeedback key={index} onPress = {() =>onPressYear(index)}>
                    <View style={styles.dropDownContent}>
                        <View style={styles.content1}>
                            <Text style={styles.nameText}>{item.year}</Text>
                        </View>          
                    </View>
                </TouchableWithoutFeedback>
            )
        })
        return list;
    }

    const renderDrop1 = () =>{
        let list = items.map( (item,index) =>{
            return(
                <TouchableWithoutFeedback key={index} onPress = {() =>onPressYear(index)}>
                    <View style={styles.dropDownContent}>
                        <View style={styles.content1}>
                                <Text style={styles.nameText}>{item.month}</Text>
                        </View>          
                    </View>
                </TouchableWithoutFeedback>
            )
        })
        return list;
    }

    const renderDrop = () =>{
        if(mY){
            return renderDrop1();
        }
        return renderDrop0();
    }

    return(
        <View style={styles.larger}>
            <TouchableWithoutFeedback onPress={onPressDrop}>
                <View style= {styles.container}>
                    <Text style={styles.text}>{title}</Text>
                </View>
            </TouchableWithoutFeedback>
            <View style={styles.drBorder}>
                {renderDrop()}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    larger:{
        borderWidth:1.2,
        marginTop:rel("H",2)
    },
    container:{
        height:rel("H",20),
        width:rel("W",100),
        backgroundColor:"rgba(0, 0, 0, 0.32)",
        alignItems:"center",
        marginBottom:rel("H",3),
        borderWidth:1
    },
    text:{
        fontSize : 15,
        fontWeight: "500",
        alignSelf:"center",
        color:"#3E3B3B",
    },
    dropDownContent:{
        backgroundColor:"white",
        width:rel("W",100),
        paddingHorizontal:rel("W",10),
        height:rel("H",20),
        borderWidth:1,
        marginTop:rel("H",3)
    },
    content1:{
        borderBottomWidth: 1.2,
        borderBottomColor: "gray",
        height:rel("H",20),
        alignItems:"center"
    },
    nameText:{
        fontSize:15,
        fontWeight: "500",
    },
})