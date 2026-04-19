import { Text, TextInput, View } from "react-native";

import { colors, radius, spacing, textStyles } from "../../../trast/theme";

type AuthInputFieldProps = {
  label: string;
  placeholder: string;
  value?: string;
  onChangeText?: (value: string) => void;
  keyboardType?: "default" | "email-address" | "numeric";
};

export function AuthInputField({
  label,
  placeholder,
  value,
  onChangeText,
  keyboardType = "default",
}: AuthInputFieldProps) {
  return (
    <View style={{ gap: spacing[8] }}>
      <Text
        style={[
          textStyles.titleSmall,
          { color: colors.text.primary, fontWeight: "700" },
        ]}
      >
        {label}
      </Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.text.secondary}
        keyboardType={keyboardType}
        autoCapitalize="none"
        style={{
          height: 44,
          borderRadius: radius.input,
          borderWidth: 1,
          borderColor: colors.border.tertiary,
          paddingHorizontal: spacing[12],
          backgroundColor: colors.surface.primary,
          color: colors.text.primary,
          ...textStyles.bodyXsm,
        }}
      />
    </View>
  );
}
