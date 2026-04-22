import { ReactNode } from "react";

import { Pressable, Text, View } from "react-native";

import {
  scaleLineHeight,
  scaleTextSize,
} from "../accessibility/TextScaleContext";

type HomeMetricCardProps = {
  title: string;
  value: string;
  suffix?: string;
  backgroundColor: string;
  accentColor: string;
  icon: ReactNode;
  valueAdornment?: ReactNode;
  award?: ReactNode;
  onPress?: () => void;
};

export function HomeMetricCard({
  title,
  value,
  suffix,
  backgroundColor,
  accentColor,
  icon,
  valueAdornment,
  award,
  onPress,
}: HomeMetricCardProps) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        flex: 1,
        borderRadius: 18,
        backgroundColor,
        minHeight: 116,
        paddingHorizontal: 14,
        paddingTop: 14,
        paddingBottom: 12,
        overflow: "hidden",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 20,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
          {icon}
          <Text
            style={{
              color: accentColor,
              fontFamily: "Inter-Bold",
              fontSize: scaleTextSize(13),
              lineHeight: scaleLineHeight(18),
              letterSpacing: 0.8,
              textTransform: "uppercase",
            }}
          >
            {title}
          </Text>
        </View>
      </View>

      <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
        <Text
          style={{
            color: accentColor,
            fontFamily: "Inter-Bold",
            fontSize: scaleTextSize(32),
            lineHeight: scaleLineHeight(38),
          }}
        >
          {value}
        </Text>
        {valueAdornment ? (
          <View style={{ marginLeft: 6, marginBottom: 8 }}>{valueAdornment}</View>
        ) : null}
        {suffix ? (
          <Text
            style={{
              color: accentColor,
              fontFamily: "Inter-SemiBold",
              fontSize: scaleTextSize(15),
              lineHeight: scaleLineHeight(24),
              marginBottom: 6,
            }}
          >
            {suffix}
          </Text>
        ) : null}

        {award ? (
          <View
            style={{
              position: "absolute",
              top: -35,
              right: -15,
              zIndex: 2,
            }}
          >
            {award}
          </View>
        ) : null}
      </View>
    </Pressable>
  );
}
