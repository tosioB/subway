import { FoodItem } from "./FoodItem";

export interface TabItem {
  id: number;
  tabTitle: string;
  content: () => FoodItem[];
}
