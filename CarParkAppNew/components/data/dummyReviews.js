import DummyUser from "./dummyUsers";
import UserState from "./userState";


export default class DummyReview{
    //
    static reviews_ob ={};

    static InitReview(){
        DummyReview.reviews_ob["J88M"] ={
            reviews:{
                score:3.825,
                totalReviews:40,
                "5star":15,
                "4star":7,
                "3star":15,
                "2star":2,
                "1star":1,
            },
            publicReviews:[
                {
                    imageSRC:require("../../assets/Pictures/personImage.png"),
                    name:"Potato Mash",
                    rating:3,
                    reviews:"I like the Car Park here, it is very near to the mall.",
                },
                {
                    imageSRC:require("../../assets/Pictures/personImage.png"),
                    name:"Naruto",
                    rating:3,
                    reviews:"The access to this car park is not so driver friendly TT...",
                }
            ]
        }

        DummyReview.reviews_ob["J88M"] ={
            reviews:{
                score:3.825,
                totalReviews:40,
                "5star":15,
                "4star":7,
                "3star":15,
                "2star":2,
                "1star":1,
            },
            publicReviews:[
                {
                    imageSRC:require("../../assets/Pictures/personImage.png"),
                    name:"Potato Mash",
                    rating:3,
                    reviews:"I like the Car Park here, it is very near to the mall.",
                },
                {
                    imageSRC:require("../../assets/Pictures/personImage.png"),
                    name:"Naruto",
                    rating:3,
                    reviews:"The access to this car park is not so driver friendly TT...",
                }
            ]
        }

        DummyReview.reviews_ob["J88M"] ={
            reviews:{
                score:3.825,
                totalReviews:40,
                "5star":15,
                "4star":7,
                "3star":15,
                "2star":2,
                "1star":1,
            },
            publicReviews:[
                {
                    imageSRC:require("../../assets/Pictures/personImage.png"),
                    name:"Potato Mash",
                    rating:3,
                    reviews:"I like the Car Park here, it is very near to the mall.",
                },
                {
                    imageSRC:require("../../assets/Pictures/personImage.png"),
                    name:"Naruto",
                    rating:3,
                    reviews:"The access to this car park is not so driver friendly TT...",
                }
            ]
        }
    }


    static addReviews(carParkName, user){
        let rating = user.rating;
        let reviews = user.hasOwnProperty('feedBack')? user.feedBack : "";
        let imgSRC = user.imageSRC;
        let username = user.name;

        let str = rating+"star";

        if(DummyReview.reviews_ob.hasOwnProperty(carParkName)){
            let g = DummyReview.reviews_ob[carParkName].publicReviews;
            let totalR = DummyReview.reviews_ob[carParkName].reviews.totalReviews;
            let prevSc = DummyReview.reviews_ob[carParkName].reviews.score;
            for(let a =0;a<g.length;a++){
                if(g[a].name == username){
                    let prevUserScore = g[a].rating;
                    DummyReview.reviews_ob[carParkName].publicReviews[a].rating = rating;
                    DummyReview.reviews_ob[carParkName].publicReviews[a].reviews = reviews;
                    DummyReview.reviews_ob[carParkName].reviews
                        .score=((prevSc*totalR-prevUserScore)+rating) / (totalR)
                    let prevStr = prevUserScore+"star"
                    DummyReview.reviews_ob[carParkName].reviews[prevStr] = DummyReview.reviews_ob[carParkName].reviews[prevStr] -1;
                    DummyReview.reviews_ob[carParkName].reviews[str] =  DummyReview.reviews_ob[carParkName].reviews[str] +1;
                    console.log(DummyUser.userArr[UserState.user_index])
                    return;
                }
            }
            if(rating!=0){
        
                DummyReview.reviews_ob[carParkName].reviews
                        .score=(prevSc*totalR+rating) / (totalR+1)
    
                DummyReview.reviews_ob[carParkName].reviews
                        .totalReviews=totalR+1
                
                DummyReview.reviews_ob[carParkName].reviews[str] =  DummyReview.reviews_ob[carParkName].reviews[str] +1;
            }
            DummyReview.reviews_ob[carParkName].publicReviews[g.length] ={
                imageSRC:imgSRC,
                name:username,
                rating:rating,
                reviews:reviews
            }
        }
        else{
            let y = rating ==0? 0 : 1;
            DummyReview.reviews_ob[carParkName] ={
                reviews:{
                    score:rating,
                    totalReviews:y,
                    "5star":0,
                    "4star":0,
                    "3star":0,
                    "2star":0,
                    "1star":0,
                },
                publicReviews:[
                    {
                        imageSRC:imgSRC,
                        name:username,
                        rating:rating,
                        reviews:reviews
                    }
                ]
            }
            if(y!=0)
                DummyReview.reviews_ob[carParkName].reviews[str] = 1;
        }
        
    }
}