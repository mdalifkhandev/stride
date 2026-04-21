import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ACTIVE_TINT = "#2B6FD6";
const INACTIVE_TINT = "#9CA3AF";

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
  const insets = useSafeAreaInsets();
  const bottomInset = Platform.OS === "ios" ? insets.bottom : Math.max(insets.bottom, 10);

  return (
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
          fontSize: 12,
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
        options={{
          title: "Home",
          tabBarIcon: HomeIcon,
        }}
      />
      <Tabs.Screen
        name="journey"
        options={{
          title: "Journey",
          tabBarIcon: JourneyIcon,
        }}
      />
      <Tabs.Screen
        name="progress"
        options={{
          title: "Progress",
          tabBarIcon: ProgressIcon,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ProfileIcon,
        }}
      />
      <Tabs.Screen
        name="personal-info"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
