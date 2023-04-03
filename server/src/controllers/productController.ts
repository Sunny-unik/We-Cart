import { Request, Response } from "express";
import productSchema from "../models/productSchema";
import productType from "src/interfaces/product";

export default class ProductController {
  static async getProducts(req: Request, res: Response) {
    await productSchema
      .find()
      .select(req.body.query ? req.body.query : "_id title rating price imageName category segment")
      .then((products: productType[]) => res.json({ total: products.length, data: products }))
      .catch((err: Error) => console.log(err));
  }

  static async createProduct(req: Request, res: Response) {
    const product = await new productSchema(req.body);
    product
      .save()
      .then((product: productType) => res.status(200).json({ data: product }))
      .catch((err: Error) => console.log(err));
  }
}
