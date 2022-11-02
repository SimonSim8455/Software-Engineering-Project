import React ,{useRef, useState}from "react";
import { StyleSheet, Text, View , Image,TouchableWithoutFeedback,StatusBar} from "react-native";
import rel from "./RelativeRes"
import CustomButton from "../Home/customButton";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_API_KEY } from "../../API_KEY_SRC/googleAPIkey"
import MaterialIcons  from 'react-native-vector-icons/MaterialIcons';
import Ionicons  from 'react-native-vector-icons/Ionicons';
import OriDes from "../data/oriDes"


const statusBarHeight = StatusBar.currentHeight;
export default function PopUpTop({drawerNavigation, onSearch,title,item}){
    const [origin,setOri] = useState(null);
    const [destination,setDes] = useState(null);
    const renderText= (title) =>{
        return <Text style= {styles.text}>{title}</Text>
    }
    const drawer = () =>{
        drawerNavigation.openDrawer();
    }

    const setLocations = (details,lable) =>{
        if(lable == "Origin")  
            setOrigin(details);
        else
            setDestination(details);

    }

    const delayOnSearch = () =>{
        if(origin!=null)
            OriDes.setOriDetails(origin);
        if(destination!=null)
            OriDes.setDesDetails(destination);
        onSearch();
    }

    const setOrigin = (details) =>{
        if(details){
            setOri(details)
        }
    }

    const setDestination = (details) =>{
        if(details){
            setDes(details)
        }
    }

    const [originR,setOriginR] = useState(false);
    const [destR,setDestR] = useState(false);
    const [originValue,setOriginValue] = useState("Current Position");
    const [destinationValue,setDestinationValue] = useState(item.name);
    
    const handleChangeText= (text,lable) =>{
        if(lable == "Origin")
            setOriginValue(text);
        else
            setDestinationValue(text);
    }

    const renderSearhBar = (lable,title) =>{
        let text,renderOut,setRender;
        if(lable == "Origin"){
            text = originValue;
            renderOut = originR;
            setRender = setOriginR;
        }
        else{
            text = destinationValue;
            renderOut = destR;
            setRender = setDestR;
        }
        
        if(!renderOut){
            if(text != ''){
                return(
                    <View style={styles.searchBar2}>
                        <Text style= {styles.text2} numberOfLines={1}>{text}</Text>
                    </View>
                )
            }
            else{
                return(
                    <View style={styles.searchBar2}>
                        <Ionicons name="search" size={20} style={styles.icon2}/>
                        <Text style= {styles.text2}>{title}</Text>
                    </View>
                )
            }
        } 
        else{
            return(
             
                    <GooglePlacesAutocomplete
                        placeholder='Search'
                        fetchDetails
                        styles={{
                            textInput: styles.textInput,
                            row:styles.row,
                            description:styles.dropDownText,
                            loader:styles.loader,
                            container:styles.searchContainer
                        }}
                        onPress={(data, details) => {
                            handleChangeText(details.formatted_address,lable)
                            setLocations(details,lable)
                        }}
                        query={{
                            // key: GOOGLE_API_KEY,
                            language: 'en',
                        }}
                        suppressDefaultStyles={true}
                        enablePoweredByContainer={false}
                        textInputProps={{
                            value: lable =="Origin" ? originValue : destinationValue,
                            onChangeText: (text) => {handleChangeText(text,lable)}
                        }}
                    />
              
            )
        }
    }


    const icon1 = "../../assets/Pictures/searchIcon1.png"
    const icon2 = "../../assets/Pictures/locationIconRed.png"
    return(
            <View style={styles.container}>
                <View style = {styles.content}>
                    <View style={styles.content1}>
                        <TouchableWithoutFeedback onPress ={drawer}>
                            <MaterialIcons name= "menu" size={35} style = {styles.menuIcon}/>
                        </TouchableWithoutFeedback>
                        {renderText(title)}
                    </View>

                        <View style={styles.content2}>
                            <Image source={require(icon1)} style={styles.icon1}/>
                            <View style= {styles.searchBar1}>
                                <TouchableWithoutFeedback onPress={()=>setOriginR(!originR) }>
                                    {renderSearhBar("Origin","Choose start location")}
                                </TouchableWithoutFeedback>
                            </View>
                        </View>

                        <View style={styles.content3}>
                            <Image source={require(icon2)} style={styles.icon3}/>
                            <View style= {styles.searchBar1}>
                                <TouchableWithoutFeedback onPress={()=>setDestR(!destR)}>
                                    {renderSearhBar("Destination","Enter your destination")}
                                </TouchableWithoutFeedback>
                            </View>
                        </View>


                    <View style={styles.content4}>
                        <CustomButton title={"Search"} onPress={delayOnSearch} />
                    </View>

                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height:'100%',
        width:'100%',
        backgroundColor:"#0f0f2d",
    },
    content:{
        marginTop: rel("H",35) -statusBarHeight,
        marginLeft: rel("W",10)
    },
    content1:{
        flexDirection:"row",
        alignItems:"center",
    },
    menuIcon:{
        color: "white"
    },
    text:{
        marginLeft: rel("W",10),
        color: "white",
        fontWeight:"bold",
        fontSize:20,
    },
    content2:{
        flexDirection:"row",
        alignItems:"center",
        marginLeft: rel("W",22),
        marginTop: rel("H",5),
    },
    icon1:{
        width: rel("H",35),
        height: rel("W",35),
        resizeMode:"contain",
    },
    searchBar1:{
        top:rel("H",0),
        right:rel("W",20),
        width: rel("W", 255),
        position:"absolute",
    },
    searchBar2:{
        flexDirection:"row",
        backgroundColor:"#c6c6c6",
        borderWidth:1,
        borderRadius: 5,
        width: rel("W", 255),
        height:rel("H",29.3),
    },
    icon2:{
        color:"white",
        paddingLeft:rel("W",8),
        alignSelf:"center"
    },
    text2:{
        backgroundColor:"#c6c6c6",
        fontSize:15,
        marginLeft: rel("W",4),
        color:"black",
        fontWeight:"500",
        alignSelf:"center",
    },
    textInput:{
        fontSize:17,
        fontWeight:"600",
        marginLeft:rel("W",10),
        paddingVertical:0
    },
    content3:{
        marginLeft:rel("W",48),
        flexDirection:"row",
        marginTop:rel("H",5),
    },
    icon3:{
        width: rel("H",24),
        height: rel("W",24),
        marginRight: rel("W",5),
        resizeMode:"contain",
    },
    content4:{
        marginTop:rel("H",15),
        marginLeft:rel("W",75),
        height: rel("H",27),
        width: rel("W",61)
    },
    row:{
        flexDirection:"row",
        borderBottomColor:"black",
        borderBottomWidth:1,
        
    },
    dropDownText:{  //deszcription
        fontSize:15,
        marginLeft: rel("W",5),
        marginVertical:rel("H",7),
    },
    searchContainer:{
        backgroundColor:"white",
        borderWidth:1,
        borderRadius: 5,
        width: rel("W", 255),
        position:"absolute",
        zIndex:100,
    }
})