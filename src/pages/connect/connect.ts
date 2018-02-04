import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
    selector: 'page-connect',
    templateUrl: 'connect.html'
})
export class ConnectPage {

    public ipAddress: string;
    constructor(public viewCtrl: ViewController) { }

    public connect() {
        this.viewCtrl.dismiss(this.ipAddress);
    }
}
