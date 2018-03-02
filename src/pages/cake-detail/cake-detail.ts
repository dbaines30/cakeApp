import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CakeModel } from '../../models/cake.model';

@Component({
  selector: 'page-cake-detail',
  templateUrl: 'cake-detail.html',
})
export class CakeDetailPage {

  cake: CakeModel;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CakeDetailPage');

    // Get cake from params
    this.cake = this.navParams.data as CakeModel;
  }

}
