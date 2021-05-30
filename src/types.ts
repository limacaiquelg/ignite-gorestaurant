export interface FoodItem {
  id: number;
  name: string;
  description: string;
  price: number;
  available: boolean;
  image: string;
}

export type AddFoodItem = Omit<FoodItem, 'id' | 'available'>;
export type EditFoodItem = Omit<FoodItem, 'available'>;
