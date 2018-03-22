import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Grower } from "../model/grower/grower";
import { Schedule } from '../model/components/schedule';
import { ToastController } from 'ionic-angular';

/**
 * Handles all the REST communication to the controller (RaspPi) via available public methods
 */

@Injectable()
export class RestClient {

    //Storage
    private grower: Grower;
    private restClient: Http;
    private restTarget: string;
    private headers = new Headers({ 'Content-Type': 'application/json' })
    private options = new RequestOptions({ headers: this.headers });

    /**
     *
     * @param _grower Passed in grower object
     * @param http Angular http object
     * @param controllerIp Ip address of the controller (RaspPi)
     */
    constructor(private _grower: Grower, private controllerIp: string, private http: Http, public toastCtrl: ToastController) {
        this.grower = _grower;
        this.restTarget = controllerIp;
        this.restClient = http;
    }

    /**
     * Invokes updateFluids, updateLights, and updatePumps
     */
    public updateAll() {
        this.updateFluids();
        this.updateLights();
        this.updatePumps();
        this.updateSchedules();
    }

    /**
     * Fetch the list of reservoirs and then iterate over them to fetch and update the level in each
     */
    public updateFluids() {
        this.restClient.get('http://' + this.restTarget + ':5000' + "/sensors/pumps", this.options).subscribe(
            (data) => {
                data.json().forEach(
                    (fluid: JSON) => {
                        this.grower.reservoirs.updateFluidLevel(fluid[0], fluid[1]);
                    }
                )
            }
        );
    }

    /**
     * Fetch the number of lights and then iterate over them to fetch and update each light's status (on = true|false)
     */
    public updateLights() {
        this.restClient.get('http://' + this.restTarget + ':5000' + "/control/lights").subscribe(
            (data) => {
                data.json().forEach(
                    (light: JSON) => {
                        this.grower.lights.updateLightStatus(light[0], light[1]);
                    }
                );
            }
        );
    }

    /**
     * Fetch the list of reservoirs and then iterate over them to fetch and update the status of the pump for each (on = true|false)
     */
    public updatePumps() {
        this.restClient.get('http://' + this.restTarget + ':5000' + "/control/pumps").subscribe(
            (data) => {
                data.json().forEach(
                    (pump: JSON) => {
                        this.grower.reservoirs.setPumpStatus(pump[0], pump[1]);
                    }
                );
            }
        );
    }

    /**
 * Gets a particular days schedule from the controller and sets it in the model
 */
    public updateSchedules() {
        this.restClient.get('http://' + this.restTarget + ':5000' + "/management/schedule").subscribe(
            (data) => {
                data.json()["days"].forEach(
                    (day: JSON) => {
                        let newSchedule: Schedule = new Schedule(day["name"], day["waterOnTime"], day["lightOnTime"], day["waterCyclePeriod"], day["lightCyclePeriod"]);
                        this.grower.schedules.setDaySchedule(day["name"], newSchedule);
                    }
                );
            }
        );
    }

    /**
     * Set the specified light's status to on/off based on the passed in status
     * @param light a specified light
     * @param status what you want the light to be (on=true, off=false)
     */
    public setLightStatus(light: number, status: boolean) {
        this.restClient.post('http://' + this.restTarget + ':5000' + "/control/lights", { light: light, on: status }, this.options).subscribe(
            (data) => {
                if (data.ok) {
                    this.updateLights();
                } else {
                    if (data.status == 503) {
                        this.toastCtrl.create({
                            message: "Could not activate light #" + light,
                            position: "top",
                            duration: 3000
                        }).present();
                    }
                    console.warn("Setting light status failed for light: " + light);
                }
            }
        );
    }

    /**
     * Set the specified pump's status to be on/off based on the passed in status
     * @param reservoir a specified reservoir
     * @param status what you want the pump to be (on=true, off=false)
     */
    public setPumpStatus(reservoir: string, status: boolean) {
        this.restClient.post('http://' + this.restTarget + ':5000' + "/control/pumps", { pump: reservoir, on: status }, this.options).subscribe(
            (data) => {
                if (data.ok) {
                    this.updatePumps();
                } else {
                    if (data.status == 503) {
                        this.toastCtrl.create({
                            message: "Could not activate pump " + reservoir + ". Check reservoir levels.",
                            position: "top",
                            duration: 3000
                        }).present();
                    }
                    console.warn("Setting pump status failed for pump: " + reservoir);
                }
            }
        );
    }

    /**
     * Posts the model's entire schedule to the controller
     */
    public setSchedules() {
        this.grower.schedules.getAllDays().forEach(
            (day: Schedule) => {
                this.restClient.post('http://' + this.restTarget + ':5000' + "/management/schedule", JSON.stringify(day), this.options).subscribe(
                    (data) => {
                        if (data.ok) {
                            //Setting this does not require a refetch since we are determining it from the model not from the controller
                        } else {
                            console.warn("Setting schedule failed for day: " + day.day);
                        }
                    }
                );
            }
        );
    }

}
