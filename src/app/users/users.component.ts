import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { User } from '../shared/interfaces/user';
import { Alert } from '../shared/interfaces/alert';
import { Filter } from '../shared/interfaces/filter';
import { Export } from '../shared/interfaces/export';
import { CreateUser } from '../shared/interfaces/create-user';
import { UsersService } from '../shared/services/users.service';
import { HeaderTable } from '../shared/interfaces/header-table';
import { SelectOption } from '../shared/interfaces/select-option';
import { ColumnUsersTable } from '../shared/interfaces/column-users-table';
import { OptionsFilterUsers } from '../shared/interfaces/options-filter-users';
import { DialogUsersExportsComponent } from '../shared/components/dialog-users-exports/dialog-users-exports.component';
import { DialogCreateDemoAccountComponent } from '../shared/components/dialog-create-demo-account/dialog-create-demo-account.component';
import { DialogAlertComponent } from '../shared/components/dialog-alert/dialog-alert.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  public filter: Filter;
  public headerTable: Array<HeaderTable>;
  public columnUsersTable: ColumnUsersTable;
  public filterOptions: OptionsFilterUsers;
  private usersHistoryExported: Array<Export>;

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private usersService: UsersService
  ) {
    this.filter = {
      page: 0,
      filterBy: '',
      textSearch: '',
      itemsPerPage: 5,
      typeAccount: {} as SelectOption,
      keyTypeAccount: {} as SelectOption,
    };
    this.headerTable = [];
    this.usersHistoryExported = [];
    this.filterOptions = {} as OptionsFilterUsers;
    this.columnUsersTable = {} as ColumnUsersTable;
  }

  ngOnInit(): void {
    this.getFilterOptions();
  }

  private getFilterOptions(): void {
    this.filterOptions = {
      typeKeyOptions: {
        iconUrl: 'https://bugdocasino.com/assets/type-key-search-icon.png',
        options: [
          {
            text: 'CPF',
            value: 'document',
          },
          {
            text: 'E-mail',
            value: 'email',
          },
        ],
      },
      typeAccountOptions: {
        iconUrl: 'https://bugdocasino.com/assets/type-acount-icon.png',
        options: [
          {
            text: 'Todos',
            value: 'all',
          },
          {
            text: 'Jogador',
            value: 'isPlayer',
          },
          {
            text: 'Afiliado',
            value: 'isAffiliate',
          },
          {
            text: 'Sub-Afiliado',
            value: 'isSubAffiliate',
          },
          {
            text: 'Demo',
            value: 'isDemo',
          },
          {
            text: 'Administrador',
            value: 'isAdmin',
          },
          {
            text: 'Indicadores',
            value: 'isInviter',
          },
        ],
      },
    };
    this.filter.keyTypeAccount = this.filterOptions.typeKeyOptions.options[0];
    this.filter.typeAccount = this.filterOptions.typeAccountOptions.options[0];
    this.getUsersHistoryExported();
    // this.usersService.optionsFilter()
    //   .subscribe((responseOptionsFilter: OptionsFilterUsers) => {
    //     this.filterOptions = responseOptionsFilter;
    //     this.filter.keyTypeAccount = responseOptionsFilter.typeKeyOptions.options[0];
    //     this.filter.typeAccount = responseOptionsFilter.typeAccountOptions.options[0];
    //     this.getUsersHistoryExported();
    //   });
  }

  private getUsersHistoryExported(): void {
    this.usersHistoryExported = [
      {
        _id: '2424BJBC428B9C2',
        downloaded: true,
        action: {
          _id: 'dwadwadawdwadaw',
          text: 'Listagem',
        },
      },
      {
        _id: '2523228B43432123',
        downloaded: true,
        action: {
          _id: 'dwadwadawdwadaw',
          text: 'Listagem',
        },
      },
    ];
    this.getHeaderTableUsers();
    // this.usersService.usersExported()
    //   .subscribe((responseUsersExported: Array<Export>) => {
    //     this.usersHistoryExported = responseUsersExported;
    //     this.getHeaderTableUsers();
    //   });
  }

  private getHeaderTableUsers(): void {
    this.headerTable = [
      {
        text: 'Usuário',
        filterBy: '-username',
      },
      {
        text: 'Documento',
        filterBy: '-document',
      },
      {
        text: 'Conta',
        filterBy: '',
      },
      {
        text: 'Status',
        filterBy: '',
      },
      {
        text: 'Ações para usuário',
        filterBy: '',
      },
      {
        text: '',
        filterBy: '',
      },
    ];
    this.getTableUsers(this.filter);
    // this.usersService.getHeaderTableUsers()
    //   .subscribe((responseHeaderTableUsers: Array<HeaderTable>) => {
    //     this.headerTable = responseHeaderTableUsers;
    //     this.getTableUsers(this.filter);
    //   });
  }

  private getTableUsers(filter: Filter): void {
    this.usersService
      .getTableUsers(filter)
      .subscribe((responseColumnUsersTable: ColumnUsersTable) => {
        this.columnUsersTable = responseColumnUsersTable;
        this.filter = {
          ...this.filter,
          totalItems: responseColumnUsersTable.totalItems,
        };
      });
  }

  private openPopupDialogBlockUser(alert: Alert, user: User): void {
    this.dialog
      .open(DialogAlertComponent, {
        data: alert,
        panelClass: 'dialog--block-user',
      })
      .afterClosed()
      .subscribe((status: boolean) => {
        if (status) this.changeActiveUserStatus(user);
      });
  }

  private changeActiveUserStatus(user: User): void {
    user.active = !user.active;
    this.usersService.updateByUserId(user._id!, user).subscribe(
      () => {},
      (err) => console.log(err)
    );
  }

  private createUser(user: User): void {
    this.usersService.createUser(user).subscribe(
      (userCreated: { message: string; user: User }) => {
        if (userCreated.message) {
          this.messageAlert(userCreated.message, 3000);
          this.router.navigateByUrl(`logged/user/${userCreated.user._id}`);
        }
      },
      (err) => console.log(err)
    );
  }

  private messageAlert(message: string, duration: number): void {
    this.snackBar.open(message, undefined, { duration });
  }

  public searchFilterByText(value: string): void {
    this.filter.textSearch = value;
    this.getTableUsers(this.filter);
  }

  public selectedKeyTypeAccount(keyTypeAccount: SelectOption): void {
    this.filter.keyTypeAccount = keyTypeAccount;
    this.getTableUsers(this.filter);
  }

  public selectedTypeAccount(keyTypeAccount: SelectOption): void {
    this.filter.typeAccount = keyTypeAccount;
    this.getTableUsers(this.filter);
  }

  public selectedFilterBy(filter: any): void {
    this.filter.filterBy = filter.filterBy.includes('-')
      ? filter.filterBy.replace('-', '')
      : `-${filter.filterBy}`;
    this.headerTable[filter.index].filterBy = this.filter.filterBy;
    this.getTableUsers(this.filter);
  }

  public changeFilterPage(page: number): void {
    this.filter.page = page;
    this.getTableUsers(this.filter);
  }

  public openCreateDemoAccountPopup(): void {
    this.dialog
      .open(DialogCreateDemoAccountComponent, {
        panelClass: 'dialog--create-demo-account',
      })
      .afterClosed()
      .subscribe((user: User) => {
        if (user) this.createUser(user);
      });
  }

  public openUsersExportedPopup(): void {
    this.dialog
      .open(DialogUsersExportsComponent, {
        data: this.usersHistoryExported,
        panelClass: 'dialog--exported-users',
      })
      .afterClosed()
      .subscribe((user: CreateUser) => {
        if (user) console.log('Usuário cadastrado');
        else console.log('Usuário não cadastrado');
      });
  }

  public clickedUserEventTable(event: { user: User; action: string }): void {
    if (event.action === 'Ver usuário')
      this.router.navigateByUrl(`logged/user/${event.user._id}`);
    else if (event.action === 'Bloquear usuário')
      this.openPopupDialogBlockUser(
        {
          title: 'Bloquear usuário?',
          question: `Você tem certeza que deseja bloquear o ${event.user.username}?`,
        },
        event.user
      );
    else if (event.action === 'Desbloquear usuário')
      this.openPopupDialogBlockUser(
        {
          title: 'Desbloquear usuário?',
          question: `Você tem certeza que deseja desbloquear o ${event.user.username}?`,
        },
        event.user
      );
  }

  public openExportUsersPopup(): void {
    console.log('Abrir popup para exportar usuários');
  }
}
