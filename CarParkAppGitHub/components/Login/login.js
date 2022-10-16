import React from "react";
import { StyleSheet, View, Text, Image, TextInput, TouchableWithoutFeedback,Keyboard} from "react-native";
import CustomButton from "../share/CustomButtonBlue"


export default function Login({navigation}){
    const handlePressSU = () =>{
        navigation.navigate("SignUp");
    }

    const handlePressLG = () =>{
        navigation.navigate("Drawer");
    }

    return(
        <View style= {styles.container}>
            <TouchableWithoutFeedback onPress= {Keyboard.dismiss}>
                <View style = {styles.content}>
                    <Image source ={require('D:/STUDY MATERIAL/SC2006/SC2006 Project/CarParkApp/assets/Pictures/LoginPic2.png')} style ={styles.pic} />

                    <Text style = {styles.text}>Email address:</Text>
                    <TextInput 
                        style={styles.input}
                    />
                    <Text style ={styles.text}>Password:</Text>
                    <TextInput 
                        secureTextEntry={true}
                        style={styles.input}
                    />
                    <Text style ={{...styles.text, ...styles.forgetPassword}}>Forget Password</Text>
                    <CustomButton text="Login" onPress ={handlePressLG}/>
                    <Text style ={styles.line}></Text>
                    <CustomButton text="Sign Up" onPress ={handlePressSU}/>

                </View>
            </TouchableWithoutFeedback>  
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#0e044d",
        flex:1,
    },
    content:{
        flex :1, 
        padding :40,
        paddingTop: 1,
    },
    pic:{
        alignSelf:"center",
        marginTop:80,
        marginBottom: 15,
    },
    text:{
        fontSize: 15,
        color:"white"
    },
    forgetPassword:{
        alignSelf:"flex-end",
        marginBottom: 30,
        textDecorationLine: 'underline'
    },
    input:{
        borderBottomColor: "white",
        borderBottomWidth :1,
        marginBottom:10,
        paddingHorizontal: 8,
        paddingVertical: 1,
        color:"white"
    },
    line:{
        borderBottomWidth :1,
        borderBottomColor: "white",
        alignSelf:"center",
        width: 182,
        marginBottom:16,
    }
})