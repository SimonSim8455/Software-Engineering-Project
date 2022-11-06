

export default class ChooseCarPark{
    static key = -1;
    static duration = 0;
    static total_fare = 0;
    static perHour = 1;
    static imageURI =null;
    static notes = null;
    static alertTime = 0;
    static startTime =0;
    static endTime =0;
    static carParkFare = -1;
    static date= null;
    static feedBack = "";
    static rating = 0;
    static favorite = false;
    static position = null;
    static location =null;
    static name = null;
    static distance = 0;
    static freeParking = "NO";
    static openHrs = null;

    static setOpenHrs(o){
        ChooseCarPark.openHrs =o;
    }

    static setFreeParking(s){
        ChooseCarPark.freeParking = s
    }

    static setDistance(d){
        ChooseCarPark.distance =d
    }

    static setName(n){
        ChooseCarPark.name = n;
    }
    static setLocation(l){
        ChooseCarPark.location = l;
    }
    static clear(){
        ChooseCarPark.name = null;
        ChooseCarPark.key = -1;
        ChooseCarPark.position= null;
        ChooseCarPark.duration = 0;
        ChooseCarPark.total_fare = 0;
        ChooseCarPark.perHour = 1;
        ChooseCarPark.imageURI =null;
        ChooseCarPark.notes = null;
        ChooseCarPark.alertTime = 0;
        ChooseCarPark.startTime =0;
        ChooseCarPark.endTime =0;
        ChooseCarPark.carParkFare = -1;
        ChooseCarPark.date= null;
        ChooseCarPark.feedBack = "";
        ChooseCarPark.rating = 0;
        ChooseCarPark.favorite = false;
        ChooseCarPark.location = null;
        ChooseCarPark.distance = 0;
        ChooseCarPark.freeParking = "NO"
        ChooseCarPark.openHrs = null;
    }

    static init(cp){
        ChooseCarPark.name = cp.name;
        ChooseCarPark.key = 1;
        ChooseCarPark.position= cp.position;
        ChooseCarPark.duration = 0;
        ChooseCarPark.total_fare = 0;
        ChooseCarPark.perHour = 1;
        ChooseCarPark.imageURI =null;
        ChooseCarPark.notes = null;
        ChooseCarPark.alertTime = 0;
        ChooseCarPark.startTime =0;
        ChooseCarPark.endTime =0;
        ChooseCarPark.carParkFare = cp.hourly_price;
        ChooseCarPark.date= null;
        ChooseCarPark.feedBack = "";
        ChooseCarPark.rating = 0;
        ChooseCarPark.favorite = false;
        ChooseCarPark.location = cp.location;
        ChooseCarPark.distance = cp.distance;
        ChooseCarPark.freeParking = cp.freeParking;
        ChooseCarPark.openHrs = cp.openHrs;
    }

    static setPosition(p){
        ChooseCarPark.position = p;
    }

    static setFavorite(f){
        ChooseCarPark.favorite = f;
    }

    static setRating(r){
        ChooseCarPark.rating = r;
    }
    static setFeedBack(fd){
        ChooseCarPark.feedBack = fd
    }

    static setDate(d){
        ChooseCarPark.date = d;
    }

    static setCarParkFare(t){
        ChooseCarPark.carParkFare = t;
    }

    static setKey(key){
        ChooseCarPark.key = key;
    }

    static setDuration(duration){
        ChooseCarPark.duration = duration;
    }

    static setFare (fare){
        ChooseCarPark.total_fare = fare;
    }

    static setPerHour(perHour){
        ChooseCarPark.perHour = perHour;
    }

    static setImageUrI(uri){
        ChooseCarPark.imageURI = uri;
    }

    static setNotes (notes){
        ChooseCarPark.notes = notes;
    }

    static setAlertTime(time){
        ChooseCarPark.alertTime = time;
    }

    static setStartTime(time){
        ChooseCarPark.startTime = time;
    }

    static setEndTime(time){
        ChooseCarPark.endTime = time;
    }

}