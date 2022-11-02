import { NativeModules } from 'react-native';
const { CarParkLotsModule } = NativeModules;
import FindNearCarPark from "../ReadCSV/findNearCarPark";
import DummyUser from './dummyUsers';
import UserState from './userState';

export default class CarParkAPI{

    static avail = null;
    static choosen = null;
    static fav = null;

    static callAPI(){
        if(!FindNearCarPark._carParks){
            return;
        }
        let test= [];
        for(let i=0;i<FindNearCarPark._carParks.length;i++){
            test[i] = FindNearCarPark._carParks[i].name;
        }
        CarParkLotsModule.carParkLots(test,(cb=>{
            CarParkAPI.avail = cb;
        }))
    }

    static callAPIFav(names){
        CarParkLotsModule.carParkLots(names,(cb=>{
            CarParkAPI.fav = cb;
        }))
    }

    static getAvailFav(name){
        if(CarParkAPI.fav){
            for(let a =0;a<CarParkAPI.fav.length;a++){
                let b = CarParkAPI.fav[a];
                if(b.number == name){
                    return b;
                }
            }
        }
    }

    static getAvail2(){
        if(CarParkAPI.avail){
            for(let a =0;a<CarParkAPI.avail.length;a++){
                let b = CarParkAPI.avail[a];
                for( let c =0;c<FindNearCarPark._carParks.length;c++){
                    if(b.number ==FindNearCarPark._carParks[c].name){
                        FindNearCarPark._carParks[c].setAvail(b.lots_available);
                        FindNearCarPark._carParks[c].setTotalLots(b.total_lots);
                    }
                }
            }
        }
    }

    static getAvail(name){
        for(let a =0;a<CarParkAPI.avail.length;a++){
            let b = CarParkAPI.avail[a];
            if(b.number == name){
                CarParkAPI.choosen = b;
                return;
            }
        }
    }
}