import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { RestClient } from '../../provider/rest-client';
import { Grower } from '../../model/grower/grower';
import { Http } from '@angular/http';
import { ConnectPage } from '../connect/connect';
import { Plant } from '../../model/components/plant';
import { TrayPlantPage } from '../tray-plants/tray-plants';
import { HomeGrowUnitPage } from '../homegrow-unit/homegrow-unit';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    ipAddress: string;
    grower: Grower;
    rest: RestClient;

    constructor(public navCtrl: NavController, public Http: Http, public modalCtrl: ModalController) {
        this.grower = new Grower();
        this.grower.trays.addTray(6);
        this.grower.trays.addTray(2);
        this.showConnectDialog();
    }

    public showConnectDialog() {
        let connectDialog = this.modalCtrl.create(ConnectPage);
        connectDialog.onDidDismiss(
            (data) => {
                if (data) {
                    this.ipAddress = data;
                    this.rest = new RestClient(this.grower, this.ipAddress, this.Http);
                }
            }
        );
        connectDialog.present();
    }

    public showTrayModal(tray: number) {
        let currentTray = this.grower.trays.getTray(tray);
        if (currentTray) {
            let trayModal = this.modalCtrl.create(TrayPlantPage, [tray, currentTray]);
            trayModal.present();
        }
    }

    public showUnitModal() {
        let reservoirs = this.grower.reservoirs;
        if (reservoirs) {
            let unitModal = this.modalCtrl.create(HomeGrowUnitPage, [reservoirs]);
            unitModal.present();
        }
    }
}
