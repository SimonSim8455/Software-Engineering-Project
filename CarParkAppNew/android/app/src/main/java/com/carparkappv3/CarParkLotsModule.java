package com.carparkappv3;

import android.telecom.Call;

import androidx.annotation.Nullable;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.ReadableNativeArray;
import com.facebook.react.bridge.ReadableNativeMap;
import com.facebook.react.bridge.WritableNativeArray;
import com.facebook.react.bridge.WritableNativeMap;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;


public class CarParkLotsModule extends ReactContextBaseJavaModule {

    public CarParkLotsModule (@Nullable ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "CarParkLotsModule";
    }

    public static CarparkAPIMgr GA  = new CarparkAPIMgr();
    public static CarparkAPI tmp = new CarparkAPI();

    @ReactMethod
    public static void Init(Callback cb){
        GA = new CarparkAPIMgr();
        String b = "Successful";
        cb.invoke(b);
    }

    @ReactMethod
    public static void carParkLots(ReadableArray readableArray, Callback cb) throws IOException {
        // assume readable array of carParks number (eg ADB etc)
        // return writable map of input car parks number lots

        CarparkAPI cp = GA.fetchCarparkAPI();
        ArrayList<String> strArr = new ArrayList<>();
        for(int i=0;i< readableArray.size();i++){
            strArr.add(readableArray.getString(i));
        }
    
        ArrayList<CARPARK_DATA>P;
        if(cp != null){
            if(cp.carpark_data_arr == null){
                cb.invoke("NUll object references");
                return;
            }
            P = cp.carpark_data_arr;
            tmp = cp;
        }
        else{
            P = tmp.carpark_data_arr;
        }
        WritableNativeArray wrt = new WritableNativeArray();
        if(P==null){
            cb.invoke("Error");
            return;
        }
        for(int i=0;i<P.size();i++) {
            for (int j = 0; j < strArr.size(); j++) {
                CARPARK_DATA cd = P.get(i);
                if (cd.carpark_number.equals(strArr.get(j))) {
                    WritableNativeMap mp = new WritableNativeMap();
                    mp.putString("number", cd.carpark_number);
                    mp.putString("total_lots", cd.total_lots);
                    mp.putString("lots_available", cd.lots_available);
                    wrt.pushMap(mp);
                    strArr.remove(j);
                }
            }
            if (wrt.size() == readableArray.size()) {
                break;
            }
        }

        cb.invoke(wrt);
    }

}
