import { ListConfigBonus } from "./config-bonuslist";

export interface BonusConfig {
  houseBonusSystemEnabled: boolean;
  allFreeRoundsWithBonusEnabled: boolean;
  bonus_list: ListConfigBonus[];
}