import { useState } from "react";

import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { LinearGradient } from "expo-linear-gradient";
import { Href, router } from "expo-router";
import AccuracyCheckIcon from "../../../assets/images/home-accuracy-check-tab.svg";
import TrophyIcon from "../../../assets/images/home-awaeded.svg";
import FlameIcon from "../../../assets/images/home-flameIcon.svg";
import GrowthIcon from "../../../assets/images/home-grow-tree.svg";
import OrderMemoryIcon from "../../../assets/images/home-order-mony-tab.svg";
import SymbolTapIcon from "../../../assets/images/home-symble-tab.svg";
import TrendUpIcon from "../../../assets/images/home-trade-up.svg";

import { HomeBrainGameCard } from "../../../components/home/HomeBrainGameCard";
import { HomeFeatureCard } from "../../../components/home/HomeFeatureCard";
import { HomeGreeting } from "../../../components/home/HomeGreeting";
import { HomeMetricCard } from "../../../components/home/HomeMetricCard";
import { HomeSectionHeader } from "../../../components/home/HomeSectionHeader";
import { HomeStridePopup } from "../../../components/home/HomeStridePopup";

export default function HomeScreen() {
  const [showStridePopup, setShowStridePopup] = useState(false);
  const openGame = (tab: "symbol" | "order" | "time") => {
    router.push(`/home/games?tab=${tab}` as Href);
  };

  return (
    <LinearGradient
      colors={[
        "rgba(0, 82, 173, 0.20)",
        "rgba(255, 255, 255, 0.20)",
        "#F8F9FC",
      ]}
      locations={[0.0017, 0.105, 1]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{ flex: 1 }}
    >
      <SafeAreaView
        edges={["top"]}
        style={{ flex: 1, backgroundColor: "transparent" }}
      >
        <ScrollView
          contentContainerStyle={{ paddingBottom: 32 }}
          showsVerticalScrollIndicator={false}
        >
          <View
            style={{ paddingHorizontal: 16, paddingTop: 16, marginTop: 12 }}
          >
            <View style={{ marginTop: 16, flexDirection: "row", gap: 14 }}>
              <HomeMetricCard
                title="Growth"
                value="48%"
                backgroundColor="#EAF5E9"
                accentColor="#3E9748"
                icon={<GrowthIcon width={24} height={24} />}
                valueAdornment={<TrendUpIcon width={60} height={30} />}
                onPress={() => setShowStridePopup(true)}
              />
              <HomeMetricCard
                title="Streak"
                value="90"
                suffix="Days"
                backgroundColor="#FFF4E8"
                accentColor="#FF7A00"
                icon={<FlameIcon width={24} height={24} />}
                award={<TrophyIcon width={68} height={68} />}
                onPress={() => router.push("/screens/home/journey")}
              />
            </View>

            <HomeGreeting />

            <HomeFeatureCard />

            <HomeSectionHeader
              title="Brain Game"
              subtitle="Boost your focus and memory, Sam."
            />

            <View style={{ marginTop: 18, gap: 18 }}>
              <HomeBrainGameCard
                title="Symbol Tap"
                icon={<SymbolTapIcon />}
                onPress={() => openGame("symbol")}
              />
              <HomeBrainGameCard
                title="Order Memory"
                icon={<OrderMemoryIcon />}
                onPress={() => openGame("order")}
              />
              <HomeBrainGameCard
                title="Accuracy Check"
                icon={<AccuracyCheckIcon />}
                onPress={() => openGame("time")}
              />
            </View>
          </View>
        </ScrollView>

        <HomeStridePopup
          visible={showStridePopup}
          onClose={() => setShowStridePopup(false)}
        />
      </SafeAreaView>
    </LinearGradient>
  );
}
