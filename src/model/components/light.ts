/**
 * Representation of a light. Can be on or off
 */
export class Light {

    //Private storage for the variables
    private on: boolean;

    /**
     * Creates a new light
     * @param _on 
     */
    constructor(_on) {
        this.on = _on;
    }

    /**
     * Returns true if the light is on, off otherwise
     */
    public isLightOn() {
        return this.on;
    }

    /**
     * Sets the model's status for the light
     * @param _on 
     */
    public setLightStatus(_on: boolean) {
        this.on = _on;
    }
}