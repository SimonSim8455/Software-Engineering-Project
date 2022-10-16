import React ,{useState} from "react";
import { StyleSheet ,View,Text,TouchableOpacity} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Octicons } from '@expo/vector-icons'; 
import rel from "../share/RelativeRes";

export default function ListOfCarPark({stackNavigation}){
    const [carParks,setCarParks] = useState([

        {name:"BlueSGCarPArk", location:"B2, near Lobby B", distance:10, time:1, key:0},
        {name:"JE Mall", location:"B2, near Lobby B", distance:11, time:1,key:1},
        {name:"J_Cube", location:"B2, near Lobby B", distance:12, time:1,key:2},
        {name:"LOL", location:"B2, near Lobby B", distance:13, time:1,key:3},
        {name:"J_Cube", location:"B2, near Lobby B", distance:12, time:1,key:4},
    ])

    let counter2 =1;
    
    const carParkPressedHandler = (name) =>{
        stackNavigation.navigate("CarParkDetails", {name})
    }
    const renderList = (Category,SortBy) =>{
        let list =carParks.map( (item) => {
            return(
                <TouchableOpacity key={item.key} onPress = {()=>carParkPressedHandler(item.name)}>
                    <View style={styles.content}>
                        <View style={styles.content1}>
                            <View style={styles.nAndName}>
                                <Text style={styles.number}>{(counter2++).toString()}</Text>
                                <Text style={styles.nameText}>{item.name}</Text>
                            </View>
                            
                                <View style={styles.arrow}>
                                    <Octicons name="arrow-right" size={24} style={styles.arrow}/>
                                </View>
                        </View>
                        <View style={styles.conten2}>
                            <Text style={styles.smallText}>{item.location}</Text>
                            <Text style={styles.smallText}>{item.distance} m ({item.time} min)</Text>
                        </View>              
                    </View>
                </TouchableOpacity>
            )
        })
        //console.log(list.length)
        return list
    }

    return(
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                {renderList()}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    content:{
        flexDirection:"column",
        marginLeft:rel("W",10),
        paddingBottom:rel("H",10),
        flex:1,
    },
    content1:{
        flexDirection:"row",
    },
    nAndName:{
        flex:9,
        flexDirection:"row"
    },
    number:{
        color:"#2196F3",
        fontSize:20
    },
    nameText:{
        color:"white",
        marginLeft:rel("W",15),
        fontSize:20,
    },
    arrow:{
        flex:1,
        color:"white"
    },
    conten2:{
        marginLeft:rel("W",25)
    },
    smallText:{
        fontSize:14,
        color:"#9AA0A6"
    }
})