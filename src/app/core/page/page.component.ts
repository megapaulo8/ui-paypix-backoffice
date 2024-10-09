import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { MenuLayout } from 'src/app/shared/interfaces/menu-layout';
import { LoginService } from 'src/app/shared/services/login.service';
import { LayoutService } from 'src/app/shared/services/layout.service';
import { UserLoggedData } from 'src/app/shared/interfaces/user-logged-data';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  public currentPath: string;
  public menuLayout: MenuLayout;
  public userInfo: UserLoggedData;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private layoutService: LayoutService
  ) {
    this.menuLayout = {
      logo: '',
      buttons: []
    }
    this.currentPath = this.router.url;
    this.userInfo = this.loginService.userLoggedData;
  }

  ngOnInit(): void {
    this.getMenuLayout();
  }

  private getMenuLayout(): void {
    this.layoutService.getMenuLayout()
      .subscribe((menuLayout: MenuLayout) => this.menuLayout = menuLayout);
  }

  public changeRouteTo(path: string) {
    this.currentPath = `/logged/${path}`;
    this.router.navigateByUrl(`/logged/${path}`);
  }

  public userLogout(): void {
    this.loginService.logout();
    this.router.navigateByUrl('/login');
  }
}
