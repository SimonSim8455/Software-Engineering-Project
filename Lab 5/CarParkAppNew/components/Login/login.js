import React, { useEffect ,useState} from "react";
import { StyleSheet, View, Text, Image, TextInput, TouchableWithoutFeedback,Keyboard, Alert} from "react-native";
import CustomButton from "../share/CustomButtonBlue"
import CheckError from "./checkLoginError"
import { auth } from "../../API_KEY_SRC/firebase_config"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import UserState from "../data/userState";
import DummyUser from "../data/dummyUsers";
import Lottie from 'lottie-react-native';

export default function Login({navigation}){
    const [pressedLogin,setPressedLogin] = useState(false);
    const [passed,setPassed] = useState(false);
    const [init,setInit] = useState(true);

    const [email,setEmail] = useState("")
    const [password,setPassword] =useState("")
    const [emailC,setEmailC] = useState(false)
    const [passwordC,setPasswordC] =useState(false)
    
    useEffect(() =>{
        setPressedLogin(false)
        setPassed(false)
        setEmailC(false)
        setPasswordC(false)
        if(passed){
            navigation.navigate("Drawer")
        }
    },[passed])
    
    useEffect(()=>{
        if(pressedLogin == true){
            setInit(false)
            let [a,b]=  CheckError(email,password)
            setEmailC(a)
            setPasswordC(a)
            if(!a){
                Alert.alert("Invalid email or password, Please try again");
            }
            if(a){
                UserState.setUser_index(b);
            }
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
                    <View style={styles.errorMsg}>
                        <Text style={styles.errorText}></Text>
                    </View>
                    <Text style ={styles.text}>Password:</Text>
                    <TextInput 
                        secureTextEntry={true}
                        style={styles.input}
                        onChangeText={(val)=>setPassword(val)}
                    />
                    <View style={styles.errorMsg}>
                        <Text style={styles.errorText}></Text>
                    </View>
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
        marginTop:10,
        marginBottom: 50,
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
        color:"white",
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