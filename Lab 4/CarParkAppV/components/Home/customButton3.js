import React, {useState} from "react";
import { StyleSheet,View,Text } from "react-native";
import SelectList from 'react-native-dropdown-select-list'
import rel from "../share/RelativeRes";
import Fontisto   from 'react-native-vector-icons/Fontisto';


///abandone function

export default function CustomButton3({title, onPress}){
    const [selected, setSelected] = useState("");
    const [selectedLanguage, setSelectedLanguage] = useState("");
    const data = [
        {key:'1',value:'Hello'},
        {key:'2',value:'?'},
    ];

    return(
        <View style={styles.container}>
            <SelectList 
                setSelected={setSelected} 
                data={data} 
                onSelect={() => console.log("hello")} 
                search = {false}
                placeholder= {title}
                inputStyles={styles.text}
                boxStyles= {styles.boxStyles}
                arrowicon = {<Fontisto name="angle-down" size={20} style={styles.icon}/>}
                dropdownStyles = {styles.dropDown}
                dropdownTextStyles= {styles.dropDownText}
                
            />
        </View> 
    )
}

const styles = StyleSheet.create({
    container:{
        //flex:1
    },
    boxStyles:{
        height:rel("H",32),
        width:rel("W",296),
        backgroundColor:"rgba(255, 255, 255, 0.62)",
        alignItems:"center",
        zIndex:0,
        marginTop: rel("H",9),
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
    dropDown:{
        height:rel("H",100),
        width:rel("W",296),
        backgroundColor:"white",
    },
    dropDownText:{
        fontSize:16,
        borderBottomWidth:1,
        borderBottomColor:"red",
        paddingHorizontal: rel("W",16),
        paddingVertical: rel("H",5),
    }
})