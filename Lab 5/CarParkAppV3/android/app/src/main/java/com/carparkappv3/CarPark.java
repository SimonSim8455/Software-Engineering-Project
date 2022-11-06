package com.carparkappv3;

import com.facebook.react.bridge.ReactContextBaseJavaModule;

public class CarPark{
    private String name;
    private String address;
    private double x_coord, y_coord;
    private double dist;
    private double hourly_price;
    private double halfHour_price;
    private String openHrs;
    private String freeParking;

    public String getOpenHrs() {
        return openHrs;
    }

    public void setOpenHrs(String op){
        this.openHrs = op;
    }
    public void setHalfHour_price(double price){
        this.halfHour_price = price;
    }
    public double getHalfHour_price() {
        return halfHour_price;
    }

    public String getFreeParking() {
        return freeParking;
    }

    public void setFreeParking(String freeParking) {
        this.freeParking = freeParking;
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    public double getHourly_price() {
        return hourly_price;
    }

    public void setHourly_price(double hourly_price) {
        this.hourly_price = hourly_price;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public double getX_coord() {
        return x_coord;
    }

    public void setX_coord(double x_coord) {
        this.x_coord = x_coord;
    }

    public double getY_coord() {
        return y_coord;
    }

    public void setY_coord(double y_coord) {
        this.y_coord = y_coord;
    }

    public double getDist() {
        return dist;
    }

    public void setDist(double dist) {
        this.dist = dist;
    }

}
