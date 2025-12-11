// "use client"

// import { Card } from "@/components/ui/card"
// import { StatsOverviewPrompI } from "@/types/compInterfaces"
// import { TrendingUp, Code, Trophy, Zap, CheckCircle2, Target, Flame } from "lucide-react"
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts"


// export function StatsOverview({ data }: { data: StatsOverviewPrompI }) {
//   const totalProblems = data.problemSolved.easy + data.problemSolved.medium + data.problemSolved.hard;
//   const difficultyData = [
//   { name: "Easy", value: data.problemSolved.easy, fill: "oklch(0.72 0.14 150)" },
//   { name: "Medium", value: data.problemSolved.medium , fill: "oklch(0.52 0.16 250)" },
//   { name: "Hard", value: data.problemSolved.hard, fill: "oklch(0.45 0.12 50)" },
// ]

//   return (
//     <div className="space-y-4">
//       {/* Top stats cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
//         <Card className="bg-card border-border p-6 hover:shadow-lg transition-shadow">
//           <div className="flex items-start justify-between">
//             <div>
//               <p className="text-sm text-muted-foreground mb-1">Total Submissions</p>
//               <p className="text-2xl sm:text-3xl font-bold text-foreground">{data.totalSubmissions}</p>
//             </div>
//             <div className="p-3 bg-primary/10 rounded-lg">
//               <Code className="w-6 h-6 text-primary" />
//             </div>
//           </div>
//         </Card>

//          <Card className="bg-card border-border p-6 hover:shadow-lg transition-shadow">
//           <div className="flex items-start justify-between">
//             <div>
//               <p className="text-sm text-muted-foreground mb-1">Total Solved Problems</p>
//               <p className="text-2xl sm:text-3xl font-bold text-foreground">{totalProblems}</p>
//             </div>
//             <div className="p-3 bg-primary/10 rounded-lg">
//               <CheckCircle2 className="w-6 h-6 text-primary" />
//             </div>
//           </div>
//         </Card>

//          <Card className="bg-card border-border p-6 hover:shadow-lg transition-shadow">
//           <div className="flex items-start justify-between">
//             <div>
//               <p className="text-sm text-muted-foreground mb-1">Score</p>
//               <p className="text-2xl sm:text-3xl font-bold text-foreground">{data.score}</p>
//             </div>
//             <div className="p-3 bg-accent/50 rounded-lg">
//               <Target className="w-6 h-6 text-white/60" />
//             </div>
//           </div>
//         </Card>

//         <Card className="bg-card border-border p-6 hover:shadow-lg transition-shadow">
//           <div className="flex items-start justify-between">
//             <div>
//               <p className="text-sm text-muted-foreground mb-1">Level</p>
//               <p className="text-2xl sm:text-3xl font-bold text-foreground">{data.level}</p>
//             </div>
//             <div className="p-3 bg-accent/60 rounded-lg">
//               <TrendingUp className="w-6 h-6 text-white/80" />
//             </div>
//           </div>
//         </Card>

//          <Card className="bg-card border-border p-6 hover:shadow-lg transition-shadow">
//           <div className="flex items-start justify-between">
//             <div>
//               <p className="text-sm text-muted-foreground mb-1">Max Streak</p>
//               <p className="text-2xl sm:text-3xl font-bold text-foreground">{data.maxStreak}</p>
//             </div>
//             <div className="p-3 bg-green-500/10 rounded-lg">
//               <Flame className="w-6 h-6 text-green-500" />
//             </div>
//           </div>
//         </Card>

//         <Card className="bg-card border-border p-6 hover:shadow-lg transition-shadow">
//           <div className="flex items-start justify-between">
//             <div>
//               <p className="text-sm text-muted-foreground mb-1">Current Streak</p>
//               <p className="text-2xl sm:text-3xl font-bold text-foreground">{data.currentStreak.value}</p>
//             </div>
//             <div className="p-3 bg-orange-500/10 rounded-lg">
//               <Flame className="w-6 h-6 text-orange-500" />
//             </div>
//           </div>
//         </Card>

//         <Card className="bg-card border-border p-6 hover:shadow-lg transition-shadow">
//           <div className="flex items-start justify-between">
//             <div>
//               <p className="text-sm text-muted-foreground mb-1">XP</p>
//               <p className="text-2xl sm:text-3xl font-bold text-foreground">{data.xp}</p>
//             </div>
//             <div className="p-3 bg-amber-500/10 rounded-lg">
//               <Zap className="w-6 h-6 text-amber-500" />
//             </div>
//           </div>
//         </Card>
//       </div>

//       {/* Charts section */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
//         {/* Difficulty breakdown */}
//         <Card className="bg-card border-border p-6">
//           <h3 className="text-lg font-semibold text-foreground mb-4">Problems by Difficulty</h3>
//           <div className="h-64">
//             <ResponsiveContainer width="100%" height="100%">
//               <BarChart data={difficultyData}>
//                 <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
//                 <XAxis dataKey="name" stroke="var(--color-muted-foreground)" />
//                 <YAxis stroke="var(--color-muted-foreground)" />
//                 <Tooltip
//                   contentStyle={{
//                     backgroundColor: "var(--color-card)",
//                     border: `1px solid var(--color-border)`,
//                     borderRadius: "0.5rem",
//                   }}
//                   cursor={{ fill: "rgba(0,0,0,0.1)" }}
//                 />
//                 <Bar dataKey="value" radius={[8, 8, 0, 0]} />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>
//         </Card>

