import { createRef } from "react";

import { TextInput, View } from "react-native";

import { colors, radius, spacing, textStyles } from "../../../theme/theme";

type VerificationCodeProps = {
  code: string[];
  onChange: (code: string[]) => void;
};

export function VerificationCode({ code, onChange }: VerificationCodeProps) {
  const refs = code.map(() => createRef<TextInput>());

  const handleChange = (value: string, index: number) => {
    const nextValue = value.replace(/[^0-9]/g, "").slice(-1);
    const nextCode = [...code];
    nextCode[index] = nextValue;
    onChange(nextCode);

    if (nextValue && index < refs.length - 1) {
      refs[index + 1].current?.focus();
    }
  };

  return (
    <View style={{ flexDirection: "row", gap: spacing[4] }}>
      {code.map((digit, index) => (
        <TextInput
          key={`otp-${index}`}
          ref={refs[index]}
          value={digit}
          onChangeText={(value) => handleChange(value, index)}
          keyboardType="number-pad"
          maxLength={1}
          textAlign="center"
          style={{
            flex: 1,
            height: 56,
            borderRadius: radius.sm,
            borderWidth: 1,
            borderColor: "#d7d7d7",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: colors.surface.primary,
            ...textStyles.titleT2,
            color: colors.text.action,
            fontWeight: "700",
          }}
        />
      ))}
    </View>
  );
}
