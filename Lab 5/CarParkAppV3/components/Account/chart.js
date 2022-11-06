import React, { useEffect, useState } from "react";
import { StyleSheet ,View,Text,Dimensions} from "react-native";
import {LineChart} from "react-native-chart-kit";
import DummyUser from "../data/dummyUsers";
import UserState from "../data/userState";
import rel from "../share/RelativeRes";

const screenWidth = Dimensions.get("screen").width;
export default function Chart({year,month}){
  const la = (m) =>{
      if(m == "Jan-April"){
        return ["January","Febuary","March","April"]
      }
      else if (m == "May-Aug"){
        return ["May","June","July","August"]
      }
      else if(m=="Sept-Dec"){
        return ["September","October","November","December"]
      }
  }

  const dt = (d,y,m)=>{
     if(d.hasOwnProperty(y)){
         let z = d[y];
         if(z.hasOwnProperty(m)){
            return z[m];
         }
     }
     return 0;
  } 

  const getD = (data,year,months) => {
      let ans = []
      for(let b =0;b<months.length;b++){
          ans[b] = dt(data,year,months[b]);
      }
      return ans;
  }

  const [mF,setMF] = useState({});
  const [labels,setLabels] = useState(la(month))
  const [data,setData] = useState(getD(mF,year,la(month)))
  const [linedata,setLinedata] = useState({
    labels:labels,
    datasets:[
      {
        data:data,
        strokeWidth: 5, // optional
        color: (opacity = 1) => `rgba(9, 33, 244, ${opacity})`
      }
    ]
  })

  useEffect(()=>{
    if(UserState.user_index != -1){
      setMF(DummyUser.userArr[UserState.user_index].monthly_Fare);
    }
  },[UserState.user_index,UserState.onChnage])
  

  useEffect(()=>{
    setLabels(la(month));
  },[mF,month])

  useEffect(()=>{
    setData(getD(mF,year,labels))
  },[year,labels])

  useEffect(()=>{
    setLinedata({
      labels:labels,
      datasets:[
        {
          data:data,
          strokeWidth: 5, // optional
          color: (opacity = 1) => `rgba(9, 33, 244, ${opacity})`
        }
      ]
    })
  },[data])


    return(
      <View>
        <Text style={styles.text}>Total parking fare spent</Text>
        <LineChart
          data={linedata}
          width={styles.chartHW.width} // from react-native
          height={styles.chartHW.height}
          yAxisLabel={''}
          fromZero={true}
          withShadow={false}
          chartConfig={{
            backgroundGradientFromOpacity: 0,
            backgroundGradientToOpacity: 0, 
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            strokeWidth:1,
            propsForLabels: {
              r: "6",
              fontSize:"14",
              color: '#4F4F4F',
              fontWeight:"500"
            }
          }}
          bezier
          style={{
            borderRadius: 16,
            paddingLeft:0,
          }}
        />
      </View>
    )
}

const styles = StyleSheet.create({
  chartHW:{
    height:rel("H",200),
    width:screenWidth
  },
  text:{
    fontSize:16,
    fontWeight:"bold",
    alignSelf:"center"
  }
})