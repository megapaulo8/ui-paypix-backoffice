import { TopUsersInfo } from './top-users-info';

export interface TopWithdrawalsUser extends TopUsersInfo {
  data_top: string,
  withdrawalValue: number;
}
