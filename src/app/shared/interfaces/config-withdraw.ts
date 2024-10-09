export interface ConfigWithdraw {
  daily_total_limit: number;
  user_daily_limit: number;
  withdraw_limit: number;
  payment_hours_enabled: boolean;
  payment_hours_start: string;
  payment_hours_end: string;
  daily_withdraw_limit: number;
  min_withdraw_amount: number;
  max_withdraw_amount: number;
  withdraw_fee_type: string;
  withdraw_fee_amount: number;
  rollover_multiplier_enabled: boolean;
  rollover_multiplier_value: string;
}
