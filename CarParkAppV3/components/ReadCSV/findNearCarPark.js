import { NativeModules } from 'react-native';
import CarPark from '../data/carPark';
import OriDes from "../data/oriDes";
import CSVData from "./readCSV";
const { SearchCarParkModule } = NativeModules;


export default class FindNearCarPark{
    static _carParks = null;

    static initialize(){
        SearchCarParkModule.Init(cb=>{
            console.log(cb);
        });

        SearchCarParkModule.insertCarPark(CSVData(),0);
    }
    // this return smtg
    // return a list of object 
    // the time when start
    // unless the car park itslef is a dummy code

    //init carpark list (fetch fav carpark from start if got

    static calDist(lat1, lon1, lat2, lon2){
        var p = 0.017453292519943295;    // Math.PI / 180
        var c = Math.cos;
        var a = 0.5 - c((lat2 - lat1) * p)/2 + 
                c(lat1 * p) * c(lat2 * p) * 
                (1 - c((lon2 - lon1) * p))/2;
      
        return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
    }

    static setCarParks(num){
        let desDetail = OriDes._destinationDetails;
        let oriDetail = OriDes._originalDetails;
        if(desDetail!=null){
            SearchCarParkModule.findNearCarPark(desDetail.position.latitude,desDetail.position.longitude,num,(carParks)=>{
                let ob2 = [];
                for(let a=0;a<carParks.length;a++){
                    var cp = new CarPark();
                    cp.setName(carParks[a]["name"]);
                    cp.setLocation(carParks[a]["address"]);
                    cp.setPosition({
                        latitude:carParks[a]["latitude"],
                        longitude:carParks[a]["longitude"],
                    });
                    cp.setOpenHrs(carParks[a]["openHrs"]);
                    cp.setFreeParking(carParks[a]["freeParking"]);
                    cp.setHourly_price(carParks[a]["hourly_price"]);
                    cp.setTime(1)
                    cp.setKey(a)
                    cp.setDistance(FindNearCarPark.calDist(desDetail.position.latitude,desDetail.position.longitude,carParks[a]["latitude"],carParks[a]["longitude"]))
                    cp.setDisFrOri(FindNearCarPark.calDist(oriDetail.position.latitude,oriDetail.position.longitude,carParks[a]["latitude"],carParks[a]["longitude"]))
                    ob2[a] = cp;
                }
                FindNearCarPark._carParks = ob2;
            })
        }
    }
    
}