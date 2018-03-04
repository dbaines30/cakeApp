import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";

import { CakesService } from "../../services/cakes/cakes.service";
import { CakeModel } from "../../models/cake.model";

import { CakeDetailPage } from "../cake-detail/cake-detail";

@Component({
  selector: "page-cakes-listing",
  templateUrl: "cakes-listing.html"
})
export class CakesListingPage {
  cakes: Array<CakeModel>;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private cakeService: CakesService
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad CakesListingPage");
    this.loadCakes();
  }

  loadCakes() {
    this.cakeService.cakesSubject.subscribe(cakes => {
      this.cakes = cakes;
    });
  }

  selectCake(cake: CakeModel) {
    this.navCtrl.push(CakeDetailPage, cake);
  }

  addCake() {
    // Pass null for new Cake Please
    this.navCtrl.push(CakeDetailPage, null);
  }
}
