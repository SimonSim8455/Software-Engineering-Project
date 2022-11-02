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
import java.io.InputStream;
import java.net.URL;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import android.content.Context;

public class searchCarparkMgr{
    private CarPark[] cpArray = new CarPark[3000];
    private static List<CarPark> carParks = new ArrayList<>();

    Context context;
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
            carPark.setFreeParking(readableArray.getMap(k).getString("freeParking"));
            carPark.setOpenHrs(readableArray.getMap(k).getString("openHrs"));
            carPark.setHalfHour_price(0.60);
            carPark.setHourly_price(0.65);
            carPark.setDist(1000000); //initialize all distance to 100000 first
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
        Collections.sort(carParks, new Comparator<CarPark>() {
            @Override
            public int compare(CarPark cp1, CarPark cp2) {
                return (cp1.getDist() > cp2.getDist() ? 1 : (cp1.getDist() < cp2.getDist() ? -1 : 0));
            }
        });

    }

    public WritableNativeMap sortedCarPark(int counter){
        CarPark re = carParks.get(counter);
        SVY21Coordinate coord =  new SVY21Coordinate(re.getX_coord(),re.getY_coord());
        LatLonCoordinate coordLat = coord.asLatLon();

        WritableNativeMap nativeMap= new WritableNativeMap();
        nativeMap.putString("name",re.getName());
        nativeMap.putString("address",re.getAddress());
        nativeMap.putDouble("latitude",coordLat.getLatitude());
        nativeMap.putDouble("longitude",coordLat.getLongitude());
        nativeMap.putString("freeParking",re.getFreeParking());
        nativeMap.putString("openHrs",re.getOpenHrs());
        nativeMap.putDouble("halfHrs_price",re.getHalfHour_price());
        nativeMap.putDouble("hourly_price",re.getHourly_price());
        nativeMap.putDouble("distance",re.getDist());

        return nativeMap;
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