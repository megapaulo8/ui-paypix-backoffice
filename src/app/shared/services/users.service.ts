import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { Http } from './http.service';
import { User } from '../interfaces/user';
import { Export } from '../interfaces/export';
import { Filter } from '../interfaces/filter';
import { HeaderTable } from '../interfaces/header-table';
import { ColumnUsersTable } from '../interfaces/column-users-table';
import { OptionsFilterUsers } from '../interfaces/options-filter-users';
import { SiteData } from '../interfaces/config-site';
import { InfoDepositTable } from '../interfaces/info-deposit-table';
import { Coupon } from '../interfaces/coupon';

import { TopBetsUsers } from '../interfaces/top-users-bets';
import { TopDepositsUser } from '../interfaces/top-users-deposit';
import { TopReferralsUser } from '../interfaces/top-users-referrals';
import { TopWinsUser } from '../interfaces/top-users-wins';
import { TopWithdrawalsUser } from '../interfaces/top-users-withdrawals';
import { TopLossesUser } from '../interfaces/top-users-losses';
import { WithdrawList } from '../interfaces/withdraws';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private readonly endpoint: string = '/user';
  private readonly server: string = 'http://localhost:3000';

  constructor(private http: Http) {}

  private users: ColumnUsersTable = {
    totalItems: 2,
    items: [
      {
        _id: '1',
        role: 'a',
        email: 'teste@email.com',
        phone: '12991422047',
        active: true,
        isDemo: false,
        document: '1231',
        username: 'Tainan',
        isInviter: true,
        createdDate: '2024-09-17T10:10:10Z',
        isAffiliate: true,
        isGameBlock: false,
        isSubAffiliate: false,
        isWithdrawBlock: false,
        permissions: ['Admin'],
      },
      {
        _id: '2',
        role: 'b',
        email: 'teste2@email.com',
        phone: '12991422047',
        active: true,
        isDemo: false,
        document: '1231',
        username: 'Rezende',
        isInviter: true,
        createdDate: '2024-09-17T10:10:10Z',
        isAffiliate: true,
        isGameBlock: false,
        isSubAffiliate: false,
        isWithdrawBlock: false,
        permissions: ['isAdmin'],
      },
    ],
  };


  public optionsFilter(): Observable<OptionsFilterUsers> {
    const options: OptionsFilterUsers = {
      typeKeyOptions: {
        iconUrl: '',
        options: [
          { text: '1', value: 'dasdsa' },
          { text: '1', value: 'dasdsa' },
        ],
      },
      typeAccountOptions: {
        iconUrl: '',
        options: [
          { text: '1', value: 'todes' },
          { text: '1', value: 'todes' },
        ],
      },
    };
    return of(options);
  }

  public usersExported(): Observable<Array<Export>> {
    return this.http.getExternal(
      'https://run.mocky.io/v3/260b16d3-7a78-4f1b-afc5-1820b1387187'
    );
  }

  public getHeaderTableUsers(): Observable<Array<HeaderTable>> {

    const tableHeaders: HeaderTable[] = [
      { text: 'User ID', filterBy: 'userId' },
      { text: 'Name', filterBy: 'name' },
      { text: 'Email', filterBy: 'email' },
    ];

    return of(tableHeaders);
  }

  public getTableUsers(filter: Filter): Observable<ColumnUsersTable> {
    return of(this.users);
  }

  public getInfoByUserId(_id: string): Observable<User> {
    return new Observable(observer => {
      this.getTableUsers({} as Filter).subscribe(users => {
        const user = users.items.find(user => user._id === _id);
        observer.next(user);
        observer.complete();
      });
    });
  }

  public updateByUserId(
    _id: string,
    user: User
  ): Observable<{ message: string; user: User }> {
    return this.http.put(`${this.endpoint}/${_id}`, user);
  }

  public createUser(user: User): Observable<{ message: string; user: User }> {
    return this.http.post(`${this.endpoint}`, user);
  }

  public getSiteData(): Observable<SiteData[]> {
    const sitecfg: SiteData[] = [
      {
        id: 1,
        logo: 'assets/logo2.webp',
        favicon: 'favicon.ico',
        deposit_config: {
          deposit_min: 0.01,
          deposit_max: 1000,
          deposit_limit: false,
        },
        withdraw_config: {
          daily_total_limit: 10,
          user_daily_limit: 100,
          withdraw_limit: 10000,
          payment_hours_enabled: false,
          payment_hours_start: '19:00:00Z',
          payment_hours_end: '22:00:00Z',
          daily_withdraw_limit: 10,
          min_withdraw_amount: 0.01,
          max_withdraw_amount: 10000,
          withdraw_fee_type: '',
          withdraw_fee_amount: 1,
          rollover_multiplier_enabled: true,
          rollover_multiplier_value: '10',
        },
        bonus_config: {
          houseBonusSystemEnabled: true,
          allFreeRoundsWithBonusEnabled: false,
          bonus_list: [
            {
              bonus_id: 1,
              bonus_name: 'Bonus 1',
              bonus_description: 'Descrição bonus 1',
              bonus_status: true,
              bonus_amount: 20,
            },
          ],
        },
        indication_config: {
          indication_reward_enabled: true,
          pay_on_loss: true,
          comission_minimum_value: 20,

          indicator_reward: 20,
          indicator_reward_type: 'saldo',
          indicator_reward_value: 10,

          indicated_reward: 'valor fixo',
          indicated_reward_type: 'saldo',
          indicated_reward_value: 10,
        },
        support_config: {
          support_enabled: false,
          support_service_id: 'string',
        },
        tracking_config: {
          tracking_enabled: true,
          tracking_list: [
            {
              track_id: 1,
              track_name: 'Google Tag Manager',
              track_description: 'Gerenciador de tags do Google O Google Analytics permite medir o ROI de publicidade, bem como rastrear sites e aplicativos em Flash, vídeo e redes sociais.',
              track_logo: 'https://static-00.iconduck.com/assets.00/google-tag-manager-icon-2048x2048-y375dol4.png',
              track_embed: 'embed',
            },
            {
              track_id: 2,
              track_name: 'Pixel de Meta',
              track_description: 'Pixel da Meta: mensurar, otimizar e fazer o redirecionamento',
              track_logo: 'https://cdn-icons-png.flaticon.com/512/6033/6033716.png',
              track_embed: 'embed',
            },
          ],
        },
        banners: [
          {
            id: 1,
            img: 'https://i.imgur.com/LItgcVr.png',
            url: 'https://i.imgur.com/LItgcVr.png',
          },
        ],
      },
    ];

    return of(sitecfg);
  }

  public getHeaderTableDeposit(): Observable<Array<HeaderTable>> {
    return this.http.getExternal(
      'https://run.mocky.io/v3/6f21198e-6ea6-4006-bb24-c3d4f1e83337'
    );
  }

  public getDeposit(): Observable<InfoDepositTable[]> {
    return this.http.getExternal(
      'https://run.mocky.io/v3/dce9b05a-b424-4f39-a4df-6830866ae3b6'
    );
  }
  
  public getTopDeposits(): Observable<TopDepositsUser[]> {
    const topDeposit: TopDepositsUser[] = [
      {
        id: 1,
        name: 'João da Silva',
        email: 'joao@example.com',
        data_top: '2024-03-20T00:32:12Z',
        depositValue: 500,
      },
      {
        id: 2,
        name: 'Maria Oliveira',
        email: 'maria@example.com',
        data_top: '2024-03-22T00:32:12Z',
        depositValue: 700,
      },
      {
        id: 3,
        name: 'José Santos',
        email: 'jose@example.com',
        data_top: '2024-03-25T12:42:12Z',
        depositValue: 1000,
      },
      {
        id: 4,
        name: 'Ana Rodrigues',
        email: 'ana@example.com',
        data_top: '2024-03-25T15:42:12Z',
        depositValue: 400,
      },
      {
        id: 5,
        name: 'Carlos Almeida',
        email: 'carlos@example.com',
        data_top: '2024-03-27T18:18:52Z',
        depositValue: 800,
      },
    ];

    return of(topDeposit);
    //return this.http.getExternal(`${this.server}/api/deposits`);
  }

  public getTopBets(): Observable<TopBetsUsers[]> {
    const topBets: TopBetsUsers[] = [
      {
        id: 1,
        name: 'João da Silva',
        email: 'joao@example.com',
        data_top: '2024-03-20T00:32:12Z',
        betValue: 200,
        totalWin: 500,
        netWin: 300,
      },
      {
        id: 2,
        name: 'Maria Oliveira',
        email: 'maria@example.com',
        data_top: '2024-03-22T00:32:12Z',
        betValue: 300.5,
        totalWin: 800,
        netWin: 497.5,
      },
      {
        id: 3,
        name: 'José Santos',
        email: 'jose@example.com',
        data_top: '2024-03-23T02:32:12Z',
        betValue: 250,
        totalWin: 400,
        netWin: 150,
      },
      {
        id: 4,
        name: 'Ana Rodrigues',
        email: 'ana@example.com',
        data_top: '2024-03-25T12:42:12Z',
        betValue: 180,
        totalWin: 320,
        netWin: 140,
      },
      {
        id: 5,
        name: 'Carlos Almeida',
        email: 'carlos@example.com',
        data_top: '2024-03-27T18:18:52Z',
        betValue: 500,
        totalWin: 1200,
        netWin: 700,
      },
      {
        id: 6,
        name: 'Tainan Rezende',
        email: 'tainan@email.com',
        data_top: '2024-03-28T20:30:52Z',
        betValue: 10000,
        totalWin: 9500,
        netWin: 19500,
      },
    ];

    return of(topBets);
    //return this.http.getExternal(`${this.server}/api/bets`);
  }

  public getTopWithdrawals(): Observable<TopWithdrawalsUser[]> {
    const topWithdrawals: TopWithdrawalsUser[] = [
      {
        id: 1,
        name: 'João da Silva',
        email: 'joao@example.com',
        data_top: '2024-03-20T00:32:12Z',
        withdrawalValue: 400,
      },
      {
        id: 2,
        name: 'Maria Oliveira',
        email: 'maria@example.com',
        data_top: '2024-03-20T20:32:12Z',
        withdrawalValue: 600,
      },
      {
        id: 3,
        name: 'José Santos',
        email: 'jose@example.com',
        data_top: '2024-03-22T00:32:12Z',
        withdrawalValue: 300,
      },
      {
        id: 4,
        name: 'Ana Rodrigues',
        email: 'ana@example.com',
        data_top: '2024-03-25T12:42:12Z',
        withdrawalValue: 700,
      },
      {
        id: 5,
        name: 'Carlos Almeida',
        email: 'carlos@example.com',
        data_top: '2024-03-27T18:18:52Z',
        withdrawalValue: 900,
      },
    ];
    return of(topWithdrawals);
    return this.http.getExternal(`${this.server}/api/withdrawals`);
  }

  public getTopWins(): Observable<TopWinsUser[]> {
    const topWins: TopWinsUser[] = [
      {
        id: 1,
        name: 'João da Silva',
        email: 'joao@example.com',
        data_top: '2024-03-20T00:32:12Z',
        betValue: 500,
        totalWin: 1200,
        netWin: 700,
      },
      {
        id: 2,
        name: 'Maria Oliveira',
        email: 'maria@example.com',
        data_top: '2024-03-20T00:32:12Z',
        betValue: 700,
        totalWin: 1500,
        netWin: 800,
      },
      {
        id: 3,
        name: 'José Santos',
        email: 'jose@example.com',
        data_top: '2024-03-22T00:32:12Z',
        betValue: 600,
        totalWin: 1300,
        netWin: 700,
      },
      {
        id: 4,
        name: 'Ana Rodrigues',
        email: 'ana@example.com',
        data_top: '2024-03-25T12:42:12Z',
        betValue: 450,
        totalWin: 900,
        netWin: 450,
      },
      {
        id: 5,
        name: 'Carlos Almeida',
        email: 'carlos@example.com',
        data_top: '2024-03-27T18:18:52Z',
        betValue: 800,
        totalWin: 1800,
        netWin: 1000,
      },
    ];

    return of(topWins);
    //return this.http.getExternal(`${this.server}/api/topwins`);
  }

  public getTopLosses(): Observable<TopLossesUser[]> {
    const topLosses: TopLossesUser[] = [
      {
        id: 1,
        name: 'João da Silva',
        email: 'joao@example.com',
        data_top: '2024-03-20T00:32:12Z',
        betValue: 500,
        totalLosses: 1000,
        netLosses: 500,
      },
      {
        id: 2,
        name: 'Maria Oliveira',
        email: 'maria@example.com',
        data_top: '2024-03-20T00:32:12Z',
        betValue: 700,
        totalLosses: 1400,
        netLosses: 700,
      },
      {
        id: 3,
        name: 'José Santos',
        email: 'jose@example.com',
        data_top: '2024-03-22T00:32:12Z',
        betValue: 600,
        totalLosses: 1200,
        netLosses: 600,
      },
      {
        id: 4,
        name: 'Ana Rodrigues',
        email: 'ana@example.com',
        data_top: '2024-03-25T12:42:12Z',
        betValue: 450,
        totalLosses: 900,
        netLosses: 450,
      },
      {
        id: 5,
        name: 'Carlos Almeida',
        email: 'carlos@example.com',
        data_top: '2024-03-27T18:18:52Z',
        betValue: 800,
        totalLosses: 1600,
        netLosses: 800,
      },
    ];
    return of(topLosses);
    //return this.http.getExternal(`${this.server}/api/toplosses`);
  }

  public getTopReferrals(): Observable<TopReferralsUser[]> {
    const topReferrals: TopReferralsUser[] = [
      {
        id: 1,
        name: 'João da Silva',
        email: 'joao@example.com',
        data_top: '2024-03-20T00:32:12Z',
        referralEarnings: 2000,
        referredQuantity: 100,
        referralSource: 'Abner Silva',
      },
      {
        id: 2,
        name: 'Maria Oliveira',
        email: 'maria@example.com',
        data_top: '2024-03-21T00:32:12Z',
        referralEarnings: 2500,
        referredQuantity: 120,
        referralSource: 'Lucas Oliveira',
      },
      {
        id: 3,
        name: 'José Santos',
        email: 'jose@example.com',
        data_top: '2024-03-22T00:32:12Z',
        referralEarnings: 1800,
        referredQuantity: 80,
        referralSource: 'Mariana Santos',
      },
      {
        id: 4,
        name: 'Ana Rodrigues',
        email: 'ana@example.com',
        data_top: '2024-03-25T12:42:12Z',
        referralEarnings: 2200,
        referredQuantity: 140,
        referralSource: 'Pedro Carvalho',
      },
      {
        id: 5,
        name: 'Carlos Almeida',
        email: 'carlos@example.com',
        data_top: '2024-03-27T18:18:52Z',
        referralEarnings: 1900,
        referredQuantity: 90,
        referralSource: 'Fernanda Oliveira',
      },
    ];

    return of(topReferrals);
    //return this.http.getExternal(`${this.server}/api/referrals`);
  }

  public getWithdraw(filter: Filter): Observable<WithdrawList[]> {
    const withdraws: WithdrawList[] = [
      {
        id: 1,
        name: 'Tainan Rezende',
        email: 'tainan@email.com',
        ggr: -100,
        value: 5000,
        account_type: 'jogador',
        method: 'PIX',
        key: 'CPF',
        u_key: '20000000000',
        date: '2024-04-02T11:56:32Z',
        status: 'pago',
      },
      {
        id: 2,
        name: 'Tainan Rezende',
        email: 'tainan@email.com',
        ggr: 150,
        value: 3000,
        account_type: 'jogador',
        method: 'PIX',
        key: 'Celular',
        u_key: '12991422047',
        date: '2024-04-02T11:58:32Z',
        status: 'pago',
      },
      {
        id: 3,
        name: 'André Marques',
        email: 'andre@email.com',
        ggr: 320,
        value: 1000,
        account_type: 'jogador',
        method: 'PIX',
        key: 'Chave aleatória',
        u_key: 'f40ca0b5-22a0-4ed9-8758-0fdf54ecf428',
        date: '2024-04-02T12:32:12Z',
        status: 'estornado',
      },
      {
        id: 4,
        name: 'Gabriel Silva',
        email: 'gabriel@email.com',
        ggr: 550,
        value: 1200,
        account_type: 'jogador',
        method: 'Boleto Bancário',
        key: '',
        u_key: '',
        date: '2024-03-30T09:15:00Z',
        status: 'pago',
      },
      {
        id: 5,
        name: 'Maria Santos',
        email: 'maria@email.com',
        ggr: 200,
        value: 600,
        account_type: 'jogador',
        method: 'PIX',
        key: 'Celular',
        u_key: '21987654321',
        date: '2024-04-01T17:30:45Z',
        status: 'pago',
      },
      {
        id: 6,
        name: 'Lucas Oliveira',
        email: 'lucas@email.com',
        ggr: 300,
        value: 900,
        account_type: 'jogador',
        method: 'Transferência Bancária',
        key: '',
        u_key: '',
        date: '2024-04-02T08:20:00Z',
        status: 'pago',
      },
      {
        id: 7,
        name: 'Juliana Pereira',
        email: 'juliana@email.com',
        ggr: 750,
        value: 1500,
        account_type: 'Afiliado',
        method: 'Transferência Bancária',
        key: '',
        u_key: '',
        date: '2024-03-29T14:00:00Z',
        status: 'pago',
      },
      {
        id: 8,
        name: 'Rafaela Lima',
        email: 'rafaela@email.com',
        ggr: 400,
        value: 1000,
        account_type: 'jogador',
        method: 'PIX',
        key: 'Celular',
        u_key: '21987654321',
        date: '2024-03-31T11:45:00Z',
        status: 'pago',
      },
      {
        id: 9,
        name: 'Pedro Almeida',
        email: 'pedro@email.com',
        ggr: 480,
        value: 900,
        account_type: 'jogador',
        method: 'Boleto Bancário',
        key: '',
        u_key: '',
        date: '2024-03-28T16:30:00Z',
        status: 'cancelado',
      },
      {
        id: 10,
        name: 'Carla Mendes',
        email: 'carla@email.com',
        ggr: 600,
        value: 1500,
        account_type: 'afiliado',
        method: 'PIX',
        key: 'Celular',
        u_key: '21987654321',
        date: '2024-04-02T10:00:00Z',
        status: 'pendente',
      },
      {
        id: 11,
        name: 'Victor Borges',
        email: 'victor@email.com',
        ggr: -200,
        value: 1720,
        account_type: 'sub',
        method: 'PIX',
        key: 'Celular',
        u_key: '12991553931',
        date: '2024-04-03T11:34:00Z',
        status: 'pago',
      },
      {
        id: 11,
        name: 'Victor Borges',
        email: 'victor@email.com',
        ggr: -200,
        value: 1720,
        account_type: 'sub',
        method: 'PIX',
        key: 'Celular',
        u_key: '12991553931',
        date: '2024-04-03T11:34:00Z',
        status: 'pago',
      },
      {
        id: 12,
        name: 'Renato Gabriel',
        email: 'renato@email.com',
        ggr: -500,
        value: 1230.5,
        account_type: 'afiliado',
        method: 'PIX',
        key: 'Celular',
        u_key: '12991553232',
        date: '2024-04-03T11:34:00Z',
        status: 'pago',
      },
    ];
    return of(withdraws);
    //return this.http.getExternal(`${this.server}/api/withdraw`)
  }

  public getCoupons(): Observable<Coupon[]> {
    const coupons: Coupon[] = [
      {
        id: 1,
        name: 'Cupom Croupier',
        usageCount: 7,
        adminName: 'Croupier Infiltrado',
        adminEmail: 'croupier@email.com.br',
        creationTime: '2024-04-04T12:21:02Z',
        expirationTime: '2024-04-05T18:00:00Z',
        maxUsage: 0,
        code: 'infiltrado',
        status: 'active',
        description: 'Desconto de R$ 100 em todos os produtos.'
      },
      {
        id: 2,
        name: 'Haunted House',
        usageCount: 32,
        adminName: 'Gvvsta',
        adminEmail: 'gvvsta@haunted.com',
        creationTime: '2024-04-02T12:21:02Z',
        expirationTime: '2024-05-02T23:59:59Z',
        maxUsage: 100,
        code: 'haunted',
        status: 'active',
        description: 'Desconto de 10% em todos os produtos.'
      },
      {
        id: 3,
        name: 'Spring Sale',
        usageCount: 10,
        adminName: 'Marketing Team',
        adminEmail: 'marketing@company.com',
        creationTime: '2024-03-15T09:00:00Z',
        expirationTime: '2024-04-15T23:59:59Z',
        maxUsage: 50,
        code: 'SPRING50',
        status: 'active',
        description: 'Up to 50% off all items!'
      },
      {
        id: 4,
        name: 'Summer Discount',
        usageCount: 1,
        adminName: 'Sales Team',
        adminEmail: 'sales@company.com',
        creationTime: '2024-02-01T10:00:00Z',
        expirationTime: '2024-03-30T23:59:59Z',
        maxUsage: 100,
        code: 'SUMMER25',
        status: 'active',
        description: 'This is a great discount for the summer season'
      },
      {
        id: 5,
        name: 'Winter Sales',
        usageCount: 1,
        adminName: 'Tenda',
        adminEmail: 'contato@tenda.com.br',
        creationTime: '2024-02-01T10:00:00Z',
        expirationTime: '',
        maxUsage: 0,
        code: 'WINTER25',
        status: 'active',
        description: 'Desconto em produtos para o inverno.'
      }
    ];
    return of(coupons);

    // return this.http.getExternal(
    //   'https://run.mocky.io/v3/38afab2b-f6ae-49ba-868e-78b8b60c4f6e'
    // );
  }
}
