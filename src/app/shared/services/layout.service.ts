import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

import { MenuLayout } from '../interfaces/menu-layout';

import { Http } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  constructor(private http: Http) {}

  public getMenuLayout(): Observable<MenuLayout> {
    // return this.http.getExternal('https://run.mocky.io/v3/8074ca85-dab2-4d32-b262-7ad52e6b99d2');
    const menu: MenuLayout = {
      logo: 'assets/logo.webp',
      buttons: [
        {
          text: 'Início',
          pathTo: 'home',
          iconName: 'fa-solid fa-house',
        },
        {
          text: 'Usuários',
          pathTo: 'users',
          iconName: 'fa-regular fa-user',
        },
        {
          text: 'Top 100',
          pathTo: 'top-users',
          iconName: 'fa-regular fa-star',
        },
        {
          text: 'Central Afiliados',
          pathTo: 'affiliates',
          iconName: 'fa-solid fa-share-nodes',
        },
        {
          text: 'Depósitos',
          pathTo: 'deposits',
          iconName: 'fa-solid fa-upload',
        },
        {
          text: 'Saques',
          pathTo: 'withdrawals',
          iconName: 'fa-solid fa-download',
        },
        {
          text: 'Cupons',
          pathTo: 'coupon',
          iconName: 'fa-solid fa-ticket',
        },
        {
          text: 'Webhooks',
          pathTo: 'webhooks',
          iconName: 'fa-solid fa-circle-nodes',
        },
        {
          text: 'Configuração',
          pathTo: 'settings',
          iconName: 'fa-solid fa-gear',
        },
      ],
    };
    return of(menu);
  }
}
