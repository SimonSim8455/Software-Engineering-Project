import { StyleSheet, Image, TextInput ,Text,View, TouchableOpacity,TouchableWithoutFeedback} from "react-native";
import React from "react";
import { MaterialIcons , Ionicons,AntDesign} from '@expo/vector-icons'; 

export default function SignUpForms(){
    return(
        <View>
            <View style={styles.input}>
                <TextInput 
                    style={styles.inputText}
                    placeholder = "Email Address"
                />
                <MaterialIcons name="email" size={24} style={styles.icon}/>
            </View>

            <View style={styles.input}>
                <TextInput 
                    style={styles.inputText}
                    placeholder = "First name"
                />
                <Ionicons name="person-outline" size={24} style={styles.icon}/>
            </View>

            <View style={styles.input}>
                <TextInput 
                    style={styles.inputText}
                    placeholder = "Last name"
                />
                <Ionicons name="person-sharp" size={24} style={styles.icon}/>
            </View>

            <View style={styles.input}>
                <TextInput 
                    style={styles.inputText}
                    placeholder = "Password"
                />
                <AntDesign name="lock1" size={24} style={styles.icon}/>
            </View>

            <View style={styles.input}>
                <TextInput 
                    style={styles.inputText}
                    placeholder = "Comfirm password"
                />
                <AntDesign name="unlock" size={24} style={styles.icon}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        flexDirection:"row",
        borderBottomColor: "#111",
        borderBottomWidth :1,
        marginVertical:15,
    },
    inputText:{
        flex: 9
    },
    icon:{
        flex:1,
        color:"#555"
    },
})