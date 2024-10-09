import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Filter } from '../shared/interfaces/filter';
import { UsersService } from '../shared/services/users.service';
import { HeaderTable } from '../shared/interfaces/header-table';
import { SelectOption } from '../shared/interfaces/select-option';
import { InfoDepositTable } from '../shared/interfaces/info-deposit-table';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.scss'],
})
export class DepositComponent implements OnInit {
  public filter: Filter;
  public headerTable: HeaderTable[];
  public depositos: InfoDepositTable[];

  public filteredDeposits: InfoDepositTable[];
  public selectedStatus: string;
  public startDate?: Date;
  public endDate?: Date;

  public lastDate: string;
  public totalVolume: number;
  public quantityOfDeposits: number;
  public averageTicket: number;

  constructor(private dialog: MatDialog, private usersService: UsersService) {
    this.filter = {
      page: 0,
      filterBy: '',
      textSearch: '',
      totalItems: 34,
      itemsPerPage: 6,
      typeAccount: {} as SelectOption,
      keyTypeAccount: {} as SelectOption,
    };
    this.headerTable = [
      {
        text: 'Usuário',
        filterBy: '-username',
      },
      {
        text: 'ID Interno',
        filterBy: '-id',
      },
      {
        text: 'Valor',
        filterBy: '-valor',
      },
      {
        text: 'Data',
        filterBy: '',
      },
      {
        text: 'Status',
        filterBy: '',
      },
    ];

    this.depositos = [
      {
        id: 1,
        nome_completo: 'Fulano de Tal',
        email: 'fulano@example.com',
        id_deposito: 'b1e3231cbb33c355c3c4bb53',
        valor: 100.0,
        data_deposito: '2024-03-15T10:30:00Z',
        status: 2000,
      },
      {
        id: 2,
        nome_completo: 'Fulano de Tal',
        email: 'fulano@example.com',
        id_deposito: 'b1e3231cbb33c355c3c4bb53',
        valor: 150.0,
        data_deposito: '2024-03-14T09:45:00Z',
        status: 2000,
      },
      {
        id: 3,
        nome_completo: 'Beltrano Silva',
        email: 'beltrano@example.com',
        id_deposito: 'b1e3231cbb33c355c3c4bb53',
        valor: 75.5,
        data_deposito: '2024-03-16T14:20:00Z',
        status: 2000,
      },
      {
        id: 4,
        nome_completo: 'Beltrano Silva',
        email: 'beltrano@example.com',
        id_deposito: 'b1e3231cbb33c355c3c4bb53',
        valor: 1375.5,
        data_deposito: '2024-03-19T16:10:32Z',
        status: 1000,
      },
      {
        id: 5,
        nome_completo: 'Beltrano Silva',
        email: 'beltrano@example.com',
        id_deposito: 'b1e3231cbb33c355c3c4bb53',
        valor: 375.5,
        data_deposito: '2024-03-19T16:12:12Z',
        status: 2000,
      },
      {
        id: 6,
        nome_completo: 'Beltrano Silva',
        email: 'beltrano@example.com',
        id_deposito: 'b1e3231cbb33c355c3c4bb53',
        valor: 320.1,
        data_deposito: '2024-03-21T11:17:42Z',
        status: 2000,
      },
      {
        id: 7,
        nome_completo: 'Beltrano Silva',
        email: 'beltrano@example.com',
        id_deposito: 'b1e3231cbb33c355c3c4bb53',
        valor: 100.0,
        data_deposito: '2024-03-21T14:42:36Z',
        status: 2000,
      },
      {
        id: 8,
        nome_completo: 'Beltrano Silva',
        email: 'beltrano@example.com',
        id_deposito: 'b1e3231cbb33c355c3c4bb53',
        valor: 55.0,
        data_deposito: '2024-03-24T16:22:56Z',
        status: 2000,
      },
      {
        id: 9,
        nome_completo: 'Beltrano Silva',
        email: 'beltrano@example.com',
        id_deposito: 'b1e3231cbb33c355c3c4bb53',
        valor: 55.0,
        data_deposito: '2024-03-25T16:22:56Z',
        status: 1000,
      },
      {
        id: 10,
        nome_completo: 'Beltrano Silva',
        email: 'beltrano@example.com',
        id_deposito: 'b1e3231cbb33c355c3c4bb53',
        valor: 55.0,
        data_deposito: '2024-03-26T16:22:56Z',
        status: 1000,
      },
      {
        id: 11,
        nome_completo: 'Beltrano Silva',
        email: 'beltrano@example.com',
        id_deposito: 'b1e3231cbb33c355c3c4bb53',
        valor: 55.0,
        data_deposito: '2024-03-26T16:22:56Z',
        status: 2000,
      }
    ];
    this.filteredDeposits = [...this.depositos];
    this.averageTicket = 0;
    this.totalVolume = 0;
    this.quantityOfDeposits = 0;
    this.selectedStatus = 'todos';
    this.lastDate = '';
  }

