import { Request, Response } from "express";
import userSchema from "../models/userSchema";

export default class UserController {
  static async getUsers(req: Request, res: Response) {
    await userSchema
      .find()
      .select(req.body.query ? req.body.query : "_id name email password created profile")
      .then((users: any) => res.json({ total: users.length, data: users }))
      .catch((err: any) => console.log(err));
  }

  static async createUser(req: Request, res: Response) {
    const user = await new userSchema(req.body);
    user
      .save()
      .then((user: any) => res.status(200).json({ data: user }))
      .catch((err: any) => console.log(err));
  }
}
