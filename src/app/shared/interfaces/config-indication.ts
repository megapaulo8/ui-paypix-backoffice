export interface ConfigIndication {
  indication_reward_enabled: boolean;
  pay_on_loss: boolean;
  comission_minimum_value: number;

  indicator_reward: number;
  indicator_reward_type: string;
  indicator_reward_value: number;

  indicated_reward: string;
  indicated_reward_type: string;
  indicated_reward_value: number;
}