  ngOnInit(): void {
    this.getHeaderTableDeposit();
    this.calculateSummary();
  }

  private getHeaderTableDeposit(): void {
    this.usersService
      .getHeaderTableDeposit()
      .subscribe((response: HeaderTable[]) => {
        this.headerTable = response;
        this.getTableDeposit();
      });
  }

  private getTableDeposit(): void {
    this.usersService.getDeposit().subscribe((response: InfoDepositTable[]) => {
      this.depositos = response;
      this.filteredDeposits = [...this.depositos];

      this.updateFilteredData();
      this.calculateSummaryBasedOnLastDate();
    });
  }

  private calculateSummaryBasedOnLastDate(): void {
    let filteredDeposits: InfoDepositTable[] = [...this.filteredDeposits];

    // Aplica a filtragem por status
    if (this.selectedStatus !== 'todos') {
      const isPaid = this.selectedStatus === 'pagos';
      filteredDeposits = filteredDeposits.filter((deposit) =>
        isPaid ? deposit.status === 2000 : deposit.status === 1000
      );
    }

    // Aplica a filtragem por data, se startDate e endDate estiverem definidos
    if (this.startDate && this.endDate) {
      // Ajusta o endDate para 23:59:59 apenas se ele estiver definido
      const endOfDay = new Date(this.endDate);
      endOfDay.setHours(23, 59, 59, 999);

      filteredDeposits = filteredDeposits.filter((deposit) => {
        const depositDate = new Date(deposit.data_deposito);

        return depositDate >= this.startDate! && depositDate <= endOfDay;
      });

      // Atualiza o endDate para 23:59:59 apenas se ele estiver definido
      this.endDate.setHours(23, 59, 59, 999);
    }

    // Calcula o resumo com base nos depósitos filtrados
    this.quantityOfDeposits = filteredDeposits.length;
    this.totalVolume = filteredDeposits.reduce(
      (total, deposit) => total + deposit.valor,
      0
    );
    this.averageTicket =
      this.quantityOfDeposits > 0
        ? this.totalVolume / this.quantityOfDeposits
        : 0;

    // Atualiza lastDate com base nos depósitos filtrados
    this.lastDate = this.getLastDate(filteredDeposits);
  }

  public applyStatusFilter(event: any): void {
    const status = event.target.value;
    this.selectedStatus = status;
    this.updateFilteredData();
  }

  public handleDateRangeSelected(startDate: Date, endDate: Date): void {
    this.startDate = startDate;

    // Ajusta o endDate para 23:59:59
    endDate.setHours(23, 59, 59, 999);

    this.endDate = endDate;
    this.updateFilteredData();
  }

  public getStartDate(): Date | undefined {
    return this.startDate;
  }

  public getEndDate(): Date | undefined {
    return this.endDate;
  }

  private updateFilteredData(): void {
    let filteredData: InfoDepositTable[] = [...this.depositos];

    if (this.selectedStatus !== 'todos') {
      const isPaid = this.selectedStatus === 'pagos';
      filteredData = this.depositos.filter((deposit) =>
        isPaid ? deposit.status === 2000 : deposit.status === 1000
      );
    }

    if (this.startDate && this.endDate) {
      filteredData = filteredData.filter((deposit) => {
        const depositDate = new Date(deposit.data_deposito);
        return depositDate >= this.startDate! && depositDate <= this.endDate!;
      });
    }

    this.filteredDeposits = filteredData;
    this.calculateSummary();
    this.calculateSummaryBasedOnLastDate();
  }

  private getLastDate(deposits: InfoDepositTable[]): string {
    if (deposits.length > 0) {
      const lastDeposit = deposits.reduce((prev, current) =>
        prev.data_deposito > current.data_deposito ? prev : current
      );
      return lastDeposit.data_deposito;
    }
    return '';
  }

  private calculateSummary(): void {
    this.quantityOfDeposits = this.filteredDeposits.length;
    this.totalVolume = this.filteredDeposits.reduce(
      (total, deposit) => total + deposit.valor,
      0
    );
    this.averageTicket =
      this.quantityOfDeposits > 0
        ? this.totalVolume / this.quantityOfDeposits
        : 0;
    this.lastDate = this.getLastDate(this.filteredDeposits);
  }

  public searchFilterByText(value: string): void {
    this.filter.textSearch = value;
  }

  public selectedKeyTypeAccount(keyTypeAccount: SelectOption): void {
    this.filter.keyTypeAccount = keyTypeAccount;
  }

  public selectedTypeAccount(keyTypeAccount: SelectOption): void {
    this.filter.typeAccount = keyTypeAccount;
  }

  public selectedFilterBy(filter: any): void {
    this.filter.filterBy = filter.filterBy.includes('-')
      ? filter.filterBy.replace('-', '')
      : `-${filter.filterBy}`;
    this.headerTable[filter.index].filterBy = this.filter.filterBy;
  }

  public changeFilterPage(page: number): void {
    this.filter.page = page;
  }
}
