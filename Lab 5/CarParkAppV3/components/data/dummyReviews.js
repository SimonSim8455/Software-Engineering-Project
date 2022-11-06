

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
                    reviews:"This is so bad, cant cant wait cant wait cant wait to to to try try it it out out out ouch",
                },
                {
                    imageSRC:require("../../assets/Pictures/personImage.png"),
                    name:"Naruto",
                    rating:3.0,
                    reviews:"My dad so bad, cant even handle claws",
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
                    reviews:"This is so bad, cant cant wait cant wait cant wait to to to try try it it out out out ouch",
                },
                {
                    imageSRC:require("../../assets/Pictures/personImage.png"),
                    name:"Naruto",
                    rating:3.0,
                    reviews:"My dad so bad, cant even handle claws",
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
                    reviews:"This is so bad, cant cant wait cant wait cant wait to to to try try it it out out out ouch",
                },
                {
                    imageSRC:require("../../assets/Pictures/personImage.png"),
                    name:"Naruto",
                    rating:3.0,
                    reviews:"My dad so bad, cant even handle claws",
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
            let totalR = DummyReview.reviews_ob[carParkName].reviews.totalReviews;
            let prevSc = DummyReview.reviews_ob[carParkName].reviews.score;
    
            DummyReview.reviews_ob[carParkName].reviews
                    .score=(prevSc*totalR+rating) / (totalR+1)

            DummyReview.reviews_ob[carParkName].reviews
                    .totalReviews=totalR+1
            
            DummyReview.reviews_ob[carParkName].reviews[str] =  DummyReview.reviews_ob[carParkName].reviews[str] +1;
            
            let g = DummyReview.reviews_ob[carParkName].publicReviews
            DummyReview.reviews_ob[carParkName].publicReviews[g.length] ={
                imageSRC:imgSRC,
                name:username,
                rating:rating,
                reviews:reviews
            }
        }
        else{
            DummyReview.reviews_ob[carParkName] ={
                reviews:{
                    score:rating,
                    totalReviews:1,
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
            DummyReview.reviews_ob[carParkName].reviews.str = 1;
        }
        
    }
}