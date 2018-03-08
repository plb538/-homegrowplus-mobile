import { Component } from '@angular/core';
import { ViewController, NavController, NavParams } from 'ionic-angular';
import { Tray } from '../../model/components/tray';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { PlantControlPage } from '../plant-control/plant-control';
import { RestClient } from '../../provider/rest-client';
import { TimeFormatter } from '../../provider/time-formatter';

@Component({
    selector: 'page-tray-plants',
    templateUrl: 'tray-plants.html'
})
export class TrayPlantPage {

    public trayNumber: number;
    public tray: Tray;
    public rest: RestClient;

    constructor(public navCtrl: NavController, public viewCtrl: ViewController, public navParams: NavParams, public modalCtrl: ModalController) {
        this.trayNumber = navParams.data[0] + 1;
        this.tray = navParams.data[1];
        this.rest = navParams.data[2];
    }

    public getSensorsForTray() {
        return [{ name: "Todo", value: "Put sensor data here" }];
    }

    public getPlantsForTray() {
        return this.tray.getAllPlants();
    }

    public showPlantManager() {
        this.modalCtrl.create(PlantControlPage, [this.trayNumber, this.tray, this.rest]).present();
    }

    public activateLight() {
        console.log("Activate Light NYI");
    }

    public getPrettyString(input){
        return TimeFormatter.getPrettyString(input);
    }
}
