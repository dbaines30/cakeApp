import { Injectable } from "@angular/core"

@Injectable()
export class AppSettingsService{

  // Probably populated from config file here
  public urRoot = 'http://ec2-52-209-201-89.eu-west-1.compute.amazonaws.com:5000/api';
}
