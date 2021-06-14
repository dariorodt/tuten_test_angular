import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface ILookupFields {
  App: string
  Password: string,
}

export interface ISession {
  App: string,
  Password: string,
  SessionData: any
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  session: ISession = {App:"", Password:"", SessionData:""};
  constructor(private http: HttpClient) { }

  login(email: string, fields: ILookupFields): Observable<Object> {
    console.log(fields);
    return this.http.put(`https://dev.tuten.cl/TutenREST/rest/user/${email}`, {}, {
      headers: {App: fields.App, Password: fields.Password}
    });
  }

  getBookings(email: string, current: boolean): Observable<Object> {
    return this.http.get(`https://dev.tuten.cl/TutenREST/rest/user/${email}/bookings?current=${current}`, {
      headers: {
        "Adminemail": this.session.SessionData.email,
        "App": this.session.App,
        "Token": this.session.SessionData.sessionTokenBck
      }
    })
   }
}
