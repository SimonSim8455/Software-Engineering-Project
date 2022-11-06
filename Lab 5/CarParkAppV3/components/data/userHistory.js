
import ChooseCarPark from "../data/chooseCarPark";
import FindNearCarPark from "../ReadCSV/findNearCarPark";

export default class UserHistory{
    static user_history = [];
    
    static addHistory(cp){
        let ans = {
            name: ChooseCarPark.name,
            location:ChooseCarPark.location,
            position:ChooseCarPark.position,
            perHour:ChooseCarPark.perHour,
            startTime: ChooseCarPark.startTime,
            endTime:ChooseCarPark.endTime,
            date:ChooseCarPark.date,
            duration:ChooseCarPark.duration,
            total_fare:ChooseCarPark.total_fare,
            feedBack:ChooseCarPark.feedBack,
            rating:ChooseCarPark.rating,
            favorite:ChooseCarPark.favorite,
            carParkFare:ChooseCarPark.carParkFare
        }
        UserHistory.user_history[UserHistory.user_history.length] =cp;
    }

    static setRating(rating,index){
        UserHistory.user_history[index].rating = rating;
    }
    static setFeedBack(feedBack,index){
        UserHistory.user_history[index].feedBack = feedBack;
    }
}