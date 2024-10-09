import { Banners } from './banners';
import { BonusConfig } from './config-bonus';
import { ConfigWithdraw } from './config-withdraw';
import { ConfigDeposits } from './config-deposits';
import { ConfigIndication } from './config-indication';
import { ConfigSupport } from './config-support';
import { ConfigTrackingPixels } from './config-tracking-pixels';

export interface SiteData {
  id: number;
  logo: string;
  favicon: string;
  deposit_config: ConfigDeposits;
  withdraw_config: ConfigWithdraw;
  bonus_config: BonusConfig;
  indication_config: ConfigIndication;
  support_config: ConfigSupport;
  tracking_config: ConfigTrackingPixels
  banners: Banners[];
}
