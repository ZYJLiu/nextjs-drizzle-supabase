import CounterState from "@/components/counter-state";
import IncrementButton from "@/components/increment-button";

import TransactionsComponent from "@/components/transactions";
import { getAllTransactions } from "@/lib/db/queries";

import CodeTyping from "./components/Code";

export default async function Home() {
  const transactions = await getAllTransactions();

  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      <CodeTyping />
      {/* <CounterState />
      <IncrementButton />
      <TransactionsComponent transactions={transactions} /> */}
    </div>
  );
}
