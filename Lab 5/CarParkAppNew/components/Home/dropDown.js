import React from "react";
import { StyleSheet , View,Text, TouchableWithoutFeedback,TouchableOpacity} from "react-native";
import rel from "../share/RelativeRes";
import AntDesign  from 'react-native-vector-icons/AntDesign';
import Fontisto   from 'react-native-vector-icons/Fontisto';


export default function DropDown({items , title, onPress, setCatHandler}){
    const renderTick = (sort) =>{
        if(sort==1){
            return <AntDesign name="check" size={20} style={styles.icon2}/>
        }
        else{
            return <View></View>
        }
    }
    
    const renderDrop = () =>{
        let list = items.map( (item,index) =>{
            return(
                <TouchableWithoutFeedback key={index} onPress = {() =>setCatHandler(title,index)}>
                    <View style={styles.dropDownContent}>
                        <View style={styles.content1}>
                            <Text style={styles.nameText}>{item.name}</Text>
                            {renderTick(item.sort)}
                        </View>          
                    </View>
                </TouchableWithoutFeedback>
            )
        })
        return list;
    }

    const renderDrop2 = () =>{
        let list = items.map( (item,index) =>{
            return(
                <TouchableWithoutFeedback key={index} onPress = {() =>setCatHandler(title,index)}>
                    <View style={styles.dropDownContent}>
                        <View style={styles.content1}>
                            <View style={styles.content2}>
                                <Text style={styles.nameText}>{item.name}</Text>
                                <Text style= {styles.text2}>{item.text}</Text>
                            </View>
                            {renderTick(item.sort)}
                        </View>          
                    </View>
                </TouchableWithoutFeedback>
            )
        })
        return list;
    }

    const render = () =>{
        if(title == "Category"){
            return renderDrop()
        } 
        else if( title =="Distance"){
            return renderDrop2();
        } 
        else if(title =="Fare"){
            return renderDrop();
        }
    }

    return(
        <View>
            <TouchableOpacity onPress={onPress}>
                <View style= {styles.container}>
                    <Text style={styles.text}>{title}</Text>
                    <Fontisto name="angle-down" size={20} style={styles.icon}/>
                </View>
            </TouchableOpacity>
            {render()}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height:rel("H",27),
        width:rel("W",296),
        backgroundColor:"rgba(255, 255, 255, 0.62)",
        alignItems:"center",
        marginTop:rel("H",9),
        flexDirection:"row"
    },
    text:{
        fontSize : 16,
        fontWeight: "400",
        paddingLeft:rel("W",34),
        color:"#3E3B3B",
        flex:9
    },
    icon:{
        flex:1,
        color:"white",
        paddingRight:rel("W",4)
    },
    dropDownContent:{
        backgroundColor:"white",
        width:rel("W",296),
        paddingHorizontal:rel("W",10)
    },
    content1:{
        borderBottomWidth: 1,
        borderBottomColor: "gray",
        flexDirection :"row",
        height:rel("H",50),
        alignItems:"center"
    },
    content2:{
        flexDirection :"column",
        flex:9,
    },
    nameText:{
        fontSize:16,
        flex:9,
        fontWeight:"500",
        color:"black"
    },
    icon2:{
        flex:1,
        color:"black"
    },
    text2:{
        fontSize:13,
        flex:9,
        fontWeight:"500",
        color:"black"
    }

})