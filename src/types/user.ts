import { User as FirebaseUser } from 'firebase/auth';

export interface GameStats {
  gamesPlayed: number;
  totalScore: number;
  averageScore: number;
  bestScore: number;
  winStreak: number;
  longestStreak: number;
}

export interface CustomUser extends FirebaseUser {
  coins: number;
  stats: GameStats;
  achievements: string[];
  items: {
    icons: string[];
    skins: string[];
    frames: string[];
    effects: string[];
  };
  selectedItems: {
    icon: string | null;
    skin: string | null;
    frame: string | null;
    effect: string | null;
  };
  createdAt: Date;
  lastLoginAt: Date;
} 