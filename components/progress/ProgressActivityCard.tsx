import { useState } from "react";

import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable, ScrollView, Text, View } from "react-native";
import {
  scaleLineHeight,
  scaleTextSize,
} from "../accessibility/TextScaleContext";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

export function ProgressActivityCard() {
  const [selectedMonth, setSelectedMonth] = useState<(typeof months)[number]>(
    "January",
  );
  const [showMonthMenu, setShowMonthMenu] = useState(false);

  return (
    <View
      className="rounded-[20px] border border-[#B9BEC7] bg-white px-4 py-4 shadow-sm"
      style={{ overflow: "visible" }}
    >
      <View className="flex-row items-center justify-between">
        <Text
          style={{
            fontFamily: "Inter-Bold",
            fontSize: scaleTextSize(18),
            lineHeight: scaleLineHeight(27),
            color: "#252B36",
          }}
        >
          Activity
        </Text>
        <View style={{ position: "relative", zIndex: 10 }}>
          <Pressable
            onPress={() => setShowMonthMenu((current) => !current)}
            style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
          >
            <Text
              style={{
                fontFamily: "Inter-Bold",
                fontSize: scaleTextSize(16),
                lineHeight: scaleLineHeight(24),
                color: "#2B6FD6",
              }}
            >
              {selectedMonth}
            </Text>
            <Ionicons
              name={showMonthMenu ? "chevron-up" : "chevron-down"}
              size={18}
              color="#2B6FD6"
            />
          </Pressable>

          {showMonthMenu ? (
            <View
              style={{
                position: "absolute",
                top: 30,
                right: 0,
                width: 138,
                borderRadius: 14,
                borderWidth: 1,
                borderColor: "#D8E2F0",
                backgroundColor: "#FFFFFF",
                paddingVertical: 6,
                maxHeight: 240,
                shadowColor: "#102137",
                shadowOpacity: 0.1,
                shadowRadius: 10,
                shadowOffset: { width: 0, height: 4 },
                elevation: 6,
              }}
            >
              <ScrollView nestedScrollEnabled showsVerticalScrollIndicator={false}>
                {months.map((month) => {
                  const selected = month === selectedMonth;

                  return (
                    <Pressable
                      key={month}
                      onPress={() => {
                        setSelectedMonth(month);
                        setShowMonthMenu(false);
                      }}
                      style={{
                        paddingHorizontal: 12,
                        paddingVertical: 8,
                        backgroundColor: selected ? "#EAF3FF" : "#FFFFFF",
                      }}
                    >
                      <Text
                        style={{
                          fontFamily: selected ? "Inter-SemiBold" : "Inter-Regular",
                          fontSize: scaleTextSize(14),
                          lineHeight: scaleLineHeight(21),
                          color: selected ? "#145CB4" : "#4F555F",
                        }}
                      >
                        {month}
                      </Text>
                    </Pressable>
                  );
                })}
              </ScrollView>
            </View>
          ) : null}
        </View>
      </View>

      <View className="mt-4 h-px bg-[#D4D8DE]" />

      <View className="mt-4 flex-row gap-3">
        <View className="flex-1 rounded-[18px] bg-[#E8F4E7] px-4 py-4">
          <View className="flex-row items-start justify-between">
            <Text
              style={{
                fontFamily: "Inter-Bold",
                fontSize: scaleTextSize(18),
                lineHeight: scaleLineHeight(30),
                color: "#252B36",
              }}
            >
              Exercise{"\n"}240
            </Text>
            <MaterialCommunityIcons
              name="chart-bar"
              size={26}
              color="#145CB4"
            />
          </View>
        </View>

        <View className="flex-1 rounded-[18px] bg-[#FFF2DD] px-4 py-4">
          <View className="flex-row items-start justify-between">
            <Text
              style={{
                fontFamily: "Inter-Bold",
                fontSize: scaleTextSize(18),
                lineHeight: scaleLineHeight(30),
                color: "#252B36",
              }}
            >
              Game{"\n"}10
            </Text>
            <MaterialCommunityIcons
              name="chart-bar"
              size={26}
              color="#145CB4"
            />
          </View>
        </View>
      </View>

      <View className="mt-4 rounded-[18px] bg-[#DCEBFF] px-4 py-4">
        <View className="flex-row items-center justify-between">
          <Text
            style={{
              fontFamily: "Inter-Bold",
              fontSize: scaleTextSize(18),
              lineHeight: scaleLineHeight(27),
              color: "#252B36",
            }}
          >
            Progress
          </Text>
          <Text
            style={{
              fontFamily: "Inter-Bold",
              fontSize: scaleTextSize(18),
              lineHeight: scaleLineHeight(27),
              color: "#145CB4",
            }}
          >
            10%
          </Text>
        </View>

        <View className="mt-4 h-4 rounded-full bg-white">
          <View className="h-4 w-[18%] rounded-full bg-[#145CB4]" />
        </View>

        <Text
          style={{
            marginTop: 12,
            textAlign: "center",
            fontFamily: "Inter-Medium",
            fontSize: scaleTextSize(16),
            lineHeight: scaleLineHeight(24),
            color: "#4F555F",
          }}
        >
          keep going! You’re Improving.
        </Text>
      </View>
    </View>
  );
}