//       </div>
//     </div>
//   )
// }



"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatsOverviewPrompI } from "@/types/compInterfaces";
import {
  TrendingUp,
  Code2,
  Trophy,
  Zap,
  CheckCircle2,
  Target,
  Flame,
  Activity,
  LucideIcon,
} from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip as RechartsTooltip,
  Legend,
} from "recharts";

// --- Reusable Stat Card Component ---
interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  description?: string;
  className?: string;
  iconColor?: string;
  bgColor?: string;
}

const StatCard = ({
  title,
  value,
  icon: Icon,
  iconColor = "text-primary",
  bgColor = "bg-primary/10",
}: StatCardProps) => (
  <Card className="overflow-hidden transition-all duration-200 border-border/50 hover:shadow-md hover:border-primary/20">
    <div className="p-6 flex items-start justify-between">
      <div className="space-y-1">
        <p className="text-sm font-medium text-muted-foreground">{title}</p>
        <p className="text-2xl font-bold tracking-tight text-foreground">{value}</p>
      </div>
      <div className={`p-3 rounded-xl ${bgColor} ring-1 ring-inset ring-white/10`}>
        <Icon className={`w-5 h-5 ${iconColor}`} />
      </div>
    </div>
  </Card>
);

// --- Main Component ---
export function StatsOverview({ data }: { data: StatsOverviewPrompI }) {
  const totalProblems =
    data.problemSolved.easy + data.problemSolved.medium + data.problemSolved.hard;

  // Data for the Donut Chart
  const chartData = [
    { name: "Easy", value: data.problemSolved.easy, color: "#10b981" }, // Emerald-500
    { name: "Medium", value: data.problemSolved.medium, color: "#f59e0b" }, // Amber-500
    { name: "Hard", value: data.problemSolved.hard, color: "#f43f5e" }, // Rose-500
  ];

  // If no problems solved, show a grey placeholder to avoid chart breaking
  const hasData = chartData.some((d) => d.value > 0);
  const displayData = hasData
    ? chartData
    : [{ name: "None", value: 1, color: "#3f3f46" }]; // Zinc-700

  return (
    <div className="space-y-6">
      {/* 1. Hero Stats Row (Most Important) */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Solved"
          value={totalProblems}
          icon={CheckCircle2}
          iconColor="text-emerald-500"
          bgColor="bg-emerald-500/10"
        />
        <StatCard
          title="Current Streak"
          value={data.currentStreak.value}
          icon={Flame}
          iconColor="text-orange-500"
          bgColor="bg-orange-500/10"
        />
        <StatCard
          title="Level"
          value={`${data.level}`}
          icon={Trophy}
          iconColor="text-yellow-500"
          bgColor="bg-yellow-500/10"
        />
        <StatCard
          title="Total XP"
          value={data.xp.toLocaleString()}
          icon={Zap}
          iconColor="text-purple-500"
          bgColor="bg-purple-500/10"
        />
      </div>

      {/* 2. Detail Stats & Chart Split */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-7">
        
        {/* Left: Secondary Metrics (4 columns wide) */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-4 h-fit">
          <StatCard
            title="Total Submissions"
            value={data.totalSubmissions.toLocaleString()}
            icon={Code2}
            iconColor="text-blue-500"
            bgColor="bg-blue-500/10"
          />
          <StatCard
            title="Score"
            value={data.score.toLocaleString()}
            icon={Target}
            iconColor="text-rose-500"
            bgColor="bg-rose-500/10"
          />
          <StatCard
            title="Max Streak"
            value={data.maxStreak}
            icon={Activity}
            iconColor="text-cyan-500"
            bgColor="bg-cyan-500/10"
          />
          <StatCard
            title="Growth Rate"
            value="+2.4%" // Example placeholder or calculate real growth
            icon={TrendingUp}
            iconColor="text-green-500"
            bgColor="bg-green-500/10"
          />
        </div>

        {/* Right: Difficulty Donut Chart (3 columns wide) */}
        <Card className="flex flex-col border-border/50 lg:col-span-3 min-h-[300px]">
          <CardHeader className="items-center pb-0">
            <CardTitle className="text-base font-medium">Solved Difficulty</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 pb-0">
            <div className="h-[250px] w-full relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={displayData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                    stroke="none"
                  >
                    {displayData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <RechartsTooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      borderColor: "hsl(var(--border))",
                      borderRadius: "0.5rem",
                      color: "hsl(var(--foreground))",
                    }}
                    itemStyle={{ color: "hsl(var(--foreground))" }}
                  />
                  <Legend 
                    verticalAlign="bottom" 
                    height={36}
                    iconType="circle"
                  />
                </PieChart>
              </ResponsiveContainer>
              
              {/* Center Text Overlay */}
              <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-center pointer-events-none">
                <div className="text-3xl font-bold">{totalProblems}</div>
                <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Solved</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}