import { Grower } from "../model/grower/grower";
import { Http } from "@angular/http";

/**
 * Handles all the REST communication to the controller (RaspPi) via available public methods
 */
export class RestClient {

    //Storage
    private grower: Grower;
    private restClient: Http;
    private restTarget: string;

    /**
     * 
     * @param _grower Passed in grower object
     * @param http Angular http object
     * @param controllerIp Ip address of the controller (RaspPi)
     */
    constructor(private _grower: Grower, private controllerIp: string, private http: Http) {
        this.grower = _grower;
        this.restClient = http;
        this.restTarget = controllerIp;
    }

    /**
     * Invokes updateFluids, updateLights, and updatePumps
     */
    public updateAll() {
        this.updateFluids();
        this.updateLights();
        this.updatePumps();
    }

    /**
     * Fetch the list of reservoirs and then iterate over them to fetch and update the level in each
     */
    public updateFluids() {
        let fluids = this.grower.reservoirs.getReservoirNames();
        fluids.forEach(
            (fluid) => {
                this.updateSingleFluid(fluid);
            }
        )
    }

    /**
     * Fetch the number of lights and tehn iterate over them to fetch and update each light's status (on = true|false)
     */
    public updateLights() {
        let lights: number = this.grower.lights.getNumLights();
        for (let i = 0; i < lights; i++) {
            this.updateSingleLight(i);
        }
    }

    /**
     * Fetch the list of reservoirs and then iterate over them to fetch and update the status of the pump for each (on = true|false)
     */
    public updatePumps() {
        let pumps = this.grower.reservoirs.getReservoirNames();
        pumps.forEach(
            (pump) => {
                this.updateSinglePump(pump);
            }
        )
    }

    /**
     * Update the specified fluid's level
     * @param fluid a particular fluid
     */
    private updateSingleFluid(fluid: string) {
        this.restClient.get(this.restTarget + "/sensor/fluid/" + fluid).subscribe(
            (data) => {
                this.grower.reservoirs.updateFluidLevel(fluid, data.json["level"]);
            }
        )
    }

    /**
     * Update the specified light's status (on = true|false)
     * @param light a particular light
     */
    private updateSingleLight(light: number) {
        this.restClient.get(this.restTarget + "/sensor/light/" + light).subscribe(
            (data) => {
                this.grower.lights.updateLightStatus(light, data.json["on"] == true);
            }
        )
    }

    /**
     * Update the specified reservoir's pump status (on = true|false)
     * @param reservoir a particular reservoir
     */
    private updateSinglePump(reservoir: string) {
        this.restClient.get(this.restTarget + "/sensor/pump/" + reservoir).subscribe(
            (data) => {
                this.grower.reservoirs.setPumpStatus(reservoir, data.json["on"] == true);
            }
        )
    }

    /**
     * Set the specified light's status to on/off based on the passed in status
     * @param light a specified light
     * @param status what you want the light to be (on=true, off=false)
     */
    public setLightStatus(light: number, status: boolean) {
        this.restClient.post(this.restTarget + "/control/light/" + light, { on: status }).subscribe(
            (data) => {
                if (data.ok) {
                    this.updateSingleLight(light);
                } else {
                    console.warn("Setting light status failed for light: " + light);
                }
            }
        )
    }

    /**
     * Set the specified pump's status to be on/off based on the passed in status
     * @param reservoir a specified reservoir
     * @param status what you want the pump to be (on=true, off=false)
     */
    public setPumpStatus(reservoir: string, status: boolean) {
        this.restClient.post(this.restTarget + "/control/pump/" + reservoir, { on: status }).subscribe(
            (data) => {
                if (data.ok) {
                    this.updateSinglePump(reservoir);
                } else {
                    console.warn("Setting pump status failed for pump: " + reservoir);
                }
            }
        )
    }



}