import { Component } from '@angular/core';
import { ViewController, NavController, NavParams } from 'ionic-angular';
import { ReservoirManager } from '../../model/managers/reservoir-manager';
import { RestClient } from '../../provider/rest-client';
import { Tray } from '../../model/components/tray';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { Plant } from '../../model/components/plant';

@Component({
    selector: 'page-plant-control',
    templateUrl: 'plant-control.html'
})
export class PlantControlPage {


    public trayNumber: number;
    public tray: Tray;
    public rest: RestClient;

    constructor(public navCtrl: NavController, public viewCtrl: ViewController, public navParams: NavParams, public modalCtrl: ModalController) {
        this.trayNumber = navParams.data[0];
        this.tray = navParams.data[1];
        this.rest = navParams.data[2];
    }

    public addPlant(plant) {
        //Todo create dialog with name and date input and put it here instead of null
        let plantNameDialog = this.modalCtrl.create(null);
        plantNameDialog.onDidDismiss(
            (data) => {
                if (data) {
                    this.tray.addPlant(new Plant(data[0], data[1]), this.tray.getAllPlants().indexOf(plant));
                }
            }
        )
        plantNameDialog.present();
    }

    public removePlant(plant) {
        this.tray.removePlant(this.tray.getAllPlants().indexOf(plant));
    }

    public getPlantsForTray() {
        return this.tray.getAllPlants();
    }

    public plantIsEmpty(plant): boolean {
        return plant.name == "Empty";
    }
}
