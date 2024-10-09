import { TopUsersInfo } from './top-users-info';

export interface TopBetsUsers extends TopUsersInfo {
  data_top: string,
  betValue: number;
  totalWin: number;
  netWin: number;
}
