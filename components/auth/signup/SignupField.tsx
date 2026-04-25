import { Ionicons } from "@expo/vector-icons";
import { Text, TextInput, View } from "react-native";

import {
  scaleLineHeight,
  scaleTextSize,
  useTextScale,
} from "../../accessibility/TextScaleContext";
import { colors, radius, spacing, textStyles } from "../../../theme";

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
  useTextScale();

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
      <View
        style={{
          minHeight: 54,
          borderWidth: 1,
          borderColor: "#d7d7d7",
          borderRadius: radius.md,
          paddingHorizontal: spacing[16],
          flexDirection: "row",
          alignItems: "center",
          gap: spacing[12],
          backgroundColor: colors.surface.primary,
        }}
      >
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={colors.text.secondary}
          keyboardType={keyboardType}
          autoCapitalize="none"
          style={{
            flex: 1,
            color: colors.text.primary,
            fontSize: scaleTextSize(15),
            lineHeight: scaleLineHeight(22),
          }}
        />
        {trailingIcon ? (
          <Ionicons name={trailingIcon} size={20} color={colors.text.action} />
        ) : null}
      </View>
    </View>
  );
}
