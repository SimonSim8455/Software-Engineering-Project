import React, {useState} from "react";
import { Keyboard, StyleSheet, Image,Text,View, TouchableOpacity,TouchableWithoutFeedback} from "react-native";
import Rel from "../share/RelativeRes"
import CustomButton from "../share/CustomButtonBlue"
import SignUpForms from "./SignUpForms";

export default function SignUp({navigation}) {
    
    const [tick,setTick] = useState(false)
    const [tick2,setTick2] = useState(false);

    const presshandler = () =>{
        navigation.navigate("Drawer");
    }
    
    const checked = "../../assets/Pictures/checkBlue.png";
    const unchecked = "../../assets/Pictures/uncheck.png";
    
    const renderTicks = () =>{
        return (<Image 
                    style= {styles.checkBox}
                    source = { tick == true?
                                require(checked):
                                require(unchecked)
                            }
                />
        );
    }   

    const renderTicks2 = () =>{
        return (<Image 
                    style= {styles.checkBox}
                    source = { tick2 == true?
                                require(checked):
                                require(unchecked)
                            }
                />
        );
    }  

    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <View style={styles.content}>
                    <TouchableOpacity>
                        <Image source ={require('../../assets/Pictures/UploadPhotoIcon.png')} style ={styles.pic} />
                    </TouchableOpacity>
                   
                    <View style={styles.forms}>
                        <SignUpForms />
                    </View>
                
                    <View style= {styles.tick}>
                        <TouchableOpacity onPress = {() => setTick(!tick)}> 
                            {renderTicks()}
                        </TouchableOpacity>
                        <Text style={styles.tickText}>Allow the app to access your location.</Text>
                    </View>

                    <View style= {styles.tick}>
                        <TouchableOpacity onPress = {() => setTick2(!tick2)}> 
                            {renderTicks2()}
                        </TouchableOpacity>
                        <Text style={styles.tickText}>Allow the app to access your gallery.</Text>
                    </View>

                    <View style={styles.button}>
                        <CustomButton text ={"Register"} onPress ={presshandler} />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff"
    },
    content:{
        flex :1, 
        padding :40,
        paddingTop: 10,
    },
    pic:{
        width: Rel("W",125),
        height: Rel("H",116),
        resizeMode:"contain",
        alignSelf:"center"
    },
    forms:{
        height:Rel("H",312),
        weight:Rel("W",316)
    },
    icon:{
        flex:1,
        color:"#555"
    },
    tick:{
        flexDirection: "row",
        marginTop : 10,
        height: Rel("H",24)
    },
    tickText:{
        paddingLeft : 10,
    },
    button:{
        marginTop:Rel("H",25),
    },
    checkBox:{
        height:20,
        weight:20,
        resizeMode:"contain",

    }
})