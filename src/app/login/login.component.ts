import { Router } from '@angular/router';
import { Component } from '@angular/core';

import { LoginService } from '../shared/services/login.service';
import { FormLoginUser } from '../shared/interfaces/form-login-user';
import { UserLoggedData } from '../shared/interfaces/user-logged-data';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public formLoginUser: FormLoginUser;

  constructor(
    private router: Router,
    private loginService: LoginService,
  ) {
    this.formLoginUser = {
      email: '',
      password: ''
    }
  }

  public loginUser(formLoginUser: FormLoginUser): void {
    if (!formLoginUser.email) alert('Digite o seu email!');
    else if (!formLoginUser.password) alert('Digite a sua senha!');
    else {
      this.loginService.login(formLoginUser)
        .subscribe((responseUserLoggedData: UserLoggedData) => {
          this.loginService.userLoggedData = responseUserLoggedData;
          this.router.navigateByUrl('/logged')
        })
    }
  }

}
