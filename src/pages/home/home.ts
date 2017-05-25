import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public cards: Array<any> = [];

  constructor(public navCtrl: NavController) {

    this.cards.push({ name: 'Plant Type', value: 'Tomato' });
    this.cards.push({ name: 'Soil Moisture', value: '30%' });
    this.cards.push({ name: 'Exhaust Fan Speed', value: '1200RPM' });
    this.cards.push({ name: 'Intake Fan Speed', value: '1200RPM' });
    this.cards.push({ name: 'Air Temperature', value: '21C' });
    this.cards.push({ name: 'Soil PH', value: '7.5' });

  }

}
