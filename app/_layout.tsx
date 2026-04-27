import { useEffect } from "react";

import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";

import { ProfileMilestoneProvider } from "../components/profile/ProfileMilestoneContext";
import "./../global.css";

void SplashScreen.preventAutoHideAsync().catch(() => {
  // Ignore when activity is temporarily unavailable during reloads.
});

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "Inter-Bold": require("../assets/fonts/inter-Bold.ttf"),
    "Inter-Medium": require("../assets/fonts/inter-Medium.ttf"),
    "Inter-Regular": require("../assets/fonts/inter-Regular.ttf"),
    "Inter-SemiBold": require("../assets/fonts/inter-SemiBold.ttf"),
    "Inter-Thin": require("../assets/fonts/inter-Thin.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      void SplashScreen.hideAsync().catch(() => {
        // Ignore transient MissingActivity errors during dev reloads.
      });
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ProfileMilestoneProvider>
      <StatusBar style="dark" />
      <Stack screenOptions={{ headerShown: false }} />
    </ProfileMilestoneProvider>
  );
}
