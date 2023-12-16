import { RedemptionCard } from "@/components/RedemptionCard/RedemptionCard";
import { RedemptionItemType } from "@/components/RedemptionCard/types";

type LeetcodeStatsType = {
  solved: {
    easy: number;
    medium: number;
    hard: number;
  };
  points: number;
  lastUpdated: string;
  totalCount: number;
};

const redemptionItems: Omit<RedemptionItemType, "currentPoints">[] = [
  {
    id: 1,
    name: "Seiko 5 SRPD73K2 ",
    points: 1000,
  },
  {
    id: 2,
    name: "Seiko 5 SRPD73K2 ",
    points: 1000,
  },
  {
    id: 3,
    name: "Seiko 5 SRPD73K2 ",
    points: 1000,
  },
];

export default async function Home() {
  const leetcodeStats: LeetcodeStatsType = await fetch(
    process?.env?.BACKEND_URL ?? ""
  ).then((res) => res.json());
  return (
    <main className="h-screen w-screen flex items-center justify-center">
      <div className="p-4 md:p-32 flex justify-center drop-shadow-sm border-2 rounded-xl border-gray-700 flex-col gap-4">
        <p>Total points: {leetcodeStats.points}</p>
        <div>
          Leetcode stats:
          <ul className="flex flex-col">
            <li>Easy: {leetcodeStats.solved.easy}</li>
            <li>Medium: {leetcodeStats.solved.medium}</li>
            <li>Hard: {leetcodeStats.solved.hard}</li>
          </ul>
        </div>
        <p>Last updated: {leetcodeStats.lastUpdated}</p>
        <div className="flex justify-between w-full gap-10">
          {redemptionItems.map((item) => (
            <RedemptionCard
              key={item.id}
              {...item}
              currentPoints={leetcodeStats.points}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
