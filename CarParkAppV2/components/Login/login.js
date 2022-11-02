import React, { useEffect ,useState} from "react";
import { StyleSheet, View, Text, Image, TextInput, TouchableWithoutFeedback,Keyboard} from "react-native";
import CustomButton from "../share/CustomButtonBlue"
import CheckError from "./checkLoginError"
import Lottie from 'lottie-react-native';

import { auth } from "../../firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


export default function Login({navigation}){
    const [pressedLogin,setPressedLogin] = useState(false);
    const [passed,setPassed] = useState(false);
    const [init,setInit] = useState(true);

    const [email,setEmail] = useState("")
    const [password,setPassword] =useState("")
    const [emailE,setEmailE] = useState("")
    const [passwordE,setPasswordE] =useState("")
    const [emailC,setEmailC] = useState(false)
    const [passwordC,setPasswordC] =useState(false)
    
    useEffect(() =>{
        setPressedLogin(false)
        if(passed){
            navigation.navigate("Drawer")
        }
    },[passed])
    
    useEffect(()=>{
        if(pressedLogin == true){
            setInit(false)

            const [a,b] = CheckError("email",email)
            setEmailC(a)
            setEmailE(b)

            const [g,h] = CheckError("password",password)
            setPasswordC(g)
            setPasswordE(h)
        }
        setPressedLogin(false)
    },[pressedLogin])

    useEffect(()=>{
        if(emailC&&passwordC){
            setPassed(true)
        }
    },[emailC,passwordC])
    
    const handlePressSU = () =>{
        navigation.navigate("SignUp");
    }

    const testFirebase = () =>{
        createUserWithEmailAndPassword(auth,email,password)
        .then(userCredentials=>{
            const user = userCredentials.user;
            console.log(user.email)
        })
        .catch(error => alert(error.message))
    }

    const renderInitErrorMsg = (credE,credC) =>{
        if(init == true && pressedLogin == false){
            return(
                <View style={styles.errorMsg}>
                    <Text style={styles.errorText}></Text>
                </View>
            )
        }
        else
        {
            if(credC){
                return(
                    <View style={styles.errorMsg}>
                        <Text style={styles.errorText}></Text>
                    </View>
                )
            }
            return(
                <View style={styles.errorMsg}>
                    <Text style={styles.errorText}>{credE}</Text>
                </View>
            )
        } 
    }

    return(
        <View style= {styles.container}>
            <TouchableWithoutFeedback onPress= {Keyboard.dismiss}>
                <View style = {styles.content}>
                    <Lottie style={styles.pic} source={require('../../assets/Pictures/EzPark.mp4.lottie (2).json')} autoPlay loop/>
                    <Text style = {styles.text}>Email address:</Text>
                    <TextInput 
                        style={styles.input}
                        onChangeText={(val)=>setEmail(val)}
                    />
                    {renderInitErrorMsg(emailE,emailC)}
                    <Text style ={styles.text}>Password:</Text>
                    <TextInput 
                        secureTextEntry={true}
                        style={styles.input}
                        onChangeText={(val)=>setPassword(val)}
                    />
                    {renderInitErrorMsg(passwordE,passwordC)}
                    <Text style ={{...styles.text, ...styles.forgetPassword}}>Forget Password</Text>
                    <CustomButton text="Login" onPress ={()=>setPressedLogin(true)}/>
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
        marginTop:30,
        marginBottom: 60,
        width: 300,
        height: 300,
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
    },
    errorMsg:{
        flexDirection:"column"
    },
    errorText:{
        fontSize:14,
        fontWeight:"500",
        color:"red"
    }
})