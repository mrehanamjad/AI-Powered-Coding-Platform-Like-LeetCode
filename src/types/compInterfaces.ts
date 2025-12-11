 export interface StatsOverviewPrompI {
   xp: number;
  score: number;
  level: number;
  maxStreak: number;
  currentStreak: {
    value: number;
    date: Date;
  };
  totalSubmissions: number;
  problemSolved: {
    easy: number;
    medium: number;
    hard: number;
  };
}