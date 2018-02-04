import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ConnectPage } from '../pages/connect/connect';
import { HomeGrowUnitPage } from "../pages/homegrow-unit/homegrow-unit";
import { TrayPlantPage } from "../pages/tray-plants/tray-plants";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import { RestClient } from '../provider/rest-client';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ConnectPage,
    HomeGrowUnitPage,
    TrayPlantPage,
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
    ListPage,
    ConnectPage,
    HomeGrowUnitPage,
    TrayPlantPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    RestClient,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
