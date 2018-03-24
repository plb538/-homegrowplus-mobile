import { Component } from '@angular/core';
import { ViewController, NavController, NavParams } from 'ionic-angular';
import { ReservoirManager } from '../../model/managers/reservoir-manager';
import { RestClient } from '../../provider/rest-client';
import { Reservoir } from '../../model/components/reservoir';
import { PumpManager } from '../../model/managers/pump-manager';
import { Pump } from '../../model/components/pump';

@Component({
    selector: 'page-pump-control',
    templateUrl: 'pump-control.html'
})
export class PumpControlPage {

    public pumps: PumpManager;
    public rest: RestClient;

    constructor(public navCtrl: NavController, public viewCtrl: ViewController, public navParams: NavParams) {
        this.pumps = navParams.data[0];
        this.rest = navParams.data[1];
    }

    //Sets the pump status to the opposite of whatever it currently is
    public activatePump(pump) {
        this.rest.setPumpStatus(pump.name, !this.pumps.getPump(pump.name).getPumpStatus());
    }

    public getPumps() {
        let temp = [];
        this.pumps.getAllPumps().forEach(
            (pump: Pump) => {
                temp.push({ name: pump.getPumpName(), pumpStatus: pump.getPumpStatus() });
            }
        );
        return temp;
    }

}
