import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import Login from "../Login/login";
import SignUp from "../SignUp/signUp";
import Drawer from "../route/drawer"
import SignUpHeader from "../SignUp/signUpHeader";

const screensOptions = (screenName,navigation) => {
    let options = {
        SignUp:{
                //headerTitle takes in function describing the heade
            header: () => <SignUpHeader navigation={navigation} title ={"Sign Up"}/>,
        },
    }   
    return options[screenName];
}

const Stack = createStackNavigator();
const SignUpStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
                <Stack.Screen name="SignUp" component={SignUp} options={({navigation}) => screensOptions("SignUp",navigation) }/>
                <Stack.Screen name="Drawer" component={Drawer} options={{headerShown:false}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default SignUpStack;