package com.carparkappv3;

import android.content.Context;
import android.telecom.Call;

import androidx.annotation.Nullable;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.ReadableNativeArray;
import com.facebook.react.bridge.WritableNativeArray;
import com.facebook.react.bridge.WritableNativeMap;

import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

public class SearchCarParkModule extends ReactContextBaseJavaModule {

    public static searchCarparkMgr GA;
    public static Context scpContext;

    public SearchCarParkModule (@Nullable ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "SearchCarParkModule";
    }

    @ReactMethod
    public static void Init(Callback cb){
        GA = new searchCarparkMgr();
        String b = "Successful";
        cb.invoke(b);
    }

    @ReactMethod
    public static void insertCarPark(ReadableArray readableArray, int place){
        if(place ==0){
            GA.readCarParkData(readableArray);
        }
    }

    @ReactMethod
    public static void findNearCarPark(double latitude, double longitude, int num,Callback cb){
            GA.calcCarparkDist(latitude,longitude);
            WritableNativeArray listofCarPark = new WritableNativeArray();
            for(int j=0;j<num;j++) {
                WritableNativeMap elm = GA.sortedCarPark(j);
                listofCarPark.pushMap(elm);
            }
            cb.invoke(listofCarPark);

    }

    @ReactMethod
    public static void getNum(Callback cb){
        int b = GA.getCarParkNum();
        cb.invoke(b);
    }
}
