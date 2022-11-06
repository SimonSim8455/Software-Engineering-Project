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
    

    addMonthly_Fare(year,month,fare){
        let monthStr
        switch(month){
            case 1:
                monthStr = "January"
                break;
            case 2:
                monthStr = "February"
                break;
            case 3:
                monthStr = "March"
                break;
            case 4:
                monthStr = "April"
                break;
            case 5:
                monthStr = "May"
                break;
            case 6:
                monthStr = "June"
                break;
            case 7:
                monthStr = "July"
                break;
            case 8:
                monthStr = "August"
                break;
            case 9:
                monthStr = "September"
                break;
            case 10:
                monthStr = "October"
                break;
            case 11:
                monthStr = "November"
                break;
            case 12:
                monthStr = "December"
                break;
        }
        let yearStr = year.toString();
        if(this.monthly_Fare.hasOwnProperty(yearStr)){
            this.monthly_Fare[yearStr][monthStr] = this.monthly_Fare[yearStr][monthStr] +fare;
        }
        else{
            this.monthly_Fare[yearStr] = {};
            this.monthly_Fare[yearStr][monthStr]  = fare;
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

            let tmp = {};
            let b  = Object.keys(this.favorite);
            for(let a =0;a<b.length;a++){
                if(b[a]!= name){
                    tmp[b[a]] = this.favorite[b[a]];
                }
            }
            this.favorite = tmp;
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
            duration:ChooseCarPark.duration.toFixed(2),
            total_fare:ChooseCarPark.total_fare,
            feedBack:ChooseCarPark.feedBack,
            rating:ChooseCarPark.rating,
            favorite:ChooseCarPark.favorite,
            carParkFare:ChooseCarPark.carParkFare
        }
        this.history[this.history.length] = ans;
    }

    rmvHistory(name){
        let tmp = [];
        let counter =0;
        for(let i=0;i<this.history.length;i++){
            if(this.history[i].name == name){
                continue
            }
            tmp[counter] = this.history[i];
            counter++;
        }
        this.history = tmp;
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