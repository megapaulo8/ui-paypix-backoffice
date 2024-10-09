import { TopUsersInfo } from './top-users-info';

export interface TopDepositsUser extends TopUsersInfo {
  data_top: string,
  depositValue: number;
}
