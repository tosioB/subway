export interface FoodItem {
  id: number;
  category: string;
  subCategory?: string;
  korName: string;
  engName: string;
  image: string;
  description: string;
  label?: "SUBPICK" | "NEW" | "PARTY";
  baseRecipe?: string[];
  extraRecipe?: string[];
  nutrition?: {
    weight: { value: number | string };
    calories: { value: number };
    protein: { value: number; dailyPercent?: number };
    saturatedFat: { value: number; dailyPercent?: number };
    sugar: { value: number; dailyPercent?: number };
    sodium: { value: number; dailyPercent?: number };
  }[];
  price15cm?: number;
  price30cm?: number;
  etc?: string;
  detailPage: boolean;
}
