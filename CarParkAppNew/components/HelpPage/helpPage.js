import React, { useEffect ,useState} from "react";
import { StyleSheet, View, Text, Image, TextInput, TouchableWithoutFeedback,Keyboard, Alert, TouchableOpacity} from "react-native";
import CustomButton from "../share/CustomButtonBlue"
//import CheckError from "./checkLoginError"
import { auth } from "../../API_KEY_SRC/firebase_config"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
//import UserState from "../data/userState";
import DummyUser from "../data/dummyUsers";
import Lottie from 'lottie-react-native';
import rel from "../share/RelativeRes";
import MaterialIcons  from 'react-native-vector-icons/MaterialIcons';

import FavorHistPopUp from "../share/favorHistPopUp";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';
import { List } from 'react-native-paper';
import PopUpTopSmall from "../share/popUpTopSmall"

const data = {
    aboutEzPark_head: "What is EzPark?",
    aboutEzPark_cont1: "EzPark is an android-based mobile application that helps users to find desired car-park and smoothen their car-parking experiences with a few helper features.",
    aboutEzPark_cont2: "We aim to ease car drivers in their journey planning and allow them to focus on their jobs without worrying about car-parking matters.",

    faq1_head: "How can I search for a car park?",
    faq1_cont1: "By using EzPark, users are able to set their start location and destination using the location searching functions powered by Google while our system will show the available car park locations in a radius of 0.5km from the intended destination on the map and in a list.",
    faq1_cont2: "The users can further sort the listing of car park locations results according to their preference parameters.",

    faq2_head: "What information can I get after I select a car park?",
    faq2_cont1: "After users select their preferred car-park location, EzPark will render the relevant details including past ratings and reviews of that car-park from our past users as reference.",
    
    faq3_head: "Any extra features do I get to aid my car-parking process?",
    faq3_cont1: "By confirming to start parking on the selected location, EzPark has a few bonus features to aid users in car-parking.",
    faq3_cont2: "\ti.    fare estimation calculator\n\tii.   timer reminder\n\tiii.  notes taking section with photo uploading section\n",
    faq3_cont3: "EzPark also directs users to an external application (Google Maps) for navigation purposes.",

    faq4_head: "Am I able to give feedback for the car park I visited?",
    faq4_cont1: "After the user ends their parking session, they are able to provide ratings and reviews for that car park location for future users' references.",

    faq5_head: "Why do I need to register an account?",
    faq5_cont1: "Being EzPark registered users, they are able to trace their car-park history and save their favorite car-park in the application.",

    term1_head: "What is EzPark licensed under?",
    term1_cont1: "EzPark is licensed under the BSD 3-Clause License.\n\nMore information regarding the license as below:\n",
    term1_cont2: "BSD 3-Clause License\nCopyright 2022 perfectsqr123\n",
    term1_cont3: "Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:\n",
    term1_cont4: "1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.\n",
    term1_cont5: "2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.\n",
    term1_cont6: "3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.\n",
    term1_cont7: "THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS \"AS IS\" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR",
    term1_cont8: "PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT",
    term1_cont9: "OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING",
    term1_cont10: "IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.",

    term2_head: "What are the terms and conditions using EzPark?",
    term2_cont1: "Upon register a new account, user is agreed and consent to the following:\n",
    term2_cont2: "\t1.   EzPark shall store user's personal information upon receiving updates by the user. The personal information shall only be used for the functionalities within this application, which includes but not limited to displaying actual name in reviews section.\n",
    term2_cont3: "\t2.   EzPark shall be allowed to access the user's device location to track user current location for the display of the in-app map.\n",
    term2_cont4: "\t3.   EzPark shall be allowed to access the user’s camera to take and upload photos onto the note-taking section.\n",
    term2_cont5: "\t4.   EzPark shall discard all current location data, photo data and text input in the note-taking section once the user ends the current parking process and exits the application.\n",
    term2_cont6: "\t5.   EzPark shall not disclose user data to a third party.\n",

    contact1_head: "What if I lost my account password?",
    contact1_cont1: "Users can visit the “ForgetPassword” page to reset password after email authentication.",

    contact2_head: "For more enquiries, please contact:",
    contact2_cont1: "Email: query@ezpark_development_team.sg",
    contact2_cont2: "Phone: +65-8888 8888",
}

