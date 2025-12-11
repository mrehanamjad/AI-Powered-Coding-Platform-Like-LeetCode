import mongoose from "mongoose";
import UserDailyActivity from "@/models/userDailyActivity.model";

interface RecordActivityParams {
  userId: string;
  status: string; // "accepted", "wrongAnswer", etc.
}

export async function recordDailyActivity({ userId, status }: RecordActivityParams) {
  // 1. Normalize date to midnight (00:00:00) to ensure uniqueness per day
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const isAccepted = status.toLowerCase() === "accepted";

  // 2. Atomic Upsert (Find & Update, or Insert if not found)
  try {
    await UserDailyActivity.findOneAndUpdate(
      { 
        userId: new mongoose.Types.ObjectId(userId), 
        date: today 
      },
      { 
        $inc: { 
          submissions: 1, 
          accepted: isAccepted ? 1 : 0 
        } 
      },
      { upsert: true, new: true } // Create if doesn't exist
    );
  } catch (error) {
    console.error("Failed to record daily activity:", error);
    // Non-blocking error: don't throw, just log. 
    // We don't want to fail a submission just because the graph update failed.
  }
}