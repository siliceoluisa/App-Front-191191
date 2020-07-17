import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(protected http: HttpClient) { }

  getUserLogin(){
    return this.http.get('https://randomuser.me/api/?results=10');
  }

  getUserDash(){
    return this.http.get('https://randomuser.me/api/?results=100');
  }

  getUser(){
    return this.http.get(' https://randomuser.me/api/?results=300');
  }
}