export default function HelpPage({navigation}){

    const [expanded, setExpanded] = React.useState(true);
  
    const handlePress = () => setExpanded(!expanded);
    const drawerNavigation = navigation;
    const navigationBack = useNavigation();
    const drawer = () =>{
        drawerNavigation.openDrawer();
    }

    return(
        <View style= {styles.container}>
            <View style={styles.container2}>
                <View style = {styles.content}>
                    <View style={styles.content1}>
                        <MaterialIcons name= "menu" size={35} style = {styles.menuIcon} onPress ={drawer}/>
                        <Text style= {styles.text}>Help</Text>
                    </View>
                </View>
            </View>
            <ScrollView>
                <List.Section title="Learn More About EzPark">
                    <List.Accordion
                        title="About EzPark"
                        left={props => <List.Icon {...props} icon="alert-circle" />}>
                            <ScrollView  style={styles.contentText}>
                                <Text style={styles.header}>{data.aboutEzPark_head}</Text>
                                <Text style={styles.subheader}>{data.aboutEzPark_cont1}</Text>
                                <Text style={styles.between}></Text>
                                <Text style={styles.subheader}>{data.aboutEzPark_cont2}</Text>
                            </ScrollView >
                    </List.Accordion>

                    <List.Accordion
                        title="FAQ"
                        left={props => <List.Icon {...props} icon="chat-question" />}>
                            <ScrollView  style={styles.contentText}>
                                <Text style={styles.header}>{data.faq1_head}</Text>
                                <Text style={styles.subheader}>{data.faq1_cont1}</Text>
                                <Text style={styles.between}></Text>
                                <Text style={styles.subheader}>{data.faq1_cont2}</Text>
                            </ScrollView >

                            <ScrollView  style={styles.contentText}>
                                <Text style={styles.header}>{data.faq2_head}</Text>
                                <Text style={styles.subheader}>{data.faq2_cont1}</Text>
                            </ScrollView >

                            <ScrollView  style={styles.contentText}>
                                <Text style={styles.header}>{data.faq3_head}</Text>
                                <Text style={styles.subheader}>{data.faq3_cont1}</Text>
                                <Text style={styles.between}></Text>
                                <Text style={styles.subheader}>{data.faq3_cont2}</Text>
                                <Text style={styles.between}></Text>
                                <Text style={styles.subheader}>{data.faq3_cont3}</Text>
                            </ScrollView >

                            <ScrollView  style={styles.contentText}>
                                <Text style={styles.header}>{data.faq4_head}</Text>
                                <Text style={styles.subheader}>{data.faq4_cont1}</Text>
                            </ScrollView >

                            <ScrollView  style={styles.contentText}>
                                <Text style={styles.header}>{data.faq5_head}</Text>
                                <Text style={styles.subheader}>{data.faq5_cont1}</Text>
                            </ScrollView >
                    </List.Accordion>

                    <List.Accordion
                        title="Terms and Conditions"
                        left={props => <List.Icon {...props} icon="file-check" />}
                        onPress={handlePress}>
                            <ScrollView  style={styles.contentText}>
                                <Text style={styles.header}>{data.term1_head}</Text>
                                <Text style={styles.subheader}>{data.term1_cont1}</Text>
                                <View style={styles.lisence}>
                                    <Text style={styles.subheader}>{data.term1_cont2}</Text>
                                    <Text style={styles.subheader}>{data.term1_cont3}</Text>
                                    <Text style={styles.subheader}>{data.term1_cont4}</Text>
                                    <Text style={styles.subheader}>{data.term1_cont5}</Text>
                                    <Text style={styles.subheader}>{data.term1_cont6}</Text>
                                    <Text style={styles.subheader}>{data.term1_cont7}</Text>
                                    <Text style={styles.subheader}>{data.term1_cont8}</Text>
                                    <Text style={styles.subheader}>{data.term1_cont9}</Text>
                                    <Text style={styles.subheader}>{data.term1_cont10}</Text>
                                </View>
                            </ScrollView >

                            <ScrollView  style={styles.contentText}>
                                <Text style={styles.header}>{data.term2_head}</Text>
                                <Text style={styles.subheader}>{data.term2_cont1}</Text>
                                <Text style={styles.subheader}>{data.term2_cont2}</Text>
                                <Text style={styles.subheader}>{data.term2_cont3}</Text>
                                <Text style={styles.subheader}>{data.term2_cont4}</Text>
                                <Text style={styles.subheader}>{data.term2_cont5}</Text>
                                <Text style={styles.subheader}>{data.term2_cont6}</Text>
                            </ScrollView >
                    </List.Accordion>

                    <List.Accordion
                        title="Contact"
                        left={props => <List.Icon {...props} icon="phone-classic" />}>
                            <ScrollView  style={styles.contentText}>
                                <Text style={styles.header}>{data.contact1_head}</Text>
                                <Text style={styles.subheader}>{data.contact1_cont1}</Text>
                            </ScrollView >

                            <ScrollView  style={styles.contentText}>
                                <Text style={styles.header}>{data.contact2_head}</Text>
                                <Text style={styles.subheader}>{data.contact2_cont1}</Text>
                                <Text style={styles.subheader}>{data.contact2_cont2}</Text>
                            </ScrollView >
                    </List.Accordion>
                </List.Section>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#ffffff",
        flex:1,
    },
    container1:{
        backgroundColor:"white",
        flex:1
    },
    popUpTop:{
        height:rel("H",238)
    },
    container2:{
        height: 80,
        width:'100%',
        backgroundColor:"#0f0f2d"
    },
    content:{
        marginTop: rel("H",30),
        marginLeft: rel("W",10)
    },
    content1:{
        flexDirection:"row",
        alignItems:"center"
    },
    menuIcon:{
        color: "white"
    },
    text:{
        marginLeft: rel("W",10),
        color: "white",
        fontSize:20,
    },
    contentText: {
        marginLeft: -40,
        marginTop: 20,
        marginBottom: 15,
        marginRight: 20,
    },
    header:{
        fontSize: 20,
        fontWeight: "500",
        paddingBottom: 5,
    },
    subheader: {
        fontSize: 15,
        fontWeight: "300",
    },
    between: {
        fontSize: 9,
    },
    lisence: {
        borderColor: "#a3a3a3",
        borderWidth: 1,
        padding: 8,
    },
    sectionHeader: {
        fontSize: 20
    }

})