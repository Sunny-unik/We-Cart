export default interface user {
  _id: string;
  name: string;
  password: string;
  email: string;
  profile: string;
  created: Date;
  __v: number;
  role: "user" | "admin";
  cartItems: string[];
}
