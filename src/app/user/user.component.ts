import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { User } from '../shared/interfaces/user';
import { Alert } from '../shared/interfaces/alert';
import { UsersService } from '../shared/services/users.service';
import { DialogAlertComponent } from '../shared/components/dialog-alert/dialog-alert.component';
import { DialogUserSettingsComponent } from '../shared/components/dialog-user-settings/dialog-user-settings.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public userInfo: User;

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private userService: UsersService,
    private activatedRoute: ActivatedRoute
  ) {
    this.userInfo = {} as User;
  }

  ngOnInit(): void {
    this.getUserInfo(this.activatedRoute.snapshot.paramMap.get('id')!);
  }

  private getUserInfo(id: string): void {
    this.userService.getInfoByUserId(id)
      .subscribe((responseUserInfo: User) => this.userInfo = responseUserInfo);
  }

  private messageAlert(message: string, duration: number): void {
    this.snackBar.open(message, undefined, {duration})
  }

  private changeUserData(user: User): void {
    this.userService.updateByUserId(user._id!, user)
      .subscribe((response: {message: string, user: User}) => {
        this.userInfo = response.user;
        this.messageAlert(response.message, 5000);
      }, (err) => console.log(err));
  }

  private openPopupDialogBlockUser(alert: Alert, user: User): void {
    this.dialog.open(DialogAlertComponent, {
      data: alert,
      panelClass: 'dialog--block-user'
    }).afterClosed().subscribe((status: boolean) => {
      if (status) {
        user.active = !user.active;
        this.changeUserData(user);
      }
    })
  }

  private openPopupDialogChangeUserToAdmin(alert: Alert, user: User): void {
    this.dialog.open(DialogAlertComponent, {
      data: alert,
      panelClass: 'dialog--change-user-to-admin'
    }).afterClosed().subscribe((status: boolean) => {
      if (status) {
        user.role = 'admin';
        this.changeUserData(user);
      }
    })
  }

  private openPopupDialogChangeInfoUser(alert: Alert, user: User): void {
    this.dialog.open(DialogAlertComponent, {
      data: alert,
      panelClass: 'dialog--change-info-user'
    }).afterClosed().subscribe((status: boolean) => {
      if (status) this.changeUserData(user);
    })
  }

  private openPopupUserSettings(user: User): void {
    this.dialog.open(DialogUserSettingsComponent, {
      data: {...user},
      panelClass: 'dialog--settings-user'
    }).afterClosed().subscribe((response: { user: User, action: string }) => {
      if (response && response.action === 'CHANGE_USER_TO_ADMIN') this.openPopupDialogChangeUserToAdmin({ title: 'Tornar administrador?', question: `Você tem certeza que deseja que o usuário ${response.user.username} se torne um administrador?` }, response.user);
      else if (response && response.action === 'change_data') this.openPopupDialogChangeInfoUser({ title: 'Alterar informações?', question: `Você tem certeza que deseja alterar os dados do usuário ${response.user.username}?` }, response.user);
    });
  }

  public clickedEventDefaultButton(event: {user: User, action: string}): void {
    if (event.action === 'Configurações') this.openPopupUserSettings(event.user);
    else if (event.action === 'Bloquear usuário') this.openPopupDialogBlockUser({ title: 'Bloquear usuário?', question:  `Você tem certeza que deseja bloquear o ${event.user.username}?` }, event.user);
    else if (event.action === 'Desbloquear usuário') this.openPopupDialogBlockUser({ title: 'Desbloquear usuário?', question:  `Você tem certeza que deseja desbloquear o ${event.user.username}?` }, event.user);
  }

  public redirectTo(path: string): void {
    this.router.navigateByUrl(path);
  }
}
