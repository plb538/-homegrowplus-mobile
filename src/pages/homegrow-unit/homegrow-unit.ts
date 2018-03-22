import { Component } from '@angular/core';
import { ViewController, NavController, NavParams } from 'ionic-angular';
import { ReservoirManager } from '../../model/managers/reservoir-manager';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { PumpControlPage } from '../pump-control/pump-control';
import { RestClient } from '../../provider/rest-client';

@Component({
    selector: 'page-homegrow-unit',
    templateUrl: 'homegrow-unit.html'
})
export class HomeGrowUnitPage {

    public reservoirs: ReservoirManager;
    public rest: RestClient;

    constructor(public navCtrl: NavController, public viewCtrl: ViewController, public navParams: NavParams, public modalCtrl: ModalController) {
        this.reservoirs = navParams.data[0];
        this.rest = navParams.data[1];
    }

    public getReservoirs() {
        return this.reservoirs.getAllFluidDetails();
    }

    public getPumps() {
        return this.reservoirs.getAllPumpDetails();
    }

    public showPumpManager() {
        this.modalCtrl.create(PumpControlPage, [this.reservoirs, this.rest]).present();
    }

    public parseLevel(input: number, reservoir: string): string {
        if (reservoir == "drain_water" || reservoir == "mixer_full") {
            if (input > 0) {
                return "Too High";
            } else {
                return "OK";
            }
        } else {
            if (input > 0) {
                return "OK";
            } else {
                return "Too Low";
            }
        }
    }
}
