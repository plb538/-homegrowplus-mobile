import { Component } from '@angular/core';
import { ViewController, NavController, NavParams } from 'ionic-angular';
import { ReservoirManager } from '../../model/managers/reservoir-manager';
import { RestClient } from '../../provider/rest-client';
import { Reservoir } from '../../model/components/reservoir';

@Component({
    selector: 'page-pump-control',
    templateUrl: 'pump-control.html'
})
export class PumpControlPage {

    public reservoirs: ReservoirManager;
    public rest: RestClient;

    constructor(public navCtrl: NavController, public viewCtrl: ViewController, public navParams: NavParams) {
        this.reservoirs = navParams.data[0];
        this.rest = navParams.data[1];
    }

    //Sets the pump status to the opposite of whatever it currently is
    public activatePump(pump){
        this.rest.setPumpStatus(pump.name, !this.reservoirs.getPumpStatus(pump.name))
    }

    public getPumps() {
        return this.reservoirs.getAllPumpDetails();
    }

}
