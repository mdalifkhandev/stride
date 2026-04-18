import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TextInput, View } from "react-native";

import { colors, radius, spacing, textStyles } from "../../theme/theme";

type SignupFieldProps = {
  label: string;
  placeholder: string;
  value?: string;
  onChangeText?: (value: string) => void;
  keyboardType?: "default" | "email-address" | "numeric";
  trailingIcon?: keyof typeof Ionicons.glyphMap;
};

export function SignupField({
  label,
  placeholder,
  value,
  onChangeText,
  keyboardType = "default",
  trailingIcon,
}: SignupFieldProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputWrap}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={colors.text.secondary}
          keyboardType={keyboardType}
          autoCapitalize="none"
          style={styles.input}
        />
        {trailingIcon ? (
          <Ionicons name={trailingIcon} size={20} color={colors.text.action} />
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: spacing[8],
  },
  label: {
    ...textStyles.titleSmall,
    color: colors.text.primary,
    fontWeight: "700",
  },
  inputWrap: {
    minHeight: 54,
    borderWidth: 1,
    borderColor: "#d7d7d7",
    borderRadius: radius.md,
    paddingHorizontal: spacing[16],
    flexDirection: "row",
    alignItems: "center",
    gap: spacing[12],
    backgroundColor: colors.surface.primary,
  },
  input: {
    flex: 1,
    color: colors.text.primary,
    fontSize: 15,
  },
});
