
export default class UserState{

    
    static user_index = -1;
    static onChnage = false;

    //locState
    // 0 :departure to car park
    // 1: car park to destination
    // 2: destination to car park
    // 3: reached
    // default : 0
    static locState = 0;
    static reached = false;
    
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