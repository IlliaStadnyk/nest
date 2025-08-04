export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
}

export interface Order {
  id: string;
  clientId: string;
}

export interface Client {
  id: string;
  name: string;
  address: string;
}
