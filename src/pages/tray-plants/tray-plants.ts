import { Component } from '@angular/core';
import { ViewController, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { PlantControlPage } from '../plant-control/plant-control';
import { RestClient } from '../../provider/rest-client';
import { TimeFormatter } from '../../provider/time-formatter';
import { Grower } from '../../model/grower/grower';

@Component({
    selector: 'page-tray-plants',
    templateUrl: 'tray-plants.html'
})
export class TrayPlantPage {

    public trayNumber: number;
    public grower: Grower;
    public rest: RestClient;

    constructor(public navCtrl: NavController, public viewCtrl: ViewController, public navParams: NavParams, public modalCtrl: ModalController) {
        this.trayNumber = navParams.data[0] + 1;
        this.grower = navParams.data[1];
        this.rest = navParams.data[2];
    }

    public getSensorsForTray() {
        let temp = [];
        let s1 = this.grower.sensors.getSensor("temperature");
        let s2 = this.grower.sensors.getSensor("humidity");
        temp.push({ name: s1.getName(), value: s1.getValue() + "C" });
        temp.push({ name: s2.getName(), value: s2.getValue() + "%R.H." });
        return temp;
    }

    public getPlantsForTray() {
        return this.grower.trays.getTray(this.trayNumber - 1).getAllPlants();
    }

    public showPlantManager() {
        this.modalCtrl.create(PlantControlPage, [this.trayNumber, this.grower.trays.getTray(this.trayNumber - 1), this.rest]).present();
    }

    public activateLight() {
        this.rest.setLightStatus(this.trayNumber - 1, !this.getLightStatus());
    }

    public getPrettyString(input) {
        return TimeFormatter.getPrettyString(input);
    }

    public getLightStatus() {
        return this.grower.lights.isLightOn(this.trayNumber - 1);
    }
}
