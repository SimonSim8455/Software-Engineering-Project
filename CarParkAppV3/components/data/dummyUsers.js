import UserData from "./UserData"

//dummy User Database
export default class DummyUser{
    
    static userArr = []

    static InitUser(){
        DummyUser.userArr[0] = new UserData(
            0,
            "test@gmail.com",
            "Sim",
            "OL",
            "abcd",
            require("../../assets/dummyUserPic/test1.png"),
            {
                "2022":{
                  "January":10,
                  "May":40,
                  "June":20,
                  "July":80,
                  "August":50,
                },
                "2021":{
                  "May":40,
                  "June":10,
                  "July":70,
                  "August":30,
                }
            },
            {
                'J88M':{
                    name:'J88M',
                    location: 'BLK 692A JURONG WEST CENTRAL 1',
                    feedBack : "hello",
                    rating: 5,
                    time: 0,
                    hourly_price :  0.65,
                    openHrs: "WHOLE DAY",
                    position: {
                      latitude:1.3419307910117388, 
                      longitude:103.70714591012968
                    },
                    freeParking : "No",
                    distance:0,
                }
            }
        );

        DummyUser.userArr[1] = new UserData(
            1,
            "test2@gmail.com",
            "Sim2",
            "OL2",
            "abcd2",
            require("../../assets/dummyUserPic/test2.png"),
            {
                "2022":{
                  "January":10,
                  "May":40,
                  "June":20,
                  "July":20,
                  "August":50,
                },
                "2021":{
                  "May":40,
                  "June":20,
                  "July":10,
                  "August":50,
                }
            },
            {
              'J88M':{
                  name:'J88M',
                  location: 'BLK 692A JURONG WEST CENTRAL 1',
                  feedBack : "hello",
                  rating: 5,
                  time: 0,
                  hourly_price :  0.65,
                  openHrs: "WHOLE DAY",
                  position: {
                    latitude:1.3419307910117388, 
                    longitude:103.70714591012968
                  },
                  freeParking : "No",
                  distance:0,
              }
            }

            
        )

        DummyUser.userArr[2] = new UserData(
            2,
            "test2",
            "Sim2",
            "OL2",
            "abcd2",
            require("../../assets/dummyUserPic/test2.png"),
            {
                "2022":{
                  "January":10,
                  "May":20,
                  "June":20,
                  "July":80,
                  "August":50,
                },
                "2021":{
                  "May":40,
                  "June":20,
                  "July":20,
                  "August":10,
                }
            },
            {
              'J88M':{
                  name:'J88M',
                  location: 'BLK 692A JURONG WEST CENTRAL 1',
                  feedBack : "hello",
                  rating: 5,
                  time: 0,
                  hourly_price :  0.65,
                  openHrs: "WHOLE DAY",
                  position: {
                    latitude:1.3419307910117388, 
                    longitude:103.70714591012968
                  },
                  freeParking : "No",
                  distance:0,
              }
          }
        )
        console.log("Init user sucess");
    }

    static registerUser(id,e,f,l,p,i,mf){
        DummyUser.userArr[DummyUser.userArr.length] = new UserData(id,e,f,l,p,i,mf,{});
    }
}