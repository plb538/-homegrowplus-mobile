import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { RestClient } from '../../provider/rest-client';
import { Grower } from '../../model/grower/grower';
import { Http } from '@angular/http';
import { ConnectPage } from '../connect/connect';
import { Plant } from '../../model/components/plant';
import { TrayPlantPage } from '../tray-plants/tray-plants';
import { HomeGrowUnitPage } from '../homegrow-unit/homegrow-unit';
import { ScheduleConfigPage } from '../schedule-config/schedule-config';

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
        this.grower.trays.addTray(3);
        this.grower.lights.addLight();
        this.showIPModal();
    }

    public showTrayModal(tray: number) {
        let currentTray = this.grower.trays.getTray(tray);
        if (currentTray) {
            let trayModal = this.modalCtrl.create(TrayPlantPage, [tray, this.grower, this.rest]);
            trayModal.present();
        }
    }

    public showUnitModal() {
        let reservoirs = this.grower.reservoirs;
        if (reservoirs) {
            let unitModal = this.modalCtrl.create(HomeGrowUnitPage, [reservoirs, this.rest]);
            unitModal.present();
        }
    }

    public showScheduleModal() {
        let schedules = this.grower.schedules;
        if (schedules) {
            let scheduleModal = this.modalCtrl.create(ScheduleConfigPage, [schedules, this.rest]);
            scheduleModal.present();
        }
    }

    public showIPModal() {
        let connectDialog = this.modalCtrl.create(ConnectPage);
        connectDialog.onDidDismiss(
            (data) => {
                if (data) {
                    this.ipAddress = data;
                    this.rest = new RestClient(this.grower, this.ipAddress, this.Http);
                    this.rest.updateAll();
                } else if (this.rest == null) {
                    this.rest = new RestClient(this.grower, "127.0.0.1", this.Http);
                }
            }
        );
        connectDialog.present();
    }
}
