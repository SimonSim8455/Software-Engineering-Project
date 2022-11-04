import findNearCarPark from "../ReadCSV/findNearCarPark";
import OriDes from "./oriDes";

export default class NearByCarPark{

    static _carParks = null;
    static _init = 1;

    static setCarParks(num){
        let desDetail = OriDes._destinationDetails;
        if(desDetail!=null)
        NearByCarPark._carParks = findNearCarPark(desDetail.position.latitude,desDetail.position.longitude,num, NearByCarPark._init);
        NearByCarPark._init = 0;
        console.log("Hello");
    }
}
