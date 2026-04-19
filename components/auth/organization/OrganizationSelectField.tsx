import { useState } from "react";

import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

import { colors, inputStyles, spacing, textStyles } from "../../../trast/theme";

type OrganizationSelectFieldProps = {
  label: string;
  placeholder: string;
  value?: string;
  options: readonly string[];
  onChange: (value: string) => void;
};

export function OrganizationSelectField({
  label,
  placeholder,
  value,
  options,
  onChange,
}: OrganizationSelectFieldProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (nextValue: string) => {
    onChange(nextValue);
    setIsOpen(false);
  };

  return (
    <View style={{ gap: spacing[8] }}>
      <Text style={inputStyles.label}>{label}</Text>

      <Pressable
        onPress={() => setIsOpen((current) => !current)}
        style={[
          inputStyles.container,
          {
            minHeight: 52,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          },
        ]}
      >
        <Text
          style={[
            textStyles.bodySmall,
            {
              color: value ? colors.text.primary : colors.text.secondary,
            },
          ]}
        >
          {value || placeholder}
        </Text>
        <Ionicons
          name={isOpen ? "chevron-up" : "chevron-down"}
          size={18}
          color={colors.icon.secondary}
        />
      </Pressable>

      {isOpen ? (
        <View style={{ gap: spacing[8] }}>
          {options.map((option) => (
            <Pressable
              key={option}
              onPress={() => handleSelect(option)}
              style={[
                inputStyles.container,
                value === option && {
                  borderColor: colors.border.action,
                  backgroundColor: colors.surface.actionLight,
                },
              ]}
            >
              <Text
                style={[
                  textStyles.bodySmall,
                  { color: colors.text.primary },
                  value === option && { color: colors.text.action },
                ]}
              >
                {option}
              </Text>
            </Pressable>
          ))}
        </View>
      ) : null}
    </View>
  );
}
