import { TopUsersInfo } from './top-users-info';

export interface TopLossesUser extends TopUsersInfo {
  data_top: string,
  betValue: number;
  totalLosses: number;
  netLosses: number;
}
