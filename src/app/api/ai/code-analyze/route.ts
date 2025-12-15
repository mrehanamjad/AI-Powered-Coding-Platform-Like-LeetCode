import { aiCodeAnalyzer } from "@/lib/agent";
import { AuthOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { z } from "zod";

// 1. Validation Schema
const requestSchema = z.object({
  code: z.string().min(1, "Code is required"),
  problemStatement: z.string().min(1, "Problem statement is required"),
  language: z.string().default("JavaScript"),
});


export async function POST(req: Request) {
  try {

    const session = await getServerSession(AuthOptions);

    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Validate Input
    const body = await req.json();
    const parsed = requestSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid input", details: parsed.error.format() },
        { status: 400 }
      );
    }

    const { code, problemStatement, language } = parsed.data;


    const raw = await aiCodeAnalyzer(code, problemStatement, language);

    const formattedResult = {
      timeComplexity: raw.tc || "Unknown",
      spaceComplexity: raw.sc || "Unknown",
      bugs: Array.isArray(raw.bugs) ? raw.bugs : [],
      optimizations: Array.isArray(raw.opt) ? raw.opt : [],
      feedback: raw.msg || "No feedback provided.",
    } ;

    return NextResponse.json(formattedResult);

  } catch (error) {
    console.error("AI Analysis Error:", error);
    return NextResponse.json(
      { error: "Failed to analyze code with AI" },
      { status: 500 }
    );
  }
}