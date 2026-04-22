import { Pressable, Text, View } from "react-native";

import { useTextScale } from "../../accessibility/TextScaleContext";
import { colors, radius, spacing, textStyles } from "../../../trast/theme";

type UnitToggleProps<T extends string> = {
  options: readonly T[];
  value: T;
  onChange: (value: T) => void;
};

export function UnitToggle<T extends string>({
  options,
  value,
  onChange,
}: UnitToggleProps<T>) {
  useTextScale();

  return (
    <View
      style={{
        flexDirection: "row",
        alignSelf: "center",
        backgroundColor: colors.surface.primary,
        borderRadius: radius.lg,
        padding: spacing[4],
        shadowColor: "#000",
        shadowOpacity: 0.06,
        shadowRadius: 12,
        shadowOffset: { width: 0, height: 3 },
        elevation: 2,
      }}
    >
      {options.map((option) => {
        const selected = option === value;
        return (
          <Pressable
            key={option}
            onPress={() => onChange(option)}
            style={[
              {
                minWidth: 62,
                paddingVertical: spacing[8],
                paddingHorizontal: spacing[12],
                borderRadius: radius.md,
                alignItems: "center",
              },
              selected && { backgroundColor: colors.surface.action },
            ]}
          >
            <Text
              style={[
                textStyles.titleSmall,
                { color: colors.text.secondary },
                selected && { color: colors.text.onAction },
              ]}
            >
              {option}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}
