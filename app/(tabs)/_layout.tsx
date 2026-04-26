import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Href, Tabs, usePathname, useRouter } from "expo-router";
import { useCallback, useState } from "react";
import {
  DeviceEventEmitter,
  Modal,
  Platform,
  Pressable,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  scaleTextSize,
  useTextScale,
} from "../../components/accessibility/TextScaleContext";

const ACTIVE_TINT = "#2B6FD6";
const INACTIVE_TINT = "#9CA3AF";
const HOME_ROUTE = "/(tabs)/home" as Href;
const PAUSE_GAME_EVENT = "stride:pause-active-game";

type TabIconProps = {
  color: string;
  focused: boolean;
  size: number;
};

function HomeIcon({ color, focused, size }: TabIconProps) {
  return (
    <Ionicons
      name={focused ? "home" : "home-outline"}
      size={size}
      color={color}
    />
  );
}

function JourneyIcon({ color, focused, size }: TabIconProps) {
  return (
    <MaterialCommunityIcons
      name={focused ? "map-marker-path" : "map-marker-path"}
      size={size}
      color={color}
    />
  );
}

function ProgressIcon({ color, focused, size }: TabIconProps) {
  return (
    <Ionicons
      name={focused ? "stats-chart" : "stats-chart-outline"}
      size={size}
      color={color}
    />
  );
}

function ProfileIcon({ color, focused, size }: TabIconProps) {
  return (
    <Ionicons
      name={focused ? "person-circle" : "person-circle-outline"}
      size={size}
      color={color}
    />
  );
}

export default function TabLayout() {
  useTextScale();
  const pathname = usePathname();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [pendingTab, setPendingTab] = useState<Href | null>(null);
  const bottomInset =
    Platform.OS === "ios" ? insets.bottom : Math.max(insets.bottom, 10);
  const isGameRoute = pathname === "/home/games";

  const closeLeaveGameModal = useCallback(() => {
    setPendingTab(null);
  }, []);

  const confirmLeaveGame = useCallback(() => {
    if (!pendingTab) {
      return;
    }

    const nextTab = pendingTab;
    setPendingTab(null);
    router.replace(HOME_ROUTE);

    if (nextTab !== HOME_ROUTE) {
      router.navigate(nextTab);
    }
  }, [pendingTab, router]);

  const getTabListeners = useCallback(
    (targetHref: Href) => ({
      tabPress: (event: { preventDefault: () => void }) => {
        if (!isGameRoute) {
          return;
        }

        event.preventDefault();
        DeviceEventEmitter.emit(PAUSE_GAME_EVENT);

        if (pendingTab) {
          return;
        }

        setPendingTab(targetHref);
      },
    }),
    [isGameRoute, pendingTab],
  );

  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: ACTIVE_TINT,
          tabBarInactiveTintColor: INACTIVE_TINT,
          tabBarIconStyle: {
            marginTop: 2,
          },
          tabBarItemStyle: {
            paddingTop: 4,
          },
          tabBarLabelStyle: {
            fontFamily: "Inter-SemiBold",
            fontSize: scaleTextSize(12),
            marginBottom: 2,
          },
          tabBarStyle: {
            backgroundColor: "#FFFFFF",
            borderTopColor: "#E5E7EB",
            borderTopWidth: 1,
            height: 62 + bottomInset,
            paddingTop: 8,
            paddingBottom: bottomInset,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          listeners={getTabListeners(HOME_ROUTE)}
          options={{
            title: "Home",
            tabBarIcon: HomeIcon,
          }}
        />
        <Tabs.Screen
          name="journey"
          listeners={getTabListeners("/(tabs)/journey" as Href)}
          options={{
            title: "Journey",
            tabBarIcon: JourneyIcon,
          }}
        />
        <Tabs.Screen
          name="progress"
          listeners={getTabListeners("/(tabs)/progress" as Href)}
          options={{
            title: "Progress",
            tabBarIcon: ProgressIcon,
          }}
        />
        <Tabs.Screen
          name="profile"
          listeners={getTabListeners("/(tabs)/profile" as Href)}
          options={{
            title: "Profile",
            tabBarIcon: ProfileIcon,
          }}
        />
      </Tabs>

      <Modal
        animationType="fade"
        onRequestClose={closeLeaveGameModal}
        transparent
        visible={pendingTab !== null}
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(15, 23, 42, 0.42)",
            padding: 24,
          }}
        >
          <View
            style={{
              width: "100%",
              maxWidth: 360,
              borderRadius: 24,
              backgroundColor: "#FFFFFF",
              paddingHorizontal: 22,
              paddingTop: 24,
              paddingBottom: 14,
              shadowColor: "#0F172A",
              shadowOffset: { width: 0, height: 12 },
              shadowOpacity: 0.18,
              shadowRadius: 24,
              elevation: 12,
            }}
          >
            <Text
              style={{
                color: "#111827",
                fontFamily: "Inter-Bold",
                fontSize: scaleTextSize(20),
                lineHeight: scaleTextSize(28),
              }}
            >
              Leave this game?
            </Text>
            <Text
              style={{
                marginTop: 8,
                color: "#6B7280",
                fontFamily: "Inter-Regular",
                fontSize: scaleTextSize(14),
                lineHeight: scaleTextSize(22),
              }}
            >
              Your current game will stop if you switch tabs.
            </Text>

            <View
              style={{
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "flex-end",
                marginTop: 22,
                minHeight: 48,
              }}
            >
              <Pressable
                accessibilityRole="button"
                hitSlop={8}
                onPress={closeLeaveGameModal}
                style={({ pressed }) => ({
                  alignItems: "center",
                  minWidth: 84,
                  opacity: pressed ? 0.65 : 1,
                  paddingHorizontal: 12,
                  paddingVertical: 12,
                })}
              >
                <Text
                  style={{
                    color: "#374151",
                    fontFamily: "Inter-SemiBold",
                    fontSize: scaleTextSize(14),
                    textAlign: "center",
                  }}
                >
                  Cancel
                </Text>
              </Pressable>
              <View style={{ width: 28 }} />
              <Pressable
                accessibilityRole="button"
                hitSlop={8}
                onPress={confirmLeaveGame}
                style={({ pressed }) => ({
                  alignItems: "center",
                  minWidth: 56,
                  opacity: pressed ? 0.65 : 1,
                  paddingHorizontal: 12,
                  paddingVertical: 12,
                })}
              >
                <Text
                  style={{
                    color: ACTIVE_TINT,
                    fontFamily: "Inter-SemiBold",
                    fontSize: scaleTextSize(14),
                    textAlign: "center",
                  }}
                >
                  OK
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}
