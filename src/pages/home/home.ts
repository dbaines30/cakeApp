import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

// Pages
import { CakesListingPage } from "../cakes-listing/cakes-listing";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  constructor(public navCtrl: NavController) {}

  public goCakeList() {
    console.info('Navigating to Cakes List');
    this.navCtrl.push(CakesListingPage);
  }
}
