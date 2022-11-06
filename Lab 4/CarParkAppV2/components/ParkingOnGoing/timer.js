import BackgroundTimer from "react-native-background-timer";

export default function Timer(time){
    let hour = 0;
    let minute = 0;
    let second = 0;
    let millisecond = 0;

    if ((millisecond += 10) == 1000) {
        millisecond = 0;
        second++;
    
    if (second == 60) {
        second = 0;
        minute++;
    }}

    if (minute == 60) {
        minute = 0;
        hour++;
    }
}