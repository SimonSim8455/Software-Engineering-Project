import React from "react";
import { StyleSheet ,View,Text,Dimensions} from "react-native";
import {LineChart} from "react-native-chart-kit";
import rel from "../share/RelativeRes";

const screenWidth = Dimensions.get("screen").width;
export default function Chart(){
  const linedata = {
    labels: ['May','June','July','August'],
    datasets: [
      {
        data: [40, 20, 80, 50],
        strokeWidth: 5, // optional
        color: (opacity = 1) => `rgba(9, 33, 244, ${opacity})`
      },
    ],
  };

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