
import java.io.BufferedReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.io.*;



public class searchCarparkMgr {

    public static SVY21Coordinate currentSVY21Location;
    private CarPark[] cpArray = new CarPark[3000];

    private List<CarPark> carParks = new ArrayList<>();

    

    searchCarparkMgr(){
        currentSVY21Location = new SVY21Coordinate(29644.126763364322,33370.20651811274);
        //,
    }

    public static void main(String[] args) {
        // File file = new File("hdb.cdfsv");
        // System.out.println(file.exists());
        // System.out.println(file.isDirectory());
        // System.out.println(file.isHidden());
        // System.out.println(file.canRead());
        // System.out.println(new File("hdb.csv").getAbsolutePath());
        searchCarparkMgr a = new searchCarparkMgr();

        a.calculateNearByCarparks();
        // System.out.println(name + "   "+Address);
    }

    private void calculateNearByCarparks() {
        carParks.clear();
        readCarParkData();
        readCarParkDataMall();
        calcCarparkDist();
        
    }


    private void readCarParkData() {
        // carParks.clear();
        String fileIn = "hdb.csv";
        String line = null;
        // Read all lines in from CSV file and add to studentList
 
        try{
            FileReader fileReader = new FileReader(fileIn);
            BufferedReader bufferedReader = new BufferedReader(fileReader);
            while ((line = bufferedReader.readLine()) != null) {
                CarPark carPark = new CarPark();
                String[] temp = line.split(",");
                String name = temp[1];
                
                String Address = temp[4];
                // System.out.println(name + "   "+Address);

                try {
                    carPark.setX_coord(Double.parseDouble(temp[2]));
                } catch (NumberFormatException e) {
                    e.printStackTrace();
                    carPark.setX_coord(0);
                }
                try {
                    carPark.setY_coord(Double.parseDouble(temp[3]));
                } catch (NumberFormatException e) {
                    e.printStackTrace();
                    carPark.setY_coord(0);
                }
                carPark.setName(name);
                carPark.setAddress(Address);
                carPark.setDist(1000000); //initialize all distance to 100000 first
                carParks.add(carPark);
                carPark.setIsHDB(true);
            }
            bufferedReader.close();
        }catch (IOException e) {
            e.printStackTrace();
        }
        
    }

    private void calcCarparkDist() {
        //setting the square hypotenuse distance for each carparks in the entre array list -> O(n)
        for (CarPark carPark : carParks) {
            carPark.setDist(Math.sqrt(Math.pow(carPark.getX_coord() - currentSVY21Location.getEasting(), 2) + Math.pow(carPark.getY_coord() - currentSVY21Location.getNorthing(), 2)));
        }

        //displays the arraylist sorted by distance
        //change cp2 and cp1 arguments to change decreasing to increasing
        Collections.sort(carParks, new Comparator<CarPark>() {
            @Override
            public int compare(CarPark cp2, CarPark cp1) {
                return (cp1.getDist() > cp2.getDist() ? 1 : (cp1.getDist() < cp2.getDist() ? -1 : 0));
            }
        });

        //transfer this data into the array
        for (int i = 0; i < carParks.size(); i++) {
            carParks.get(i).setDataCategory(CarPark.DataCategory.AVAILABILITY);
            cpArray[i] = carParks.get(i);
        }
        for (CarPark carPark : carParks){
            System.out.println(carPark);
        }

    }
    
    private void readCarParkDataMall(){
        // carParks.clear();
        String fileIn = "malls3.csv";
        String line = null;
        // InputStream is2 = getActivity().getResources().openRawResource(R.raw.malls3);
        // BufferedReader reader2 = new BufferedReader(
        //         new InputStreamReader(is2, Charset.forName("UTF-8"))
        

        int lineCounterMalls = 0;
        try{
            FileReader fileReader = new FileReader(fileIn);
            BufferedReader bufferedReader = new BufferedReader(fileReader);
            while ((line = bufferedReader.readLine()) != null){
                //split by ","
                String[] tokens = line.split(",");

                //Read the data
                CarPark carPark =  new CarPark();
                carPark.setName(tokens[1]);
                carPark.setAddress(tokens[1]);
                try{
                    SVY21Coordinate svy21Coordinate = new LatLonCoordinate(
                            Double.parseDouble(tokens[2]),
                            Double.parseDouble(tokens[3])
                    ).asSVY21();
                    carPark.setY_coord(svy21Coordinate.getEasting());
                    carPark.setX_coord(svy21Coordinate.getNorthing());
                } catch (NumberFormatException e){
                    e.printStackTrace();
                    // Log.v("Mall_Data", "Error in reading in coords "+
                    //         tokens[2] + " " + tokens[3]);
                }

                carPark.setMall_weekday_rate1(tokens[4]);
                carPark.setMall_weekday_rate2(tokens[5]);
                carPark.setMall_sat_rate(tokens[6]);
                carPark.setMall_sun_rate(tokens[7]);
                carPark.setDist(1000000); //initialize all distance to that first
                carPark.setDataCategory(CarPark.DataCategory.SHOPPING_MALL);

                //GET OUT ALL THE ABHISHEK DATA
                carPark.setMall_weekday_24rate(tokens[8]);
                carPark.setMall_weekday_rates(tokens[9]);
                carPark.setMall_saturday_24rate(tokens[10]);
                carPark.setMall_saturday_rates(tokens[11]);
                carPark.setMall_sunday_24rate(tokens[12]);
                carPark.setMall_sunday_rates(tokens[13]);

                carPark.setIsHDB(false);
                carPark.setFileLineNum(lineCounterMalls);

                carParks.add(carPark);
                lineCounterMalls++;
            }
            bufferedReader.close();
        } catch(IOException e){
            // Log.d("Mall_Data", "Error reading data on file" + line, e);
            e.printStackTrace();
        }
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