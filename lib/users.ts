import mongoose from "mongoose";
import User, { IUser } from "@/pages/api/models/User";

let dev = process.env.NODE_ENV !== "production";
let { DEV_URL, PROD_URL } = process.env;
let baseUrl = `${dev ? DEV_URL : PROD_URL}/api/users`;

export const login = async (user: string, pass: string) => {
  User.findOne({ username: user }, function (err: Error, user: IUser) {
    if (err) throw err;

    // test password
    user.comparePasswords(pass, function (err, isMatch) {
      if (err) throw err;
      // TODO: cookie logic
      console.log(pass, isMatch);
    });
  });
};
