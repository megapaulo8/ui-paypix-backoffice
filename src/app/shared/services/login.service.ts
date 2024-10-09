import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { Http } from './http.service';
import { UserData } from 'src/environments/environment';
import { FormLoginUser } from '../interfaces/form-login-user';
import { UserLoggedData } from '../interfaces/user-logged-data';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: Http) { }

  public set userLoggedData(userLoggedData: UserLoggedData) {
    localStorage.setItem(UserData, JSON.stringify(userLoggedData));
  }

  public get userLoggedData(): UserLoggedData {
    return JSON.parse(localStorage.getItem(UserData)!);
  }

  public login(formLoginUser: FormLoginUser): Observable<UserLoggedData> {
    // return this.http.getExternal('https://run.mocky.io/v3/90b5b168-988f-422e-836f-2b50dd0065fc');
    const simulatedUserData: UserLoggedData = {
      email: formLoginUser.email,
      token: 'b0236532150f4a9f601e2b2a7e9f0e4a',
      username: 'SD Vale',
    };
    return of(simulatedUserData);
  }

  public logout(): void {
    localStorage.clear();
  }
}
