import { Component } from '@angular/core';
import { ViewController, NavController, NavParams } from 'ionic-angular';
import { ReservoirManager } from '../../model/managers/reservoir-manager';

@Component({
    selector: 'page-homegrow-unit',
    templateUrl: 'homegrow-unit.html'
})
export class HomeGrowUnitPage {

    public reservoirs: ReservoirManager;

    constructor(public navCtrl: NavController, public viewCtrl: ViewController, public navParams: NavParams) {
        this.reservoirs = navParams.data[0];
    }

    public getReservoirs() {
        return this.reservoirs.getAllFluidDetails();
    }

    public getPumps() {
        return this.reservoirs.getAllPumpDetails();
    }

    public showPumpManager(){
        
    }

}
