import java.time.Duration;
import java.time.Instant;
import java.util.Scanner;
import java.time.LocalTime;
import java.time.temporal.ChronoUnit;


public class StopWatch {

    Instant startTime, endTime;
    Duration duration;
    static Duration stopTime; 
    boolean isRunning = false;
    // public boolean end = false;

    public static void main(String[] args) {
        
        //initiate stopwatch
        StopWatch sw = new StopWatch();
        //sw2 is when the stopwatch will stop
        StopWatch sw2 = new StopWatch(10);
        System.out.println(stopTime.toSeconds()+ "testmain");
        // sw2.duration = stopTime;




        sw.start();
        doWork();
        
        // System.out.print(sw2.getElapsedTime().toSeconds() + "s");
        // while(true){
        //     if (stopTime == sw.duration)
        //         break;
        // }
        sw.stop();
        // Duration d1= sw.duration.plusSeconds(99);
        // System.out.println(sw.getElapsedTime().toSeconds() + "s");
        // System.out.println(d1.toSeconds() + "s");
        // StopWatch sw1 = new StopWatch(d1);
        // System.out.println(sw1.getElapsedTime().toSeconds() + "s");

    }

    public void extendTime(long t){
        stopTime.plusSeconds(t);

        
    }

    StopWatch(){}
    //constructor to initiate the stop time 
    StopWatch(long time){
        // StopWatch sw5 = new StopWatch();
        // Duration d5 = sw5.duration.plusSeconds(99);
        Duration stopTime = Duration.between(LocalTime.NOON,LocalTime.NOON);
        stopTime = stopTime.plusSeconds(time);
        System.out.println(stopTime.toSeconds()+ "test");
    }

    public static void doWork(){

    }



    // StopWatch(Duration stop){
    //     this.stopTime = stop;
    // }




    // public static void doWork()
    // {
    //     Scanner sc = new Scanner(System.in);

    //     // System.out.println(end);
    //     while(true){
    //         String end = sc.nextLine();
    //         if(end.equals("y"))
    //         {
    //             break;
    //         }
    //     }
    //     sc.close();
    //     return;
    // }
    public void start() {
        if (isRunning) {
            throw new RuntimeException("Stopwatch is already running.");
        }
        this.isRunning = true;
        startTime = Instant.now();
    }

    public Duration stop() {
        this.endTime = Instant.now();
        if (!isRunning) {
            throw new RuntimeException("Stopwatch has not been started yet");
        }
        isRunning = false;
        Duration result = Duration.between(startTime, endTime);
        if (this.duration == null) {
            this.duration = result;
        } else {
            this.duration = duration.plus(result);
        }

        return this.getElapsedTime();
    }

    public Duration getElapsedTime() {
        return this.duration;
    }

    public void reset() {
        if (this.isRunning) {
            this.stop();
        }
        this.duration = null;
    }
}