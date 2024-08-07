export type ItemsType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
  quantity?: number;
};

export type actionType = {
  type: string;
  id: number;
};
