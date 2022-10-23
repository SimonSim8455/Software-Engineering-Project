public class ParkingSetting {
    StopWatch stopwatch;
    public int estimatedTimeSpent;



    boolean timerisUpNotification(){
        while(true){
            if(stopwatch.getElapsedTime() == 100)
            {
                //
            }
        }
    }
    void setEstimatedTimeSpent(int time){
        estimatedTimeSpent=time;
    }

    int getEstimatedTimeSpent(){
        return estimatedTimeSpent;
    }


    
    
}
