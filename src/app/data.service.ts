import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  getdata() {
    return this.http.get('http://codeforces.com/api/user.info?handles=jayakrishna_g');
  }
}
