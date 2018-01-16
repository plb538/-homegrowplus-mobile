import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestClient } from '../../provider/rest-client';
import { Grower } from '../../model/grower/grower';
import { Http } from '@angular/http/src/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public Http: Http) {

    let testIP = "127.0.0.1";
    let grower: Grower = new Grower();
    let rest: RestClient = new RestClient(grower, testIP, Http);

    rest.updateAll();

  }

}
