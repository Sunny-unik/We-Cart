export default interface product {
  _id: string;
  title: string;
  imageName: string;
  price: number;
  rating: number;
  category: string;
  segment: string;
}

export interface error {
  message: string;
}
