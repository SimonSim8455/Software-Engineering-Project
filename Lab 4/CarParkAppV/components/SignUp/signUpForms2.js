import { StyleSheet, Image, TextInput ,Text,View, Button} from "react-native";
import React, { useEffect, useState } from "react";
import rel from "../share/RelativeRes";
import CheckError from "./checkSignUpError";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign  from 'react-native-vector-icons/AntDesign';

export default function SignUpForms({isPressed,callBack}){
    const [email,setEmail] = useState("")
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [password,setPassword] = useState("")
    const [comfirmPassword,setComfirmPassword] = useState("")

    const [emailE,setEmailE] = useState("")
    const [firstNameE,setFirstNameE] = useState("")
    const [lastNameE,setLastNameE] = useState("")
    const [passwordE,setPasswordE] = useState("")
    const [comfirmPasswordE,setComfirmPasswordE] = useState("")

    const [emailC,setEmailC] = useState(false)
    const [firstNameC,setFirstNameC] = useState(false)
    const [lastNameC,setLastNameC] = useState(false)
    const [passwordC,setPasswordC] = useState(false)
    const [comfirmPasswordC,setComfirmPasswordC] = useState(false)
    const [init, setInit] = useState(true);

    useEffect( () =>{
        if(isPressed == true){
            setInit(false)
            const [a,b] = CheckError("email",email)
            setEmailC(a)
            setEmailE(b)

            const [c,d] = CheckError("firstName",firstName)
            setFirstNameC(c)
            setFirstNameE(d)

            const [e,f] = CheckError("lastName",lastName)
            setLastNameC(e)
            setLastNameE(f)

            const [g,h] = CheckError("password",password)
            setPasswordC(g)
            setPasswordE(h)

            const [i,j] = CheckError("comfirmPassword",[password,comfirmPassword])
            setComfirmPasswordC(i)
            setComfirmPasswordE(j)
        };
    },[isPressed])


    useEffect(()=>{
        if(emailC&&firstNameC&&lastNameC&&passwordC&&comfirmPasswordC){
            callBack();
        }
    },[emailC,firstNameC ,lastNameC ,passwordC , comfirmPasswordC])

    const renderInitErrorMsg = (credE,credC) =>{
        if(init == true && isPressed == false){
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
        <View style={{flex:1}}>
            <View style={styles.input}>
                <TextInput 
                    style={styles.inputText}
                    placeholder = "Email Address"
                    onChangeText={(val)=>setEmail(val)}
                />
                <MaterialIcons name="email" size={24} style={styles.icon}/>
            </View>
            {renderInitErrorMsg(emailE,emailC)}

            <View style={styles.input}>
                <TextInput 
                    style={styles.inputText}
                    placeholder = "First name"
                    onChangeText={(val)=>setFirstName(val)}
                />
                <Ionicons name="person-outline" size={24} style={styles.icon}/>
            </View>
            {renderInitErrorMsg(firstNameE,firstNameC)}

            <View style={styles.input}>
                <TextInput 
                    style={styles.inputText}
                    placeholder = "Last name"
                    onChangeText={(val)=>setLastName(val)}
                />
                <Ionicons name="person-sharp" size={24} style={styles.icon}/>
            </View>
            {renderInitErrorMsg(lastNameE, lastNameC)}

            <View style={styles.input}>
                <TextInput 
                    style={styles.inputText}
                    placeholder = "Password"
                    onChangeText={(val)=>setPassword(val)}
                    secureTextEntry={true}
                />
                <AntDesign name="lock1" size={24} style={styles.icon}/>
            </View>
            {renderInitErrorMsg(passwordE, passwordC)}

            <View style={styles.input}>
                <TextInput 
                    style={styles.inputText}
                    placeholder = "Comfirm password"
                    onChangeText={(val)=>setComfirmPassword(val)}
                    secureTextEntry={true}
                />
                <AntDesign name="unlock" size={24} style={styles.icon}/>
            </View>
            {renderInitErrorMsg(comfirmPasswordE, comfirmPasswordC)}

            
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        flexDirection:"row",
        marginTop:rel("H",10),
        borderBottomColor: "#111",
        borderBottomWidth :1,
    },
    inputText:{
        paddingBottom: 0,
        flex:9
    },
    icon:{
        flex:1,
        color:"#555"
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