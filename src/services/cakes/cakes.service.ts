import { Injectable } from "@angular/core";
import { AppSettingsService } from "../appSettings/appSettings.service";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/Rx";
import { HttpClient } from "@angular/common/http";

// Models
import { CakeModel } from "../../models/cake.model";

@Injectable()
export class CakesService {
  private cakes: Array<CakeModel>;

  constructor(
    private http: HttpClient,
    private appSettings: AppSettingsService
  ) {
    // Load our cakes and assign to public var
    this.getCakes();
  }

  public cakesSubject = new BehaviorSubject<Array<CakeModel>>(null);

  public AddCake(cake: CakeModel): Observable<CakeModel> {
    let observable = this.http.post<CakeModel>(
      `${this.appSettings.urRoot}/cakes`,
      cake
    );

    observable.subscribe(cake => {
      this.cakes.push(cake);
      this.cakesSubject.next(this.cakes);
    });

    return observable;
  }

  private getCakes() {
    this.http
      .get<Array<CakeModel>>(`${this.appSettings.urRoot}/cakes`)
      .subscribe(
        result => {
          this.cakes = result;
          this.cakesSubject.next(this.cakes);
          console.log(`Loaded ${result.length} Cakes`);
        },
        error => {
          console.error(`Error loading cakes`);
          // Log error message here
        }
      );
  }
}
