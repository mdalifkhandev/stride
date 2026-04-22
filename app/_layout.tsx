import { useEffect } from "react";

import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { TextScaleProvider } from "../components/accessibility/TextScaleContext";
import "./../global.css";

SplashScreen.preventAutoHideAsync();

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
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <TextScaleProvider>
      <StatusBar style="dark" />
      <Stack screenOptions={{ headerShown: false }} />
    </TextScaleProvider>
  );
}
