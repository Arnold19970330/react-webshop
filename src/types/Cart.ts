// Olyan mezők, amik tényleg kellenek a kosárhoz
export type CartProduct = {
  id: string | number;
  name: string;
  image: string;
  price: number;
  variant?: string;      
  description?: string;  
  category?: string;     
};
