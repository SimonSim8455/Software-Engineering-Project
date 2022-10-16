import React from "react";
import { StyleSheet , View, Text, Image} from "react-native";
import rel from "../share/RelativeRes";


export default function Reviews(){
    const fullStar = "D:/STUDY MATERIAL/SC2006/SC2006 Project/CarParkApp/assets/Pictures/fullStar.png";
    const halfStar = "D:/STUDY MATERIAL/SC2006/SC2006 Project/CarParkApp/assets/Pictures/halfStar.png";
    const emptyStar = "D:/STUDY MATERIAL/SC2006/SC2006 Project/CarParkApp/assets/Pictures/emptyStar.png";

    const reviews = {
        score:3.7,
        totalReviews:40,
        "5star":15,
        "4star":10,
        "3star":15,
        "2star":10,
        "1star":4,
    }
    
    const renderStar = (score) =>{
        let numFull=0,numHalf=0,numEmpty= 0;

        numFull = parseInt(score,10);
        
        if((score*10)%10 >=5)
            numHalf++;

        numEmpty = 5 - (numFull + numHalf);

        let list = [];
        let counter =0;
        for(let i =0;i<numFull;i++){
            list[counter] = (
                <Image source= {require(fullStar)} style = {styles.starsIcon} key={counter}/>
            )
            counter++;
        }

        for(let i =0;i<numHalf;i++){
            list[counter] = (
                <Image source= {require(halfStar)} style = {styles.starsIcon} key={counter}/>
            )
            counter++;
        }

        for(let i =0;i<numEmpty;i++){
            list[counter] = (
                <Image source= {require(emptyStar)} style = {styles.starsIcon} key={counter}/>
            )
            counter++;
        }
        //console.log(numFull);
        return list;
    }

    const renderBar = () => {
        let list =[];
        let l_5 = (reviews["5star"]/reviews.totalReviews *100).toString() + '%';
        let l_4 = (reviews["4star"]/reviews.totalReviews *100).toString() + '%';
        let l_3 = (reviews["3star"]/reviews.totalReviews *100).toString() + '%';
        let l_2 = (reviews["2star"]/reviews.totalReviews *100).toString() + '%';
        let l_1 = (reviews["1star"]/reviews.totalReviews *100).toString() + '%';
        list[0] = (
            <View style={{flexDirection:"row",width:"100%",alignItems:"center"}} key={0}>
                <Text style={{fontSize:14, paddingRight:rel("W",10)}}>5</Text>
                <View style={{width:"100%"}}>
                    <View style={styles.reviewGrayBar}></View>
                    <View style={[styles.reviewBlueBar,{width:l_5}]} />
                </View>
            </View>
        )
        list[1] = (
            <View style={{flexDirection:"row",width:"100%",alignItems:"center"}} key={1}>
                <Text style={{fontSize:14, paddingRight:rel("W",10)}}>4</Text>
                <View style={{width:"100%"}}>
                    <View style={styles.reviewGrayBar}></View>
                    <View style={[styles.reviewBlueBar,{width:l_4}]} />
                </View>
            </View>
        )
        list[2] = (
            <View style={{flexDirection:"row",width:"100%",alignItems:"center"}} key={2}>
                <Text style={{fontSize:14, paddingRight:rel("W",10)}}>3</Text>
                <View style={{width:"100%"}}>
                    <View style={styles.reviewGrayBar}></View>
                    <View style={[styles.reviewBlueBar,{width:l_3}]} />
                </View>
            </View>
        )
        list[3] = (
            <View style={{flexDirection:"row",width:"100%",alignItems:"center"}} key={3}>
                <Text style={{fontSize:14, paddingRight:rel("W",10)}}>2</Text>
                <View style={{width:"100%"}}>
                    <View style={styles.reviewGrayBar}></View>
                    <View style={[styles.reviewBlueBar,{width:l_2}]} />
                </View>
            </View>
        )
        list[4] = (
            <View style={{flexDirection:"row",width:"100%",alignItems:"center"}} key={4}>
                <Text style={{fontSize:14, paddingRight:rel("W",10)}}>1</Text>
                <View style={{width:"100%"}}>
                    <View style={styles.reviewGrayBar}></View>
                    <View style={[styles.reviewBlueBar,{width:l_1}]} />
                </View>
            </View>
        )
        return list;
    }

    return(
        <View style= {styles.container}>
            <View style={styles.line}></View>
            <View style={styles.content1}>
                <View style={styles.reviewScore}>
                    <Text style={styles.reviewScoreNum}>{reviews.score}</Text>
                    <View style={styles.stars}>
                        {renderStar(reviews.score)}
                    </View>
                    <Text style={styles.totalReviewsText}>({reviews.totalReviews} reviews)</Text>
                </View>

                <View style={styles.verticalLine}></View>

                <View style={styles.reviewBars}>
                    {renderBar()}
                </View>

            </View>
            <View style={styles.line}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
       width:"100%"
    },
    line:{
        borderTopWidth:1,
        borderTopColor:"#d3d3d3",
        width:rel("W",298),
        alignSelf:"center"
    },
    content1:{
        flexDirection:"row",
        marginVertical:rel("H",11),
        width:"100%"
    },
    reviewScore:{
        width:rel("W",100),
        justifyContent:"center",
        alignItems:"center"
    },
    reviewScoreNum:{
        fontSize:36,
        fontWeight:"500",
    },
    stars:{
        flexDirection:"row"
    },
    starsIcon:{
        height:rel("H",16),
        width:rel("W",16),
        resizeMode:"contain",
    },
    totalReviewsText:{
        fontSize:13,
        fontWeight:"500"
    },
    verticalLine:{
        borderLeftColor:"#d3d3d3",
        borderLeftWidth:rel("W",1),
        height:rel("H",96)
    },
    reviewBars:{
        flexDirection:"column",
        paddingLeft:rel("W",12),
        width:rel("W",185)
    },
    reviewGrayBar:{
        width:"100%",
        height:rel("H",12),
        backgroundColor:"#d3d3d3",
        borderWidth:1,
        borderRadius:10,
        borderColor:"white"
    },
    reviewBlueBar:{
        backgroundColor:"#005f8e",
        borderWidth:1,
        borderRadius:10,
        height:rel("H",12),
        position:"absolute",
        borderTopColor:"white",
        borderBottomColor:"white",
        borderRightColor:"#005f8e",
        borderLeftColor:"#005f8e"
    }
})