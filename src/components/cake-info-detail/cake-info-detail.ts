import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChange
} from "@angular/core";
import { CakeModel } from "../../models/cake.model";

@Component({
  selector: "cake-info-detail",
  templateUrl: "cake-info-detail.html"
})
export class CakeInfoDetailComponent implements OnChanges {
  boundCake: CakeModel;

  @Input() public cake: CakeModel;

  @Output() cakeUpdated = new EventEmitter<CakeModel>();

  public isEditing: boolean;

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    if (changes.cake && !changes.cake.firstChange) {
      this.loadCake(changes.cake.currentValue);
    }
  }

  constructor() {
    console.log("Hello CakeInfoDetailComponent Component");
  }

  saveCake(){
    this.cakeUpdated.emit(this.boundCake);
  }

  private loadCake(cake: CakeModel) {
    if (!cake.id) {
      this.isEditing = true;
      this.boundCake = new CakeModel();
    } else {
      this.isEditing = false;
      this.boundCake = Object.assign({}, cake);
    }
  }
}
