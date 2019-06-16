import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateModel } from '../models/translate-model';


@Injectable({
  providedIn: 'root'
})
export class TrasnlateService {

  constructor(private http: HttpClient) { }

  translate(translateModel: TranslateModel) {
    return this.http.post('http://localhost:8080/api/translate/doTranslate', translateModel );
  }
}
