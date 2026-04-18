import { Text, TextInput, View } from "react-native";

import { colors, radius, spacing, textStyles } from "../../../theme/theme";

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
      <Text style={[textStyles.titleSmall, { color: colors.text.primary, fontWeight: "700" }]}>
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
          height: 48,
          borderRadius: radius.sm,
          borderWidth: 1,
          borderColor: "#d7d7d7",
          paddingHorizontal: spacing[12],
          color: colors.text.primary,
          fontSize: 12,
        }}
      />
    </View>
  );
}
