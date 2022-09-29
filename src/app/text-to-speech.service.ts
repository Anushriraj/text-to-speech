import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TextToSpeechService {

  constructor(private _http: HttpClient) { }

  async registerInstance(): Promise<any> {
    try {
      return await lastValueFrom(
        this._http.get('https://restcountries.com/v3.1/name/India')
      );
    } catch (error) {
      return error;
    }
  }
}
