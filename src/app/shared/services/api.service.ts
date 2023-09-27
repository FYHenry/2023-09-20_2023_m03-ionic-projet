import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _scheduleDates = {begin: '', end: ''};
  private readonly _url = "https://devfest-nantes-2018-api.cleverapps.io/";

  constructor(private _httpClient: HttpClient) {
    const observer = {
      next: (body: any) => {
        this._scheduleDates = {
          begin: body[0].date,
          end: body[1].date
        }
      },
      error: (err: Error) => {
        console.error('Observer got an error: ' + err);
      },
      complete: () => {
        console.log('Observer got a complete notification.');
      }
    };

    const subscription = this._httpClient.get<any>(`${this._url}schedule`, {
      headers: new HttpHeaders({'Access-Control-Allow-Origin': '*'}),
      observe: "body",
      responseType: "json"
    }).subscribe(observer);

    window.setTimeout(() => subscription.unsubscribe(), 800);
  }

  public get scheduleDates(): {begin: string, end: string}{
    return this._scheduleDates;
  }
}
