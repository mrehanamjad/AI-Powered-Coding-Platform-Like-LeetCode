import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
import { z } from "zod";
import UserDailyActivity from "@/models/userDailyActivity.model";
import { connectionToDatabase } from "@/lib/db";

// Validation Schema
const querySchema = z.object({
  year: z.coerce.number().min(2000).max(2100).optional(),
});

interface RouteContext {
  params: Promise<{ userId: string }>;
}

export async function GET(req: NextRequest, context: RouteContext) {
  try {
    const { userId } = await context.params;
    
    // 1. Connect & Validate
    await connectionToDatabase();
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return NextResponse.json({ error: "Invalid User ID" }, { status: 400 });
    }

    // 2. Parse Year (Default to current year)
    const { searchParams } = new URL(req.url);
    const parseResult = querySchema.safeParse({ year: searchParams.get("year") });
    if (!parseResult.success) {
      return NextResponse.json({ error: "Invalid year" }, { status: 400 });
    }
    
    const year = parseResult.data.year || new Date().getFullYear();

    // 3. Define Date Range (Jan 1 to Dec 31)
    const startDate = new Date(Date.UTC(year, 0, 1));
    const endDate = new Date(Date.UTC(year, 11, 31, 23, 59, 59));

    // 4. Fetch Data
    const activities = await UserDailyActivity.find({
      userId: new mongoose.Types.ObjectId(userId),
      date: { $gte: startDate, $lte: endDate },
    }).lean();

    // 5. Transform Data
    // We Map 'YYYY-MM-DD' -> Data Object for easier lookup on frontend
    const activityMap: Record<string, { count: number; level: number }> = {};
    let totalSubmissions = 0;

    activities.forEach((act) => {
      const dateStr = act.date.toISOString().split("T")[0];
      totalSubmissions += act.submissions;
      activityMap[dateStr] = {
        count: act.submissions,
        level: calculateIntensity(act.submissions),
      };
    });

    return NextResponse.json({
      year,
      totalSubmissions,
      // Return a map so frontend can easily merge with a full year calendar
      data: activityMap, 
    });

  } catch (error) {
    console.error("Activity API Error:", error);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}

// Helper: Calculate Green Intensity (0-4)
function calculateIntensity(count: number): number {
  if (count === 0) return 0;
  if (count <= 2) return 1;
  if (count <= 5) return 2;
  if (count <= 9) return 3;
  return 4;
}