import { TopUsersInfo } from './top-users-info';

export interface TopWinsUser extends TopUsersInfo {
  data_top: string,
  betValue: number;
  totalWin: number;
  netWin: number;
}
