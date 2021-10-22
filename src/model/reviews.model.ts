import mongoose from "mongoose";
import { nanoid } from "nanoid";
import { UserDocument } from "./user.model";

interface IObjects {
  id: number;
  title: string;
  value: number;
}

export interface ReviewDocument extends mongoose.Document {
  user: UserDocument["_id"];
  reviews: Array<IObjects>;
  createdAt: Date;
  updatedAt: Date;
}

const ReviewSchema = new mongoose.Schema(
  {
    reviewId: {
      type: String,
      required: true,
      unique: true,
      default: () => nanoid(10),
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    reviews: {
      type: Array,
      default: [
        { id: 0, title: "overall_rating", value: 0 },
        { id: 1, title: "accommodation", value: 0 },
        { id: 2, title: "fastness", value: 0 },
        { id: 3, title: "trust", value: 0 },
      ],
    },
  },
  { timestamps: true }
);

const Review = mongoose.model<ReviewDocument>("Review", ReviewSchema);

export default Review;
