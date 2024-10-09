import { CardInfo } from "./card-dashboard-info";

export interface Card {
  title: string;
  value: number;
  iconUrl: string;
  rangedDate: Date[];
  cardsInfo: CardInfo[];
}