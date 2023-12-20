import {
  RedemptionCard,
  RedemptionItemType,
} from "@/components/RedemptionCard";

type LeetcodeStatsType = {
  solved: Record<"easy" | "medium" | "hard", number>;
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
    process?.env?.BACKEND_URL ?? "",
    {
      cache: "no-cache",
    }
  ).then((res) => res.json());
  return (
    <main className="flex flex-col gap-8 w-full">
      <div className="flex flex-col gap-4 w-full">
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
      </div>
      <div className="flex md:flex-row flex-col justify-between w-full gap-10">
        {redemptionItems.map((item) => (
          <RedemptionCard
            key={item.id}
            {...item}
            currentPoints={leetcodeStats.points}
          />
        ))}
      </div>
    </main>
  );
}
