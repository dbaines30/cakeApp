import { Component, Input } from '@angular/core';
import { CakeModel } from '../../models/cake.model';

@Component({
  selector: 'cake-info-detail',
  templateUrl: 'cake-info-detail.html'
})
export class CakeInfoDetailComponent {

  @Input()
  public cake: CakeModel;
  public isEditing: boolean;

   constructor() {
    console.log('Hello CakeInfoDetailComponent Component');
  }



}
