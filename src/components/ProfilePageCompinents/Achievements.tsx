"use client"

import * as React from "react"
import { Card } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { 
  Star, Trophy, Flame, Code, Target, Clock, 
  Award, Medal, Sun, Swords, 
  LucideIcon 
} from 'lucide-react';

// ------------------------
//  1. TYPE DEFINITIONS
// ------------------------
export interface Badge {
  id: string;
  icon: LucideIcon;
  label: string;
  description: string;
}

// ------------------------
//  2. BADGE DEFINITIONS
// ------------------------
export const ALL_BADGES: Badge[] = [
  // First badges
  { id: 'first-problem', icon: Star, label: 'First Problem', description: 'Solved your first problem' },
  { id: 'first-submission', icon: Medal, label: 'First Submission', description: 'Submitted your first solution' },

  // Problem milestones
  { id: '10-problems',  icon: Code, label: '10 Problems', description: 'Solved 10 problems' },
  { id: '50-problems',  icon: Code, label: '50 Problems', description: 'Solved 50 problems' },
  { id: '100-problems', icon: Code, label: '100 Problems', description: 'Solved 100 problems' },
  { id: '300-problems', icon: Code, label: '300 Problems', description: 'Solved 300 problems' },
  { id: '500-problems', icon: Code, label: '500 Problems', description: 'Solved 500 problems' },

  // Easy difficulty badges
  { id: '10-easy',  icon: Sun, label: 'Easy Apprentice', description: 'Solved 10 easy problems' },
  { id: '50-easy',  icon: Sun, label: 'Easy Adept', description: 'Solved 50 easy problems' },
  { id: '100-easy', icon: Sun, label: 'Easy Master', description: 'Solved 100 easy problems' },
  { id: '500-easy', icon: Sun, label: 'Easy Grandmaster', description: 'Solved 500 easy problems' },

  // Medium difficulty badges
  { id: '10-medium',  icon: Award, label: 'Medium Apprentice', description: 'Solved 10 medium problems' },
  { id: '50-medium',  icon: Award, label: 'Medium Adept', description: 'Solved 50 medium problems' },
  { id: '100-medium', icon: Award, label: 'Medium Master', description: 'Solved 100 medium problems' },
  { id: '500-medium', icon: Award, label: 'Medium Grandmaster', description: 'Solved 500 medium problems' },

  // Hard difficulty badges
  { id: '10-hard',  icon: Target, label: 'Hard Challenger', description: 'Solved 10 hard problems' },
  { id: '50-hard',  icon: Target, label: 'Hard Slayer', description: 'Solved 50 hard problems' },
  { id: '100-hard', icon: Target, label: 'Hard Master', description: 'Solved 100 hard problems' },
  { id: '500-hard', icon: Swords, label: 'Hard Grandmaster', description: 'Solved 500 hard problems' },

  // Streak badges
  { id: '10-day-streak',  icon: Flame, label: '10-Day Streak', description: 'Solved problems 10 days in a row' },
  { id: '30-day-streak',  icon: Flame, label: '30-Day Streak', description: 'Solved problems 30 days in a row' },
  { id: '100-day-streak', icon: Flame, label: '100-Day Streak', description: 'Solved problems 100 days in a row' },
  { id: '360-day-streak', icon: Flame, label: '1 Year Streak', description: 'Maintained a 360-day streak' },

  // Special badges
  { id: 'marathoner', icon: Flame, label: 'Marathoner', description: 'Practiced daily for 180 days' },
];

export const getBadges = (badgeIds: string[]): Badge[] => {
  return ALL_BADGES.filter((badge) => badgeIds.includes(badge.id));
};

// ------------------------
//  3. COMPONENT
// ------------------------
export default function Achievements({ badges }: { badges: string[] }) {
  const earnedBadges = React.useMemo(() => getBadges(badges || []), [badges]);

  if (earnedBadges.length === 0) {
    return (
      <Card className="p-6 mt-4">
        <h3 className="text-lg font-bold mb-2">Achievements</h3>
        <p className="text-sm text-muted-foreground">No badges earned yet. Keep solving!</p>
      </Card>
    );
  }

  return (
    <Card className="p-6 mt-4 bg-card border-border">
      <Carousel
        opts={{
          align: "start",
          loop: false,
        }}
        className="w-full"
      >
        {/* HEADER: Title + Arrows (Top Left) */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <h3 className="text-lg font-bold text-foreground">Achievements</h3>
          <span className="text-sm text-muted-foreground">
            {earnedBadges.length} Unlocked
          </span>
          </div>
            <div className="flex items-center gap-1">
              <CarouselPrevious className="static translate-y-0 h-8 w-8 hover:bg-accent hover:text-accent-foreground" />
              <CarouselNext className="static translate-y-0 h-8 w-8 hover:bg-accent hover:text-accent-foreground" />
            </div>
        </div>

        <CarouselContent className="-ml-4">
          {earnedBadges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <CarouselItem key={index} className="pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                <div className="group flex flex-col items-center gap-3 p-4 rounded-xl bg-muted/40 border border-transparent hover:border-border hover:bg-muted/60 transition-all duration-200 cursor-pointer h-full">
                  
                  {/* Icon Container */}
                  <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center group-hover:bg-yellow-500/20 group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-6 h-6 text-yellow-500" />
                  </div>
                  
                  {/* Text Content */}
                  <div className="text-center space-y-1">
                    <p className="text-sm font-semibold text-foreground line-clamp-1" title={badge.label}>
                      {badge.label}
                    </p>
                    <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed h-8">
                      {badge.description}
                    </p>
                  </div>
                  
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </Card>
  );
}