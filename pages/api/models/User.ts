import { ObjectId } from "mongodb";
import { Schema, model, Document } from "mongoose";
import bcrypt from "bcrypt";

const SALT_WORK_FACTOR = 10;

export interface IUser extends Document {
  email: string;
  username: string;
  password: string;
  comparePasswords(
    candidatePassword: string,
    next: (err: Error | null, same?: boolean | null) => void
  ): void;
}

const UserSchema = new Schema<IUser>({
  username: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 32,
    index: { unique: true },
  },
  password: {
    type: String,
    required: true,
  },
});

UserSchema.pre("save", function (this: IUser, next) {
  let user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified("password")) return next();

  bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
    if (err) return next(err);

    // hash the password using the new salt
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) return next(err);
      // override the cleartext password with the hashed one
      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = function (
  candidatePassword: string | Buffer,
  cb: (err: Error | null, same?: Boolean | null) => void
) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

const User = model<IUser>("User", UserSchema);

export default User;
