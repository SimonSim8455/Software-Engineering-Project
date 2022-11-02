import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeStack from './homeStack';
import Favorite from "../Favorites/favorite";
import Account from "../Account/account";
import History from "../History/history";
import SandBox from "../sandbox/sandBox"
import {DrawerContent} from "./drawerContent"
import { store } from '../../store';
import { Provider } from 'react-redux';
import HistoryDetails from '../History/historyDetails';
import HelpPage from '../HelpPage/helpPage';
import LandingPage from "../LandingPage/landingPage";

const Drawer = createDrawerNavigator();
const RootDrawerNavigator = () => {
    return (
        <Provider store={store}>
            <Drawer.Navigator initialRouteName='Home' drawerContent={(props) => <DrawerContent {...props} />} >
                <Drawer.Screen name="HomeStack" component={HomeStack} options={{headerShown: false}}/>
                <Drawer.Screen name="Account" component={Account} options={{headerShown: false}}/>
                <Drawer.Screen name="Favorite" component={Favorite} options={{headerShown: false}}/>
                <Drawer.Screen name="History" component={History} options={{headerShown: false}}/>
                <Drawer.Screen name="HistoryDetails" component={HistoryDetails} options={{headerShown: false}}/>
                <Drawer.Screen name="SandBox" component={SandBox} />
                <Drawer.Screen name="HelpPage" component={HelpPage} options={{headerShown: false}}/>
                <Drawer.Screen name="LandingPage" component={LandingPage} options={{headerShown: false}}/>
            </Drawer.Navigator>
        </Provider>
    );
}

export default RootDrawerNavigator;