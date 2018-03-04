import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CakeModel } from '../../models/cake.model';
import { CakesService } from '../../services/cakes/cakes.service';

@Component({
  selector: 'page-cake-detail',
  templateUrl: 'cake-detail.html',
})
export class CakeDetailPage {

  cake: CakeModel;

  constructor(public navCtrl: NavController, public navParams: NavParams, private cakesService: CakesService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CakeDetailPage');

    // Get cake from params
    this.cake = this.navParams.data as CakeModel;
  }

  cakeUpdated(cake: CakeModel){
    this.cakesService.AddCake(cake);
    this.navCtrl.pop();
  }

}
