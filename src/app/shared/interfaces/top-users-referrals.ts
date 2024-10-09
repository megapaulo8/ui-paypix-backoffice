import { TopUsersInfo } from './top-users-info';

export interface TopReferralsUser extends TopUsersInfo {
  data_top: string,
  referralEarnings: number;
  referredQuantity: number;
  referralSource: string;
}
