/* eslint-disable no-useless-escape */

export interface validStatusInterface {
  status: boolean;
  message: string;
}

export interface registerUserInterface {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default class userValidation {
  static checkAll({
    name,
    email,
    password,
    confirmPassword
  }: registerUserInterface): validStatusInterface {
    const errors: string[] = [];
    const { checkName, checkEmail, checkPassword, comparePasswords } = userValidation;
    const validationStatus = [
      checkName(name),
      checkEmail(email),
      checkPassword(password),
      comparePasswords(password, confirmPassword)
    ];

    validationStatus.forEach(({ status, message }) => !status && errors.push(message));

    return errors.length
      ? { status: false, message: errors.join(",\n") }
      : { status: true, message: "" };
  }

  static checkName(name: string): validStatusInterface {
    const nameRegex = /^([a-zA-Z ]){2,55}$/;

    if (!nameRegex.test(name))
      return {
        status: false,
        message: "Name length must in between 1 to 56 and do not contain any special characters"
      };

    return { status: true, message: "" };
  }

  static checkEmail(email: string): validStatusInterface {
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!email.trim().length) return { status: false, message: "Email is required" };
    if (!emailRegex.test(email)) return { status: false, message: "Email is not valid" };

    return { status: true, message: "" };
  }

  static checkPassword(password: string): validStatusInterface {
    const passwordRegex =
      /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/;

    if (!passwordRegex.test(password))
      return {
        status: false,
        message:
          "Password should have 1 lowercase letter, 1 uppercase letter, 1 number, 1 special character and number of letters must in between 8 to 16"
      };

    return { status: true, message: "" };
  }

  static comparePasswords(password: string, confirmPassword: string): validStatusInterface {
    if (password !== confirmPassword) return { status: false, message: "Passwords do not match" };

    return { status: true, message: "" };
  }
}
