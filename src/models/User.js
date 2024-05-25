import { Schema, model, models } from "mongoose";

const orderSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
    required: true,
  },
  terms: {
    type: boolean,
    required: true,
  },
  source: {
    type: String,
    required: true,
  },
});
export default models.Order || model("User", orderSchema);

// export interface ISignupFormDetails {
//   email: string;
//   password: string;
//   confirmPassword: string;
//   terms: boolean;
// }
