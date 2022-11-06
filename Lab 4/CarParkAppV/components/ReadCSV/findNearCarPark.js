import { NativeModules } from 'react-native';
import OriDes from "../data/oriDes";
import CSVData from "./readCSV";
const { SearchCarParkModule } = NativeModules;


export default class FindNearCarPark{

    static _carParks = null;

    static initialize(){
        SearchCarParkModule.Init(cb=>{
            console.log(cb);
        });

        SearchCarParkModule.insertCarPark(CSVData().hdb,0);
        SearchCarParkModule.insertCarPark(CSVData().mall,1);
    }

    static setCarParks(num){
        let desDetail = OriDes._destinationDetails;
        if(desDetail!=null){
            SearchCarParkModule.findNearCarPark(desDetail.position.latitude,desDetail.position.longitude,num,(carParks)=>{
                let ob = [];
                for(let a=0;a<carParks.length;a++){
                    ob[a] = {};
                    ob[a]["name"] = carParks[a][0];
                    ob[a]["location"] = carParks[a][1];
                    ob[a]["position"] = {
                        latitude:carParks[a][2],
                        longitude:carParks[a][3],
                    }
                    ob[a]["distance"] = 10
                    ob[a]["time"] = 1
                    ob[a]["key"] = a
                }
                FindNearCarPark._carParks = ob;
            })
        }
    }
    
}