import { Component } from '@angular/core';
import { ViewController, NavController, NavParams } from 'ionic-angular';
import { Tray } from '../../model/components/tray';

@Component({
    selector: 'page-tray-plants',
    templateUrl: 'tray-plants.html'
})
export class TrayPlantPage {

    public trayNumber: number;
    public tray: Tray;
    constructor(public navCtrl: NavController, public viewCtrl: ViewController, public navParams: NavParams) {
        this.trayNumber = navParams.data[0] + 1;
        this.tray = navParams.data[1];
    }

    public getSensorsForTray() {
        return [{ name: "Todo", value: "Put sensor data here" }];
    }

    public getPlantsForTray() {
        return this.tray.getAllPlants();
    }

    public showPlantManager() {

    }
}
