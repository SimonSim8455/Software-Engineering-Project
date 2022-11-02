package com.carparkappv3;

import androidx.annotation.Nullable;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeArray;
import com.facebook.react.bridge.WritableNativeMap;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.net.URL;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

public class searchCarparkMgr{
    private CarPark[] cpArray = new CarPark[3000];
    private static List<CarPark> carParks = new ArrayList<>();

    public searchCarparkMgr(){

    }

    public int getCarParkNum (){
        return carParks.size();
    }

    public void readCarParkData(ReadableArray readableArray) {
        for(int k=0;k<readableArray.size();k++){
            CarPark carPark = new CarPark();
            carPark.setName(readableArray.getMap(k).getString("name"));
            carPark.setAddress(readableArray.getMap(k).getString("address"));
            carPark.setX_coord(readableArray.getMap(k).getDouble("X_coord"));
            carPark.setY_coord(readableArray.getMap(k).getDouble("Y_coord"));
            carPark.setDist(1000000); //initialize all distance to 100000 first
            carPark.setIsHDB(true);
            carParks.add(carPark);
        }
    }

    public void readCarParkDataMall(ReadableArray readableArray){
        for(int k=0;k<readableArray.size();k++){
            CarPark carPark = new CarPark();
            carPark.setName(readableArray.getMap(k).getString("name"));
            carPark.setAddress(readableArray.getMap(k).getString("name"));

            try{
                SVY21Coordinate svy21Coordinate = new LatLonCoordinate(
                        readableArray.getMap(k).getDouble("X_coord"),
                        readableArray.getMap(k).getDouble("Y_coord")
                ).asSVY21();
                carPark.setX_coord(svy21Coordinate.getEasting());
                carPark.setY_coord(svy21Coordinate.getNorthing());
            } catch (NumberFormatException e){
                e.printStackTrace();
            }

            carPark.setDist(1000000); //initialize all distance to 100000 first
            carPark.setDataCategory(CarPark.DataCategory.SHOPPING_MALL);
            carPark.setIsHDB(false);
            carParks.add(carPark);
        }
    }

    public void calcCarparkDist(double latitude, double longitude) {
        LatLonCoordinate curLatLonCoordinate = new LatLonCoordinate(latitude,longitude);
        SVY21Coordinate currentSVY21Location =  curLatLonCoordinate.asSVY21();

        //setting the square hypotenuse distance for each carparks in the entre array list -> O(n)
        for (int k=0;k<carParks.size();k++) {
            carParks.get(k).setDist(Math.sqrt(Math.pow(carParks.get(k).getX_coord() - currentSVY21Location.getEasting(), 2) + Math.pow( carParks.get(k).getY_coord() - currentSVY21Location.getNorthing(), 2)));
        }

        //displays the arraylist sorted by distance
        //change cp2 and cp1 arguments to change decreasing to increasing
        Collections.sort(carParks, new Comparator<CarPark>() {
            @Override
            public int compare(CarPark cp1, CarPark cp2) {
                return (cp1.getDist() > cp2.getDist() ? 1 : (cp1.getDist() < cp2.getDist() ? -1 : 0));
            }
        });

        //transfer this data into the array
//        for (int i = 0; i < carParks.size(); i++) {
//            carParks.get(i).setDataCategory(CarPark.DataCategory.AVAILABILITY);
//            cpArray[i] = carParks.get(i);
//        }

    }

    public WritableNativeArray sortedCarPark(int counter){
        CarPark re = carParks.get(counter);
        SVY21Coordinate coord =  new SVY21Coordinate(re.getX_coord(),re.getY_coord());
        LatLonCoordinate coordLat = coord.asLatLon();

        WritableNativeArray nativeArray = new WritableNativeArray();
        nativeArray.pushString(re.getName());
        nativeArray.pushString(re.getAddress());
        nativeArray.pushDouble(coordLat.getLatitude());
        nativeArray.pushDouble(coordLat.getLongitude());

        return nativeArray;
    }

}

//need to iterate over file for the x,y coordintates
//use a function to check which carpark is the nearest
// 



/*
 * get the current location
 * for each line in the csv file, calculate the dist of each carpark from the current location
 * use a comparator interface to compare which one has the shortest distance
 * 
 */