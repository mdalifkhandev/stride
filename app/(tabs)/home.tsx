import { useEffect, useState } from "react";

import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import AccuracyCheckIcon from "../../assets/images/home-accuracy-check-tab.svg";
import TrophyIcon from "../../assets/images/home-awaeded.svg";
import FlameIcon from "../../assets/images/home-flameIcon.svg";
import GrowthIcon from "../../assets/images/home-grow-tree.svg";
import OrderMemoryIcon from "../../assets/images/home-order-mony-tab.svg";
import SymbolTapIcon from "../../assets/images/home-symble-tab.svg";
import TrendUpIcon from "../../assets/images/home-trade-up.svg";
import { useTextScale } from "../../components/accessibility/TextScaleContext";
import { HomeBrainGameCard } from "../../components/home/HomeBrainGameCard";
import { HomeFeatureCard } from "../../components/home/HomeFeatureCard";
import { HomeGreeting } from "../../components/home/HomeGreeting";
import { HomeMetricCard } from "../../components/home/HomeMetricCard";
import { HomeSectionHeader } from "../../components/home/HomeSectionHeader";
import { HomeStridePopup } from "../../components/home/HomeStridePopup";

const welcomeMessages = [
  "It’s a great day to get active, Sam!",
  "You’ve got this, Sam!",
  "Let’s get moving, Sam!",
] as const;

export default function HomeScreen() {
  const { textScale } = useTextScale();
  const [messageIndex, setMessageIndex] = useState(0);
  const [typedMessage, setTypedMessage] = useState("");
  const [showStridePopup, setShowStridePopup] = useState(false);

  useEffect(() => {
    const currentMessage = welcomeMessages[messageIndex];
    let charIndex = 0;
    let typingTimeout: ReturnType<typeof setTimeout> | null = null;
    let nextMessageTimeout: ReturnType<typeof setTimeout> | null = null;

    setTypedMessage("");

    const typeNextCharacter = () => {
      charIndex += 1;
      setTypedMessage(currentMessage.slice(0, charIndex));

      if (charIndex < currentMessage.length) {
        typingTimeout = setTimeout(typeNextCharacter, 45);
        return;
      }

      nextMessageTimeout = setTimeout(() => {
        setMessageIndex((current) => (current + 1) % welcomeMessages.length);
      }, 1400);
    };

    typingTimeout = setTimeout(typeNextCharacter, 150);

    return () => {
      if (typingTimeout) {
        clearTimeout(typingTimeout);
      }
      if (nextMessageTimeout) {
        clearTimeout(nextMessageTimeout);
      }
    };
  }, [messageIndex]);

  return (
    <SafeAreaView
      key={textScale}
      edges={["top"]}
      style={{ flex: 1, backgroundColor: "#FCFDFF" }}
    >
      <ScrollView
        contentContainerStyle={{ paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ paddingHorizontal: 16, paddingTop: 16, marginTop: 12 }}>
          <HomeGreeting message={typedMessage} />

          <View style={{ marginTop: 16, flexDirection: "row", gap: 14 }}>
            <HomeMetricCard
              title="Growth"
              value="48%"
              backgroundColor="#EAF5E9"
              accentColor="#3E9748"
              icon={<GrowthIcon width={20} height={20} />}
              valueAdornment={<TrendUpIcon width={60} height={30} />}
              onPress={() => setShowStridePopup(true)}
            />
            <HomeMetricCard
              title="Streak"
              value="90"
              suffix="Days"
              backgroundColor="#FFF4E8"
              accentColor="#FF7A00"
              icon={<FlameIcon width={20} height={20} />}
              award={<TrophyIcon width={68} height={68} />}
              onPress={() => setShowStridePopup(true)}
            />
          </View>

          <HomeFeatureCard onPress={() => setShowStridePopup(true)} />

          <HomeSectionHeader
            title="Brain Game"
            subtitle="Boost your focus and memory, Sam."
          />

          <View style={{ marginTop: 18, gap: 18 }}>
            <HomeBrainGameCard
              title="Symbol Tap"
              icon={<SymbolTapIcon width={68} height={68} />}
            />
            <HomeBrainGameCard
              title="Order Memory"
              icon={<OrderMemoryIcon width={68} height={68} />}
            />
            <HomeBrainGameCard
              title="Accuracy Check"
              icon={<AccuracyCheckIcon width={68} height={68} />}
            />
          </View>
        </View>
      </ScrollView>

      <HomeStridePopup
        visible={showStridePopup}
        onClose={() => setShowStridePopup(false)}
      />
    </SafeAreaView>
  );
}
