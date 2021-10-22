import mongoose from "mongoose";
import { nanoid } from "nanoid";
import { UserDocument } from "./user.model";

export interface DealDocument extends mongoose.Document {
  initiator: UserDocument["_id"];
  completor: UserDocument["_id"];
  amount: Number;
  createdAt: Date;
  updatedAt: Date;
}

const DealSchema = new mongoose.Schema(
  {
    dealId: {
      type: String,
      required: true,
      unique: true,
      default: () => nanoid(10),
    },
    initiator: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    completor: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    amount: { type: Number, required: true },
  },
  { timestamps: true }
);

const Deal = mongoose.model<DealDocument>("Deal", DealSchema);

export default Deal;
