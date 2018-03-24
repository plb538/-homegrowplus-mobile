import { Component } from '@angular/core';
import { ViewController, NavController, NavParams, AlertController } from 'ionic-angular';
import { RestClient } from '../../provider/rest-client';
import { ScheduleManager } from '../../model/managers/schedule-manager';
import { Schedule } from '../../model/components/schedule';

@Component({
    selector: 'page-schedule-config',
    templateUrl: 'schedule-config.html'
})
export class ScheduleConfigPage {

    public rest: RestClient;

    public schedule: ScheduleManager

    constructor(public navCtrl: NavController, public viewCtrl: ViewController, public navParams: NavParams, public alertCtrl: AlertController) {
        this.schedule = navParams.data[0];
        this.rest = navParams.data[1];
    }

    public getDays() {
        return this.schedule.getAllDays();
    }

    public editDay(day: Schedule) {
        this.alertCtrl.create(
            {
                title: 'Enter schedule details',
                message: 'Enter details below using minutes as the time lengths',
                inputs: [
                    {
                        name: 'waterOnTime',
                        placeholder: 'Time to water'
                    }, {
                        name: 'waterCyclePeriod',
                        placeholder: 'Time between watering cycles'
                    },
                    {
                        name: 'lightOnTime',
                        placeholder: 'Time to light'
                    }, {
                        name: 'lightCyclePeriod',
                        placeholder: 'Time between lighting cycles'
                    }
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        handler: (data) => {
                            //no-op
                        }
                    }, {
                        text: 'OK',
                        handler: (data) => {
                            console.log(data);
                            if (data['waterOnTime'] != '') {
                                day.waterOnTime = data['waterOnTime'];
                            }
                            if (data['waterCyclePeriod'] != '') {
                                day.waterCyclePeriod = data['waterCyclePeriod'];
                            }
                            if (data['lightOnTime'] != '') {
                                day.lightOnTime = data['lightOnTime'];
                            }
                            if (data['lightCyclePeriod'] != '') {
                                day.lightCyclePeriod = data['lightCyclePeriod'];
                            }
                            this.schedule.setDaySchedule(day.day, day);
                            this.rest.setSchedules()
                        }
                    }
                ]
            }
        ).present();
    }

}
