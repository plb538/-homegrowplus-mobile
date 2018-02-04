/**
 * Representation of a reservoir in the HomeGrow+ unit. Each reservoir also has a pump. Contains a name, level, and pumpStatus
 */
export class Reservoir {

    //Private storage for variables
    private fluidName: string;
    private fluidLevel: number;
    private pumpStatus: boolean;

    /**
     * Creates a new reservoir
     * @param _fluidName 
     * @param _fluidLevel 
     * @param _pumpStatus 
     */
    constructor(_fluidName: string, _fluidLevel: number = -1, _pumpStatus: boolean = false) {
        this.fluidName = _fluidName;
        this.fluidLevel = _fluidLevel;
        this.pumpStatus = _pumpStatus;
    }

    /**
     * Update the fluid level in the reservoir
     * @param newLevel 
     */
    public updateLevel(newLevel: number) {
        this.fluidLevel = newLevel;
    }

    /**
     * Gets the fluid level in the reservoir
     */
    public getLevel(): number {
        return this.fluidLevel;
    }

    /**
     * Gets the name of the fluid in the reservoir
     */
    public getFluidName(): string {
        return this.fluidName;
    }

    /**
     * Returns true if the pump for this reservoir is on, false if it is off
     */
    public isPumpOn(): boolean {
        return this.pumpStatus;
    }

    /**
     * Sets the model's pump status
     * @param status on=true, off=false
     */
    public updatePumpStatus(status: boolean) {
        this.pumpStatus = status;
    }
}