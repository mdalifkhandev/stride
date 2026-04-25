import { Href, useLocalSearchParams, useRouter } from "expo-router";

import { GameScreen } from "@/game/components/GameScreen";
import { OrderMemoryScreen } from "@/order-memory/components/OrderMemoryScreen";
import { TimeAccuracyCheckScreen } from "@/time-accuracy/components/TimeAccuracyCheckScreen";

type GameTab = "symbol" | "order" | "time";

const gameTabs: GameTab[] = ["symbol", "order", "time"];

function getActiveTab(tab: string | string[] | undefined): GameTab {
  const value = Array.isArray(tab) ? tab[0] : tab;

  return gameTabs.includes(value as GameTab) ? (value as GameTab) : "symbol";
}

export default function GamesScreen() {
  const router = useRouter();
  const { tab } = useLocalSearchParams<{ tab?: string }>();
  const activeTab = getActiveTab(tab);

  const handleExit = () => {
    if (router.canGoBack()) {
      router.back();
      return;
    }

    router.replace("/(tabs)/home" as Href);
  };

  if (activeTab === "order") {
    return <OrderMemoryScreen onExit={handleExit} />;
  }

  if (activeTab === "time") {
    return <TimeAccuracyCheckScreen onExit={handleExit} />;
  }

  return <GameScreen onExit={handleExit} />;
}
