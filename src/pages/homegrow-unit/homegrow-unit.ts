import { Component } from '@angular/core';
import { ViewController, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { PumpControlPage } from '../pump-control/pump-control';
import { RestClient } from '../../provider/rest-client';
import { Grower } from '../../model/grower/grower';
import { Pump } from '../../model/components/pump';
import { Sensor } from '../../model/components/sensor';

@Component({
    selector: 'page-homegrow-unit',
    templateUrl: 'homegrow-unit.html'
})
export class HomeGrowUnitPage {

    public grower: Grower;
    public rest: RestClient;

    constructor(public navCtrl: NavController, public viewCtrl: ViewController, public navParams: NavParams, public modalCtrl: ModalController) {
        this.grower = navParams.data[0];
        this.rest = navParams.data[1];
    }

    public getReservoirs() {
        //return this.reservoirs.getAllFluidDetails();
        let temp = [];
        this.grower.sensors.getAllSensorsOfType("conductivity").forEach(
            (sensor: Sensor) => {
                temp.push({ name: sensor.getName(), level: sensor.getValue() });
            }
        );
        return temp;
    }

    public getPumps() {
        let temp = [];
        this.grower.pumps.getAllPumps().forEach(
            (pump: Pump) => {
                temp.push({ name: pump.getPumpName(), pumpStatus: pump.getPumpStatus() });
            }
        );
        return temp;
    }

    public showPumpManager() {
        //this.modalCtrl.create(PumpControlPage, [this.reservoirs, this.rest]).present();
        this.modalCtrl.create(PumpControlPage, [this.grower.pumps, this.rest]).present();
    }

    public parseLevel(sensor): string {
        if (sensor.name == "drain_water" || sensor.name == "mixer_full") {
            if (sensor.level >= 1) {
                return "Too High";
            } else {
                return "OK";
            }
        } else {
            if (sensor.level >= 1) {
                return "OK";
            } else {
                return "Too Low";
            }
        }
    }
}
