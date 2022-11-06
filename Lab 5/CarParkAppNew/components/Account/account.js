import React, {useEffect, useState} from "react";
import { StyleSheet,View,Text,TouchableOpacity,Image,StatusBar } from "react-native";
import rel from "../share/RelativeRes"
import Chart from "./chart";
import PopUpTopSmall from "../share/popUpTopSmall"
import { TextInput } from "react-native-gesture-handler";
import DummyUser from "../data/dummyUsers";
import UserState from "../data/userState";
import ImagePicker from 'react-native-image-crop-picker';
import DropDownAcc from "./dropDownAcc";

const statusBarHeight = StatusBar.currentHeight;
export default function Account({navigation}){
    const drawerNavigation =navigation;
    const dropDownArrow = require("../../assets/Pictures/dropDownArrow2.png")
    const humanGrayIcon = require("../../assets/Pictures/humanGrayIcon.png")
    const bookGrayIcon = require("../../assets/Pictures/bookGrayIcon.png")
    const arrowRight = require("../../assets/Pictures/arrowRightIcon.png")

    const [dummyImg,setDummyImg] = useState(require('../../assets/Pictures/UploadPhotoIcon.png'));
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [email,setEmail] = useState("")
    const [change,setChange] = useState(false)
    const [initName,setInitName] = useState("");
    const [ch,setCh] = useState(0);
    const [histNum ,setHisNum] = useState(0);
    const [favNum,setFavNum] = useState(0);

    useEffect(()=>{
        if(UserState.user_index!=-1){
            setDummyImg(DummyUser.userArr[UserState.user_index].imageUri);
            setFirstName(DummyUser.userArr[UserState.user_index].firstName)
            setLastName(DummyUser.userArr[UserState.user_index].lastName)
            setEmail(DummyUser.userArr[UserState.user_index].email)
            setInitName(DummyUser.userArr[UserState.user_index].firstName + ' '+DummyUser.userArr[UserState.user_index].lastName )
            setCh(ch+1);
            setHisNum(DummyUser.userArr[UserState.user_index].history.length);
            let a = DummyUser.userArr[UserState.user_index].favorite;
            setFavNum(Object.keys(a).length);
        }
    },[UserState.user_index])

    useEffect(()=>{
        if(ch!=0 && ch !=1)
            setChange(true)
        if(ch==1){
            setCh(ch+1);
        }
    },[firstName,lastName,email,dummyImg])

    useEffect(()=>{
        if(change==true){
            styles.editTextBox.backgroundColor ="red"
        }
    },[change])

    const onPressFavor = () =>{
        drawerNavigation.navigate("FavoriteStack");
    }

    const onPressHistory = () =>{
        drawerNavigation.navigate("HistoryStack");
    }

    const picker = () =>{
        ImagePicker.openPicker({
            cropping: true
          }).then(image => {
            setDummyImg({uri:image.path});
          });
    }

    const onEdit = () =>{
        if(change){
            DummyUser.userArr[UserState.user_index].firstName = firstName;
            DummyUser.userArr[UserState.user_index].lastName = lastName;
            DummyUser.userArr[UserState.user_index].email = email;
            DummyUser.userArr[UserState.user_index].imageUri =dummyImg;
            UserState.setOnChange(!UserState.onChnage);
            setInitName(firstName+ ' '+ lastName);
            styles.editTextBox.backgroundColor ="#2e3fd7"
        }
        setChange(false)
    }

    const [currentYearIndex, setCurrentYearIndex] = useState(0);
    const [year, setYear] = useState(()=>{
        let ob = [];
        let total_y =3;
        let start =2020;
        for(let i= start;i<start+total_y;i++){
            ob[ob.length]={
                year:i,
                cur:0
            }
        }
        return ob;
    })

    const [dropYear, setDropYear] = useState(false)
    const pressYearDrop = () =>{
        setDropYear(!dropYear);
    }
    const onPressYear = (index) =>{
        setDropYear(!dropYear);
        setCurrentYearIndex(index);
    }
    const renderYear = () =>{
        if(dropYear == false){
            return (
                <TouchableOpacity style={styles.timeBox} onPress={pressYearDrop}>
                    <Text style={styles.timeBoxText}>{year[currentYearIndex].year}</Text>
                    <Image source={dropDownArrow} style={styles.dropDownArrow} />
                </TouchableOpacity>
            )
        }
        else{
            return (
                <DropDownAcc 
                    items={year} 
                    title={year[currentYearIndex].year.toString()} 
                    onPressYear={onPressYear} 
                    onPressDrop = {pressYearDrop}
                    mY ={0}
                 />
            )
        
        }
    }

    const [month, setMonth] = useState(()=>{
        let ob = [];
        ob[0]={month:"Jan-April"}
        ob[1]={month:"May-Aug"}
        ob[2]={month:"Sept-Dec"}
        return ob;
    })

    const [currentMonthIndex, setCurrentMonthIndex] = useState(0);
    const [dropMonth, setDropMonth] = useState(false)
    const pressMonthDrop = () =>{
        setDropMonth(!dropMonth);
    }
    const onPressMonth = (index) =>{
        setDropMonth(!dropMonth);
        setCurrentMonthIndex(index);
    }
    const renderMonth = () =>{
        if(dropMonth == false){
            return (
                <TouchableOpacity style={styles.timeBox} onPress={pressMonthDrop}>
                    <Text style={styles.timeBoxText}>{month[currentMonthIndex].month}</Text>
                    <Image source={dropDownArrow} style={styles.dropDownArrow} />
                </TouchableOpacity>
            )
        }
        else{
            return (
                <DropDownAcc 
                    items={month} 
                    title={month[currentMonthIndex].month} 
                    onPressYear={onPressMonth} 
                    onPressDrop = {pressMonthDrop}
                    mY ={1}
                 />
            )
        
        }
    }
    return(
        <View style={styles.container}>
            <View>
                <View style={styles.popUpTop}>
                    <PopUpTopSmall drawerNavigation={drawerNavigation} title={"My account"} />
                </View>

                <TouchableOpacity style={styles.content1} onPress={picker}>
                    <Image source={dummyImg} style ={styles.backgroundImg} blurRadius={10} />
                    <Image source={dummyImg} style ={styles.profileImg} />
                    <Text style={styles.titlText}>{initName}</Text>
                </TouchableOpacity>
            </View>


            <View style={styles.content2}>
                <View style={styles.des}>
                    <Text style={styles.firstNameText}>First Name:</Text>
                    <View style={styles.textBox} >
                    <TextInput
                        value={firstName}
                        style = {styles.inTextBoxText}
                        onChangeText= {(val)=>setFirstName(val)}
                    />
                    </View>
                </View>

                <View style={styles.des}>
                    <Text style={styles.firstNameText}>Last Name:</Text>
                    <View style={styles.textBox} >
                        <TextInput
                            value={lastName}
                            style = {styles.inTextBoxText}
                            onChangeText= {(val)=>setLastName(val)}
                        />
                    </View>
                </View>

                <View style={styles.des}>
                    <Text style={styles.firstNameText}>Email:</Text>
                    <View style={styles.textBox} >
                        <TextInput
                            value={email}
                            style = {styles.inTextBoxText}
                            onChangeText= {(val)=>setEmail(val)}
                        />
                    </View>
                </View>
                
                <View style={styles.content3}>
                    <View style={styles.content3_1}>
                        <View style={styles.button}>
                            {renderYear()}
                        </View>
                        <View style={styles.button2}>
                            {renderMonth()}
                        </View>
                    </View>
                    <View style={styles.content3_2}>
                        <TouchableOpacity style= {styles.editTextBox} onPress={onEdit}>
                            <Text style= {styles.editText}>Edit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.passwordText}>Change Password</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={styles.chart}>
                <Chart year={year[currentYearIndex].year} month = {month[currentMonthIndex].month}/>
            </View>

            <TouchableOpacity style = {styles.content4} onPress={onPressFavor}>
                <Image source={humanGrayIcon} style = {styles.humanIcon} />
                <Text style={styles.favoriteText}>My favorites</Text>
                <Text style={styles.numFavText}>{favNum}</Text>
                <Image source={arrowRight} style={styles.arrowRight} />
            </TouchableOpacity>

            <TouchableOpacity style = {[styles.content4]} onPress={onPressHistory}>
                <Image source={bookGrayIcon} style = {styles.humanIcon} />
                <Text style={styles.favoriteText}>My History</Text>
                <Text style={styles.numFavText}>{histNum}</Text>
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
        height:rel("H",90) - statusBarHeight,
        width:"100%"
    },
    content1:{
        width:"100%",
        height:rel("H",165),
        alignItems:"center",
        justifyContent:"center"
    },
    backgroundImg:{
        resizeMode:"cover",
        width:"100%",
        height:rel("H",164),
        position:"absolute",
    },
    profileImg:{
        width:rel("w",80),
        height:rel("H",100),
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
        fontWeight:"500",
        paddingVertical:0
    },
    content3:{
        marginTop:rel("H",10),
        flexDirection:"row"
    },
    content3_1:{
        alignItems:"center"
    },
    button:{
        flex:1,
        zIndex:2,
    },
    button2:{
        flex :1,
        zIndex:1,
        marginTop:rel("H",26),
        marginBottom:rel("H",20)
    },
    timeBox:{
        height:rel("h",20),
        width:rel("w",100),
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
        fontSize:15,
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
        marginTop:rel("H",2),
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
        fontWeight:"500",
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