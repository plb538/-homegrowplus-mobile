import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public cards1: Array<any> = [];
  public cards2: Array<any> = [];
  public waterLevels: Array<any> = [];

  public showDetails1: boolean = false;
  public showDetails2: boolean = false;
  public showDetailsWater:boolean = false;

  constructor(public navCtrl: NavController) {

    this.cards1.push({ name: 'Plant Type', value: 'Tomato' });
    this.cards1.push({ name: 'Air Temperature', value: '21C' });
    this.cards1.push({ name: 'Air Humidity', value: '65%' });
    this.cards1.push({ name: 'pH Level', value: '7.5' });

    this.cards2.push({ name: 'Plant Type', value: 'Strawberry' });
    this.cards2.push({ name: 'Air Temperature', value: '21C' });
    this.cards2.push({ name: 'Air Humidity', value: '65%' });
    this.cards2.push({ name: 'pH Level', value: '6.8' });

    this.waterLevels.push({ name: 'Clean Water', value: '71%' });
    this.waterLevels.push({ name: 'Dirty Water', value: '35%' });
    this.waterLevels.push({ name: 'Nitrogen Mixture', value: '65%' });
    this.waterLevels.push({ name: 'Potassium Mixture', value: '82%' });
    this.waterLevels.push({ name: 'Phosphorus Mixture', value: '18%' });
  }

  public lights1() {
    if (this.cards1['Lights'] === 'On') {
      this.cards1['Lights'] = 'Off'
    }
    else {
      this.cards1['Lights'] = 'On'
    }
  }

  public water1() {
    this.cards1['Last Watered'] = '1m ago'
  }

  public lights2() {
    if (this.cards2['Lights'] === 'On') {
      this.cards2['Lights'] = 'Off'
    }
    else {
      this.cards2['Lights'] = 'On'
    }
  }

  public water2() {
    this.cards2['Last Watered'] = '1m ago'
  }

  public toggleDetails1() {
    this.showDetails1 = !this.showDetails1;
  }

  public toggleDetails2() {
    this.showDetails2 = !this.showDetails2;
  }

  public toggleDetailsWater(){
    this.showDetailsWater = !this.showDetailsWater;
  }
}
