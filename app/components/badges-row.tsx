'use client'

import { InfiniteMovingBadges } from "./ui/infinite-moving-badges";

export const BadgesItems = [
  { name: "📍 Toulouse + Remote" },
  { name: "🚀 Freelance" },
  { name: "🤓 Fullstack" },
  { name: "🔥 Angular" },
  { name: "✨ UX" },
  { name: "📈 2 ans d'expérience" },
];

export const BadgesRow = () => {
    return (
        <InfiniteMovingBadges items={BadgesItems} speed="normal" pauseOnHover={true} direction="left" />
    );
    };