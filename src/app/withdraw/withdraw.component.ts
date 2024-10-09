import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/services/users.service';
import { WithdrawList } from '../shared/interfaces/withdraws';
import { Filter } from '../shared/interfaces/filter';
import { SelectOption } from '../shared/interfaces/select-option';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.scss'],
})
export class WithdrawComponent implements OnInit {
  public selectedSearch: string;
  public selectedAType: string;
  public selectedStatus: string;

  public withdraw: WithdrawList[];
  public searchTerm: string;
  public currentPage: number;
  public filter: Filter;
  public filteredWithdraw: WithdrawList[];

  public playersValues: number;
  public affiliatesValues: number;
  public subAffiliatesValues: number;
  public allValues: number;
  public playersQuantity: number;
  public affiliatesQuantity: number;
  public subAffiliatesQuantity: number;
  public currentDate: Date;

  public startDate: string;
  public endDate: string;

  public expandedRows: number[] = [];

  constructor(private usersService: UsersService) {
    this.filter = {
      page: 0,
      filterBy: '',
      textSearch: '',
      itemsPerPage: 5,
      typeAccount: {} as SelectOption,
      keyTypeAccount: {} as SelectOption,
    };
    this.currentPage = 0;

    this.selectedSearch = 'internalid';
    this.selectedAType = 'todos';
    this.selectedStatus = 'todos';

    this.withdraw = [];
    this.filteredWithdraw = [];
    this.searchTerm = '';

    this.subAffiliatesQuantity = 0;
    this.subAffiliatesValues = 0;
    this.affiliatesQuantity = 0;
    this.affiliatesValues = 0;
    this.playersQuantity = 0;
    this.playersValues = 0;

    this.allValues = 0;

    this.currentDate = new Date();

    this.startDate = '';
    this.endDate = '';
  }

  ngOnInit(): void {
    this.getWithdraw(this.filter);
  }

  public searchCategory: { [key: string]: string } = {
    internalid: 'ID Interno',
    email: 'E-mail',
  };
  public typeAccount: { [key: string]: string } = {
    afiliado: 'Afiliado',
    sub: 'Sub Afiliado',
    jogador: 'Jogador',
  };
  public statusType: { [key: string]: string } = {
    pago: 'Pago',
    pendente: 'Pendente',
    cancelado: 'Cancelado',
  };

  public onStartDateSelected(event: any) {
    const selectedDate = event.target.value;
    this.startDate = selectedDate;
    this.applyFilters();
  }

  public onEndDateSelected(event: any) {
    const selectedDate = event.target.value;
    this.endDate = selectedDate ? selectedDate + 'T23:59:59' : '';
    this.applyFilters();
  }

  public onAccountType(event: any) {
    const selectedValue = event.target.value || '';
    this.selectedAType = selectedValue;
    this.applyFilters();
  }

  public onStatusChange(event: any) {
    const selectedValue = event.target.value || '';
    this.selectedStatus = selectedValue;
    this.applyFilters();
  }

  public onSearchChange(event: any) {
    const selectedValue = event.target.value || '';
    this.selectedSearch = selectedValue;
    this.applyFilters();
  }

  public onSearchInput(event: any): void {
    const inputValue = event.target.value || '';
    this.searchTerm = inputValue;
    this.applyFilters();
  }

  private getWithdraw(filter: Filter): void {
    this.usersService.getWithdraw(filter).subscribe((data: WithdrawList[]) => {
      const lastWithdrawDate =
        data.length > 0 ? new Date(data[0].date) : new Date();
      this.currentDate = lastWithdrawDate;

      this.calculateTotalValues(data);

      this.filteredWithdraw = data.sort((a, b) => b.id - a.id);
      this.filter = { ...this.filter, totalItems: data.length };
      this.applyFilters();
    });
  }

