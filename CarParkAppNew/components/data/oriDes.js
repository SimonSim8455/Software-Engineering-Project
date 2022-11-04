//set up origin detaisl and destinatin detals
//allows get and set function
// can be a class


export default class OriDes{
    // static _originalDetails = {
    //     name: "Hall 9 - Block 45",
    //     formatted_address: "26 Nanyang Ave, Hall 9 - Block 45, Singapore 639812",
    //     position:{
    //         latitude:1.3510210126826618, 
    //         longitude:103.68580822679573
    //     }
    // };
    // static _destinationDetails = {
    //     name: "Jurong Point",
    //     formatted_address: "1 Jurong West Central 2, Singapore 648886",
    //     position:{
    //         latitude:1.3398730072174543, //close to ? cure lat - lat <= 0.001072
    //         longitude:103.70727684648821
    //     }   
    // };

    static currentLocation = {
        latitude :1.3510210126826618,
        longitude: 103.68580822679573
    }

    static setCurrentLocation(lat,lng){
        OriDes.currentLocation.latitude = lat;
        OriDes.currentLocation.longitude = lng;
    }

    static _originalDetails = null;
    static _destinationDetails =  null;

    static routeOrigin = null;
    static routeDes = null;
    
    static setOriDetails(details){
        let originDetail;
        if(details == "Current"){
            originDetail = {
                name: "Current Location",
                formatted_address: "Current Location",
                position:{
                    latitude:OriDes.currentLocation.latitude,
                    longitude:OriDes.currentLocation.longitude,
                }
            }
        }
        else{
            originDetail={
                name: details.name,
                formatted_address: details.formatted_address,
                position:{
                    latitude: details.geometry.location.lat,
                    longitude: details.geometry.location.lng,
                }
            }
        }
        OriDes._originalDetails = originDetail;
    }

    static setDesDetails(details){
        if(!details){
            _destinationDetails = null;
            return;
        }
        let  destinationDetails ={
            name: details.name,
            formatted_address: details.formatted_address,
            position:{
                latitude: details.geometry.location.lat,
                longitude: details.geometry.location.lng,
            }
        }
        OriDes._destinationDetails = destinationDetails;
    }
}