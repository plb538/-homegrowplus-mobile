import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { RestClient } from '../../provider/rest-client';
import { Grower } from '../../model/grower/grower';
import { Http } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    ip: string;
    grower: Grower;
    rest: RestClient;

    constructor(public navCtrl: NavController, public Http: Http) {
        this.ip = "192.168.2.15";
        this.grower = new Grower();
        this.rest = new RestClient(this.grower, this.ip, Http);

        //rest.updateAll();
    }

    connect(){
        this.navCtrl.setRoot('TraysPage');
    }

}