  private applyFilters() {
    let filteredWithdraw = this.filteredWithdraw.slice();

    if (this.startDate && this.endDate) {
      filteredWithdraw = this.filteredData(filteredWithdraw);
    }
    if (this.searchTerm.trim() !== '') {
      filteredWithdraw = this.searchWithdraw(filteredWithdraw);
    }
    if (this.selectedAType.trim() !== '') {
      filteredWithdraw = this.searchAType(filteredWithdraw);
    }
    if (this.selectedStatus.trim() !== '') {
      filteredWithdraw = this.searchStatus(filteredWithdraw);
    }

    this.calculateTotalValues(filteredWithdraw);
    const playersQuantity = this.getQuantity(filteredWithdraw, 'jogador');
    const affiliatesQuantity = this.getQuantity(filteredWithdraw, 'afiliado');
    const subAffiliatesQuantity = this.getQuantity(filteredWithdraw, 'sub');

    this.withdraw = filteredWithdraw;
    this.playersQuantity = playersQuantity;
    this.affiliatesQuantity = affiliatesQuantity;
    this.subAffiliatesQuantity = subAffiliatesQuantity;

    this.withdraw = filteredWithdraw;
  }
  private getQuantity(data: WithdrawList[], accountType: string): number {
    return data.filter((withdraw) => withdraw.account_type === accountType)
      .length;
  }

  public onToggleExpandChange(index: number) {
    const currentIndex = this.expandedRows.indexOf(index);
    if (currentIndex === -1) {
      this.expandedRows.push(index);
    } else {
      this.expandedRows.splice(currentIndex, 1);
    }
    this.applyFilters();
  }

  private filteredData(withdraw: WithdrawList[]): WithdrawList[] {
    return withdraw.filter((item: WithdrawList) => {
      const withdrawDate = new Date(item.date);
      const startDate = this.startDate ? new Date(this.startDate) : null;
      const endDate = this.endDate ? new Date(this.endDate) : null;

      if (startDate && withdrawDate < startDate) {
        return false;
      }

      if (endDate && withdrawDate > endDate) {
        return false;
      }

      return true;
    });
  }

  private calculateTotalValues(data: WithdrawList[]): void {
    this.playersValues = 0;
    this.affiliatesValues = 0;
    this.subAffiliatesValues = 0;
    this.allValues = 0;

    data.forEach((withdraw) => {
      switch (withdraw.account_type) {
        case 'jogador':
          this.playersValues += withdraw.value;
          break;
        case 'afiliado':
          this.affiliatesValues += withdraw.value;
          break;
        case 'sub':
          this.subAffiliatesValues += withdraw.value;
          break;
      }
      this.allValues += withdraw.value;
    });
  }

  private searchWithdraw(withdraw: WithdrawList[]): WithdrawList[] {
    return withdraw.filter((item: WithdrawList) => {
      if (this.selectedSearch === 'internalid') {
        return item.id.toString().includes(this.searchTerm);
      } else if (this.selectedSearch === 'email') {
        return item.email.includes(this.searchTerm);
      }
      return true;
    });
  }

  private searchAType(withdraw: WithdrawList[]): WithdrawList[] {
    return withdraw.filter((item: WithdrawList) => {
      if (this.selectedAType === 'jogador') {
        return item.account_type.toString().includes(this.selectedAType);
      }
      if (this.selectedAType === 'sub') {
        return item.account_type.toString().includes(this.selectedAType);
      }
      if (this.selectedAType === 'afiliado') {
        return item.account_type.toString().includes(this.selectedAType);
      }
      return true;
    });
  }

  private searchStatus(withdraw: WithdrawList[]): WithdrawList[] {
    return withdraw.filter((item: WithdrawList) => {
      if (this.selectedStatus === 'pago') {
        return item.status.toString().includes(this.selectedStatus);
      }
      if (this.selectedStatus === 'pendente') {
        return item.status.toString().includes(this.selectedStatus);
      }
      if (this.selectedStatus === 'cancelado') {
        return item.status.toString().includes(this.selectedStatus);
      }

      return true;
    });
  }
}
