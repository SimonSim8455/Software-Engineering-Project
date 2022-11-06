

export default class CarPark{
    name = null;
    location = null;
    position = null;
    freeParking = null;
    distance = null;
    openHrs = null;
    hourly_price = null;
    time= null;
    key =null;
    disFrOri = null;
    avail = null;
    total_lots = null;
    setTotalLots(a){
        this.total_lots=a;
    }
    
    setAvail(a){
        this.avail = a;
    }

    getCred(k){
        if(k == "disFriOri"){
            return this.disFrOri;
        }
        else if(k=="distance"){
            return this.distance;
        } else if(k== "fare"){
            return this.hourly_price;
        } else if(k=="avail"){
            return this.avail;
        }
    }
    setDisFrOri(l){
        this.disFrOri =l;
    }

    setKey(k){
        this.key = k;
    }
    setTime(t){
        this.time =t;
    }

    setHourly_price(a){
        this.hourly_price = a
    }

    setName(n){
        this.name = n;
    }

    setLocation(n){
        this.location = n;
    }

    setPosition(a){
        this.position = a;
    }

    setFreeParking(a){
        this.freeParking = a;
    }

    setDistance(d){
        this.distance = d;
    }

    setOpenHrs(a){
        this.openHrs =a;
    }
    
}