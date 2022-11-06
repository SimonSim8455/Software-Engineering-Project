import { createStackNavigator } from "@react-navigation/stack";
import CarParkDetails from "../CarParkDetails/CarParkDetails";
import StartParking from "../startParking/StartParking";
import ParkingOnGoing from "../ParkingOnGoing/parkingOnGoing";
import Comments from "../CommentsRatings/comments";
import Home from "../Home/home";
import React from "react";
import { store } from '../../store';
import { Provider } from 'react-redux';
import LandingPage from "../LandingPage/landingPage";

export default function HomeStack(){

    const Stack = createStackNavigator();
    return(
        <Provider store={store}>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
                <Stack.Screen name="CarParkDetails" component={CarParkDetails} options={{headerShown:false}}/>
                <Stack.Screen name="StartParking" component={StartParking} options={{headerShown:false}} />
                <Stack.Screen name="ParkingOnGoing" component={ParkingOnGoing} options={{headerShown:false}} />
                <Stack.Screen name="Comments" component={Comments} options={{headerShown:false}} />
            </Stack.Navigator>
        </Provider>
    )

}