/* eslint-disable no-useless-escape */
import User from "../Interfaces/user";

type validStatusType = [boolean, string];

export default class userValidation {
  static checkAll({
    name,
    email,
    password
  }: Pick<User, "name" | "email" | "password">): validStatusType {
    const errors: string[] = [];
    const { checkUsername, checkEmail, checkPassword } = userValidation;
    const validationStatus = [checkUsername(name), checkEmail(email), checkPassword(password)];

    validationStatus.forEach(([status, err]) => !status && errors.push(err));

    return errors.length ? [false, errors.join(",\n")] : [true, "valid"];
  }

  static checkUsername(name: string): validStatusType {
    if (!name.trim() || name.trim().length <= 2 || name.trim().length >= 55)
      return [false, "please enter your name"];

    return [true, "valid"];
  }

  static checkEmail(email: string): validStatusType {
    const emailRegex = new RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

    if (!emailRegex.test(email)) return [false, "Email is not valid"];

    return [true, "valid"];
  }

  static checkPassword(password: string): validStatusType {
    const passwordRegex = new RegExp(
      /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/
    );

    if (!passwordRegex.test(password) || password.length > 16)
      return [
        false,
        "Password should have 1 lowercase letter, 1 uppercase letter, 1 number, 1 special character and number of letters must in between 8 to 16"
      ];

    return [true, "valid"];
  }
}
