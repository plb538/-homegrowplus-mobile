import { Light } from "../components/light";

/**
 * Handles all the interactions with the lights
 */
export class LightManager {
    
    private lights: Array<Light> = [];

    /**
     * Returns the number of lights currently in the model
     */
    public getNumLights(){
        return this.lights.length;
    }

    /**
     * Updates the status of a specified light
     * @param light The light being updated
     * @param status Status we are setting (On=true, off=false)
     */
    public updateLightStatus(light: number, status: boolean){
        this.lights[light].setLightStatus(status);
    }

    /**
     * Check if the specified light is on in the model
     * @param light light to be chcked
     */
    private isLightOn(light: number) {
        return this.lights[light].isLightOn();
    }

    /**
     * Adds a new light to the model which is by default turned off
     */
    private addLight() {
        this.lights.push(new Light(false))
    }


}