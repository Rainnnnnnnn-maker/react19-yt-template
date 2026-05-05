import { Suspense } from "react";
import ActionState from "./components/ActionState";
import ServerAction from "./components/ServerAction";
import Use from "./components/Use";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* <ServerAction /> */}
      {/* <ActionState /> */}
      {/* <Optimistic /> */}
      <Suspense fallback={<h2>Loading...</h2>}>
        <Use />
      </Suspense>
    </main>
  );
}
