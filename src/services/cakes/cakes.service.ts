import { Injectable } from "@angular/core";
import { AppSettingsService } from "./appSettings.service";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";

// Models
import { CakeModel } from "../models/cake.model";

@Injectable()
export class CakesService {
  public cakes: Array<CakeModel>;

  constructor(
    private http: HttpClient,
    private appSettings: AppSettingsService
  ) {
    // Load our cakes and assign to public var
    this.GetCakes().subscribe(cakes => (this.cakes = cakes));
  }

  public GetCakes(): Observable<Array<CakeModel>> {
    let observable = this.http.get<Array<CakeModel>>(
      `${this.appSettings.urRoot}/cakes`
    );
    observable.subscribe(
      result => {
        console.log(`Loaded ${result.length} Cakes`);
      },
      error => {
        console.error(`Error loading cakes`);
        // Log error message here
      }
    );

    return observable;
  }

  public AddCake(cake: CakeModel): Observable<CakeModel> {
    let observable = this.http.post<CakeModel>(
      `${this.appSettings.urRoot}/cakes`,
      cake
    );

    observable.subscribe(cake => this.cakes.push(cake));

    return observable;
  }
}
