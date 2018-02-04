/**
 * Class representing a particular day's schedule
 */
export class Schedule {

    /**
     * Constructor allows you to set all the internal objects
     * @param _day 
     * @param _waterOnTime 
     * @param _lightOnTime 
     * @param _waterCyclePeriod 
     * @param _lightCyclePeriod 
     */
    constructor(_day: string, _waterOnTime: number, _lightOnTime: number, _waterCyclePeriod: number, _lightCyclePeriod: number) {
        this.day = _day;
        this.waterOnTime = _waterOnTime;
        this.lightOnTime = _lightOnTime;
        this.waterCyclePeriod = _waterCyclePeriod;
        this.lightCyclePeriod = _lightCyclePeriod;
    }
    public day: string;
    public waterOnTime: number;
    public lightOnTime: number;
    public waterCyclePeriod: number;
    public lightCyclePeriod: number;
}