import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Ionic2RatingModule } from 'ionic2-rating';

import { MyApp } from './app.component';

// Pages
import { HomePage } from '../pages/home/home';
import { AddCakePage } from '../pages/add-cake/add-cake';
import { CakesListingPage } from '../pages/cakes-listing/cakes-listing';
import { CakeDetailPage } from '../pages/cake-detail/cake-detail';

// components
import { CakeInfoDetailComponent } from '../components/cake-info-detail/cake-info-detail';
import { CakeInfoShortComponent } from '../components/cake-info-short/cake-info-short';

// Services
import { AppSettingsService } from '../services/appSettings/appSettings.service';
import { CakesService } from '../services/cakes/cakes.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddCakePage,
    CakesListingPage,
    CakeDetailPage,
    CakeInfoDetailComponent,
    CakeInfoShortComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    Ionic2RatingModule // Put ionic2-rating module here
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddCakePage,
    CakesListingPage,
    CakeDetailPage,
    CakeInfoDetailComponent,
    CakeInfoShortComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CakesService,
    AppSettingsService
  ]
})
export class AppModule {}
