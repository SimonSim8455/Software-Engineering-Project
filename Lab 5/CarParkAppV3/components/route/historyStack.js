import { createStackNavigator } from "@react-navigation/stack";
import History from "../History/history";
import HisCarPark from "../History/hisCarPark";
import React from "react";

export default function HomeStack(){

    const Stack = createStackNavigator();
    return(
        <Stack.Navigator>
            <Stack.Screen name="History" component={History} options={{headerShown:false}} />
            <Stack.Screen name="HisCarPark" component={HisCarPark} options={{headerShown:false}}/>
        </Stack.Navigator>
    )

}