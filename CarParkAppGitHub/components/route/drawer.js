import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeStack from './homeStack';
import Favorite from "../Favorites/favorite";
import Account from "../Account/account";
import History from "../History/history";


const Drawer = createDrawerNavigator();
const RootDrawerNavigator = () => {
    return (
            <Drawer.Navigator initialRouteName='Home'>
                <Drawer.Screen name= "HomeStack" component={HomeStack} options={{headerShown: false}}/>
                <Drawer.Screen name="Account" component={Account} options={{headerShown: false}}/>
                <Drawer.Screen name="Favorite" component={Favorite} options={{headerShown: false}}/>
                <Drawer.Screen name="History" component={History} options={{headerShown: false}}/>
            </Drawer.Navigator>
    );
}

export default RootDrawerNavigator;