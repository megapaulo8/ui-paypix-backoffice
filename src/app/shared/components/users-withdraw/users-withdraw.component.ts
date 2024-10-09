import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Filter } from '../../interfaces/filter';
import { WithdrawList } from '../../interfaces/withdraws';

@Component({
  selector: 'app-users-withdraw',
  templateUrl: './users-withdraw.component.html',
  styleUrls: ['./users-withdraw.component.scss'],
})
export class UsersWithdrawComponent {
  @Input() public filteredWithdraw: WithdrawList[];
  @Input() public filter: Filter;
  public expandedRows: boolean[] = [];

  @Output() public changePage = new EventEmitter<number>();
  @Output() public toggleExpandChange = new EventEmitter<number>();

  constructor() {
    this.filteredWithdraw = [];
    this.filter = {} as Filter;
  }

  public toggleExpand(index: number) {
    this.expandedRows[index] = !this.expandedRows[index];
    console.log('Evento de expansão emitido com índice:', index);
    this.toggleExpandChange.emit(index); // Emitir o evento de alteração de expansão
  }

  public mapAccountType(type: string): string {
    switch (type) {
      case 'sub':
        return 'Sub Afiliado';
      case 'afiliado':
        return 'Afiliado';
      case 'jogador':
        return 'Jogador';
      default:
        return type;
    }
  }
}
