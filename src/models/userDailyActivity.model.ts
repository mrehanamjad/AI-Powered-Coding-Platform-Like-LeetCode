// models/userDailyActivity.model.ts
import mongoose, { Schema, Document, model, models } from "mongoose";

export interface UserDailyActivityI extends Document {
  userId: mongoose.Types.ObjectId;
  date: Date;
  submissions: number;
  accepted: number;
}

const UserDailyActivitySchema = new Schema<UserDailyActivityI>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", index: true, required: true },
    date: { type: Date, index: true, required: true },
    submissions: { type: Number, default: 0 },
    accepted: { type: Number, default: 0 },
  },
  { timestamps: true }
);

// unique per day per user
UserDailyActivitySchema.index({ userId: 1, date: 1 }, { unique: true });

const UserDailyActivity =
  models.UserDailyActivity ||
  model<UserDailyActivityI>("UserDailyActivity", UserDailyActivitySchema);

export default UserDailyActivity;
