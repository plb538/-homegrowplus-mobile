import { Schedule } from "../components/schedule";

/**
 * Handles all the interactions with the Schedule
 */
export class ScheduleManager {

    /**
     * Creates the schedules with -1 for all values for each day of the week
     */
    private schedule: Array<Schedule> = [
        new Schedule("sunday", -1, -1, -1, -1),
        new Schedule("monday", -1, -1, -1, -1),
        new Schedule("tuesday", -1, -1, -1, -1),
        new Schedule("wednesday", -1, -1, -1, -1),
        new Schedule("thursday", -1, -1, -1, -1),
        new Schedule("friday", -1, -1, -1, -1),
        new Schedule("saturday", -1, -1, -1, -1)
    ];

    /**
     * Return all the days
     */
    public getAllDays(): Array<Schedule> {
        return this.schedule;
    }

    /**
     * Get the schedule for a particular day
     * @param day the day of the week that you want
     */
    public getDaySchedule(day: string) {
        this.schedule.filter(
            (each) =>{
                if(each.day === day){
                    return each;
                }
            }
        )
    }

    /**
     * Sets the schedule for a particular day
     * @param day the day of the week that you want
     * @param newSchedule The new schedule
     */
    public setDaySchedule(day: string, newSchedule: Schedule) {
        this.schedule.filter(
            (each) =>{
                if(each.day == day){
                    this.schedule[this.schedule.indexOf(each)] = newSchedule;
                    return;
                }
            }
        )
    }
}