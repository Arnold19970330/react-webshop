export type Variant = { label: string; value: string };

export type TestProduct = {
  id: string | number;
  name: string;
  image: string;
  price: number;
  inStock: boolean;
  variants?: Variant[];
};
