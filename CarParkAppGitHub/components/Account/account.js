import React, {useState} from "react";
import { StyleSheet,View,Text,TouchableOpacity,Image } from "react-native";
import rel from "../share/RelativeRes"
import PopUpTopSmall from "../share/popUpTopSmall"
import Chart from "./chart";

export default function Account({navigation}){
    const drawerNavigation =navigation;
    const dummyImg = require("D:/STUDY MATERIAL/SC2006/SC2006 Project/CarParkApp/assets/Pictures/dummyMilkPic.png")
    const dropDownArrow = require("D:/STUDY MATERIAL/SC2006/SC2006 Project/CarParkApp/assets/Pictures/dropDownArrow2.png")
    const humanGrayIcon = require("D:/STUDY MATERIAL/SC2006/SC2006 Project/CarParkApp/assets/Pictures/humanGrayIcon.png")
    const bookGrayIcon = require("D:/STUDY MATERIAL/SC2006/SC2006 Project/CarParkApp/assets/Pictures/bookGrayIcon.png")
    const arrowRight = require("D:/STUDY MATERIAL/SC2006/SC2006 Project/CarParkApp/assets/Pictures/arrowRightIcon.png")

    const onPressFavor = () =>{
        drawerNavigation.navigate("Favorite");
    }

    const onPressHistory = () =>{
        drawerNavigation.navigate("History");
    }

    return(
        <View style={styles.container}>
            <View style={styles.popUpTop}>
                <PopUpTopSmall drawerNavigation={drawerNavigation} title={"My account"} />
            </View>

            <View style={styles.content1}>
                <Image source={dummyImg} style ={styles.backgroundImg} blurRadius={10} />
                <Image source={dummyImg} style ={styles.profileImg} />
                <Text style={styles.titlText}>Milk Shake</Text>
            </View>

            <View style={styles.content2}>
                <View style={styles.des}>
                    <Text style={styles.firstNameText}>First Name:</Text>
                    <View style={styles.textBox} >
                        <Text style={styles.inTextBoxText}>Shaky</Text>
                    </View>
                </View>

                <View style={styles.des}>
                    <Text style={styles.firstNameText}>Last Name:</Text>
                    <View style={styles.textBox} >
                        <Text style={styles.inTextBoxText}>Milky</Text>
                    </View>
                </View>

                <View style={styles.des}>
                    <Text style={styles.firstNameText}>Email:</Text>
                    <View style={styles.textBox} >
                        <Text style={styles.inTextBoxText}>MISLK@hotmail.com</Text>
                    </View>
                </View>
                
                <View style={styles.content3}>
                    <View style={styles.content3_1}>
                        <TouchableOpacity style={styles.timeBox}>
                            <Text style={styles.timeBoxText}>2002</Text>
                            <Image source={dropDownArrow} style={styles.dropDownArrow} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.timeBox}>
                            <Text style={styles.timeBoxText}>May-June</Text>
                            <Image source={dropDownArrow} style={styles.dropDownArrow} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.content3_2}>
                        <TouchableOpacity style= {styles.editTextBox}>
                            <Text style= {styles.editText}>Edit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.passwordText}>Change Password</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={styles.chart}>
                <Chart />
            </View>

            <TouchableOpacity style = {styles.content4} onPress={onPressFavor}>
                <Image source={humanGrayIcon} style = {styles.humanIcon} />
                <Text style={styles.favoriteText}>My favorites</Text>
                <Text style={styles.numFavText}>100</Text>
                <Image source={arrowRight} style={styles.arrowRight} />
            </TouchableOpacity>

            <TouchableOpacity style = {[styles.content4]} onPress={onPressHistory}>
                <Image source={bookGrayIcon} style = {styles.humanIcon} />
                <Text style={styles.favoriteText}>My History</Text>
                <Text style={styles.numFavText}>100</Text>
                <Image source={arrowRight} style={styles.arrowRight} />
            </TouchableOpacity>


        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#ffffff"
    },
    popUpTop:{
        height:rel("H",80),
        width:"100%"
    },
    content1:{
        width:"100%",
        height:rel("H",158),
        alignItems:"center",
        justifyContent:"center"
    },
    backgroundImg:{
        resizeMode:"cover",
        width:"100%",
        height:rel("H",158),
        position:"absolute",
    },
    profileImg:{
        width:rel("w",110),
        height:rel("H",99),
        resizeMode:"cover",
        borderRadius:150/2,
    },
    titlText:{
        color:"white",
        fontSize:16,
        marginTop:rel("H",5),
        fontWeight:"600"
    },
    content2:{
        marginHorizontal:rel("H",19),
        marginTop:rel("H",12),
    },
    des:{
        flexDirection:"row",
        width:"100%",
        marginTop:rel("H",12),
    },
    firstNameText:{
        fontSize:14,
        fontWeight:"500",
        width:rel("W",70)
    },
    textBox:{
        borderRadius:3,
        width:rel("w",234),
        height:rel("H",26),
        marginLeft:rel("W",13),
        justifyContent:"center",
        alignItems:"center",
        flex: 1,
        backgroundColor:'#dddddd',
        shadowColor:"black",
        shadowOpacity:10,
        shadowRadius:1,
        elevation:3,
    },
    inTextBoxText:{
        fontSize:15,
        fontWeight:"500"
    },
    content3:{
        marginTop:rel("H",24),
        flexDirection:"row"
    },
    content3_1:{
        alignItems:"center"
    },
    timeBox:{
        height:rel("h",17),
        width:rel("w",88),
        flexDirection:"row",
        borderRadius:6,
        borderWidth:1,
        backgroundColor:'#ededed',
        shadowColor:"black",
        shadowOpacity:10,
        shadowRadius:1,
        elevation:3,
        marginTop:rel("H",5),
        borderColor:"#8996a2",
    },
    timeBoxText:{
        fontSize:12,
        fontWeight:"500",
        left:rel("W",12),
        top:0
    },
    dropDownArrow:{
        height:rel("H",13),
        width:rel("W",24),
        resizeMode:"contain",
        position:"absolute",
        right:rel("W",0),
    },
    content3_2:{
        position:"absolute",
        right:0,
        alignItems:"center"
    },
    editTextBox:{
        height:25,
        width:88,
        borderRadius:10,
        backgroundColor:"#2e3fd7",
    },
    editText:{
        color:"#ffffff",
        fontSize:20,
        fontWeight:"700",
        alignSelf:"center"
    },
    passwordText:{
        fontSize:14,
        fontWeight:"400",
        textDecorationLine:"underline",
        marginTop:rel("H",4)
    },
    chart:{
        width:"100%",
        height:rel("H",200),
        marginTop:rel("H",12),
        marginBottom:rel("H",35),
    },
    content4:{
        flexDirection:"row",
        alignItems:"center",
        marginLeft:rel("W",10),
        height:rel("H",30)
    },
    humanIcon:{
        height:rel("H",50),
        width:rel("W",50),
        resizeMode:"contain"
    },
    arrowRight:{
        height:rel("H",40),
        width:rel("W",40),
        resizeMode:"contain",
        position:"absolute",
        right:rel("W",5)
    },
    favoriteText:{
        fontSize:16,
        fontWeight:"500"
    },
    numFavText:{
        fontSize:16,
        fontWeight:"400",
        position:"absolute",
        right:rel("W",50)
    }
})