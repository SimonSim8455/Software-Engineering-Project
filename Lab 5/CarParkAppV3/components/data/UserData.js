import ChooseCarPark from "../data/chooseCarPark";
import FindNearCarPark from "../ReadCSV/findNearCarPark";

export default class UserData{
    // User Credentials :Email, FirstName, LastName , password
    // imageUri, 
    // history --> carPark / fare / time of creation
    // favorite --> carPark_id/ time of ce
    user_id = null;
    email = null;
    firstName = null;
    lastName = null;
    password = null;
    imageUri = require('../../assets/Pictures/UploadPhotoIcon.png'); //default image
    monthly_Fare = {};
    history = [];
    favorite = {};

    constructor(id,e,f,l,p,i,mf,favorite){
        this.user_id= id;
        this.email =e;
        this.firstName = f;
        this.lastName = l;
        this.password = p;
        this.imageUri = i;
        this.monthly_Fare =mf;
        this.favorite=favorite;
    }
    

    setMonthly_Fare(year,month,fare){
        if(this.monthly_Fare.hasOwnProperty(year)){
            this.monthly_Fare[year][month] = this.monthly_Fare[year][month] +fare;
        }
        else{
            this.monthly_Fare[year] = {};
            this.monthly_Fare[year][month]  = fare;
        }
    }

    addFavorite(cp){
        // just carpark name is sufficient
        // must also prompt when history has favorite list
        // need to fecth api everytime
        // fin carpark need add  caraprk name
        let ans = {
            name:cp.name,
            location: cp.location,
            feedBack : cp.feedBack,
            rating: cp.rating,
            time: 0,
            hourly_price :  cp.carParkFare,
            openHrs: cp.openHrs,
            position: cp.position,
            freeParking : cp.freeParking,
            distance:0,
        }
        this.favorite[cp.name] = ans;
    }

    rmvFavorite(name){
        if(this.favorite.hasOwnProperty(name)){
            delete this.favorite[name]
            return;
        }
    }

    addHistory(){
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
        this.history[this.history.length] = ans;
    }

    rmvHistory(name){
        for(let i=0;i<this.history.length;i++){
            if(this.history[i].name == name){
                delete this.history[i];
                return;
            }
        }
    }

    setRating(rating,index){
        this.history[index].rating = rating
    }
    setFeedBack(feedBack,index){
        this.history[index].feedBack = feedBack
    }

    setPassword(p){
        this.password = p;
    }

    setImageUri(i){
        this.imageUri = i;
    }

    setEmail(e){
        this.email = e;
    }
    setFirstName(f){
        this.firstName = f;
    }
    setLastName(L){
        this.lastName = L;
    }
}