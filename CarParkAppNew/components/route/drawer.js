import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeStack from './homeStack';
import Favorite from "../Favorites/favorite";
import Account from "../Account/account";
import SandBox from "../sandbox/sandBox"
import HistoryStack from "./historyStack";
import {DrawerContent} from "./drawerContent"
import FavoriteStack from "./favoriteStack";

const Drawer = createDrawerNavigator();
const RootDrawerNavigator = () => {
    return (
            <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />} >
                <Drawer.Screen name= "HomeStack" component={HomeStack} options={{headerShown: false}}/>
                <Drawer.Screen name="Account" component={Account} options={{headerShown: false}}/>
                <Drawer.Screen name="FavoriteStack" component={FavoriteStack} options={{headerShown: false}}/>
                <Drawer.Screen name="HistoryStack" component={HistoryStack} options={{headerShown: false}}/>
                <Drawer.Screen name="SandBox" component={SandBox} />
            </Drawer.Navigator>
    );
}

export default RootDrawerNavigator;