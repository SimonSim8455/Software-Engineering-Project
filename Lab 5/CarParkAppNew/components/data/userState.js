import PushNotification from 'react-native-push-notification';
import BackgroundTimer from 'react-native-background-timer';
import CarParkAPI from './carParkAPI';
export default class UserState{

    
    static user_index = -1;
    static onChnage = false;

    //locState
    // 0 :departure to carapark
    // 1: car park to destination
    // 2: destination to car park
    // 3: reached
    // default : 0
    static locState = 3;
    static reached = false;
    static favChg = false;
    static bckTimer;
    static onClickCarPark= false;
    static bufferCarPark = null;
    static onSuccessPop = false;

    static setSuccessPop(t){
        UserState.onSuccessPop = t;
    }

    static setOnClick(t){
        console.log(UserState.onClickCarPark)
        UserState.onClickCarPark =  t;
       if(UserState.bufferCarPark){
            console.log(UserState.bufferCarPark.name);
       }
    }

    static setBackAPI(t){
        if(t == true){
            console.log("Start")
            UserState.bckTimer = BackgroundTimer.setInterval(()=>{
                let a = CarParkAPI.compare();
                UserState.bufferCarPark = a;
                if(a!=null){
                    PushNotification.localNotification({
                        id:'143',
                        channelId:"test-id",
                        message: a.name + "is closer to destination, Do you wish to change car park?", // (required)
                        allowWhileIdle: false, 
                        repeatTime: 1, 
                    });
                }
            },60000)
        }
        else{
            console.log("End")
            BackgroundTimer.clearInterval(UserState.bckTimer);
        }
    }
    
    static setFavChg(f){
        UserState.favChg= f;
    }
    
    static setUser_index(num){
        UserState.user_index = num;
    }

    static setOnChange(b){
        UserState.onChnage = b;
    }

    static setLocState(s){
        UserState.locState = s;
    }
}