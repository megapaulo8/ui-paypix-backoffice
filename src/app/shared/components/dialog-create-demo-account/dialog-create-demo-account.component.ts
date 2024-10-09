import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { User } from '../../interfaces/user';

@Component({
  selector: 'app-dialog-create-demo-account',
  templateUrl: './dialog-create-demo-account.component.html',
  styleUrls: ['./dialog-create-demo-account.component.scss']
})
export class DialogCreateDemoAccountComponent {

  public user: User;

  constructor(
    public dialogRef: MatDialogRef<DialogCreateDemoAccountComponent>
  ) {
    this.user = {
      role: 'user',
      email: '',
      phone: '00000000000',
      active: true,
      isDemo: true,
      password: '',
      document: '00000000000',
      username: '',
      isInviter: false,
      isAffiliate: false,
      permissions: [],
      isGameBlock: false,
      isSubAffiliate: false,
      isWithdrawBlock: false
    }
  }

  public createUserDemoAccount(): void {
    if (!this.user.email) return alert('Digite o email completo');
    else if (!this.user.username) return alert('Digite o nome de usuário');
    else if (!this.user.password) return alert('Digite a senha do usuário');
    this.dialogRef.close(this.user);
  }

}
