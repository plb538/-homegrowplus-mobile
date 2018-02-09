import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ConnectPage } from '../pages/connect/connect';
import { HomeGrowUnitPage } from "../pages/homegrow-unit/homegrow-unit";
import { TrayPlantPage } from "../pages/tray-plants/tray-plants";
import { PlantControlPage } from '../pages/plant-control/plant-control';
import { PumpControlPage } from '../pages/pump-control/pump-control';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import { RestClient } from '../provider/rest-client';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ConnectPage,
    HomeGrowUnitPage,
    TrayPlantPage,
    PlantControlPage,
    PumpControlPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ConnectPage,
    HomeGrowUnitPage,
    TrayPlantPage,
    PlantControlPage,
    PumpControlPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    RestClient,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
