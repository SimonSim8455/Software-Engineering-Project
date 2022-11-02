import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import Login from "../Login/login";
import SignUp from "../SignUp/signUp";
import Drawer from "../route/drawer"
import PushNotification from "react-native-push-notification";
import { useEffect } from "react";
import DummyUser from "../data/dummyUsers";
import FindNearCarPark from "../ReadCSV/findNearCarPark";
import DummyReview from "../data/dummyReviews";

const Stack = createStackNavigator();
const SignUpStack = () => {
    useEffect(()=>{
        DummyUser.InitUser();
        FindNearCarPark.initialize();
        createChannel();
        DummyReview.InitReview();
        console.log("sucess")
    },[])

    const createChannel = () =>{
        PushNotification.createChannel({
            channelId:"test-id",
            channelName:"test"
        })
    }
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login'>
                <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
                <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}}/>
                <Stack.Screen name="Drawer" component={Drawer} options={{headerShown:false}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default SignUpStack;