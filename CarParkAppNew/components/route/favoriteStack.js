import { createStackNavigator } from "@react-navigation/stack";
import Favorite from "../Favorites/favorite";
import FavCarParkDetails from "../Favorites/favCarParkDetails";
import React from "react";

export default function HomeStack(){

    const Stack = createStackNavigator();
    return(
        <Stack.Navigator>
            <Stack.Screen name="Favorite" component={Favorite} options={{headerShown:false}} />
            <Stack.Screen name="FavCarParkDetails" component={FavCarParkDetails} options={{headerShown:false}}/>
        </Stack.Navigator>
    )

}