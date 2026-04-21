import { Text, View } from "react-native";

import Logo from "../../../assets/images/logo.svg";
import { colors, spacing, textStyles } from "../../../trast/theme";

const LOGO_WIDTH = 118;
const LOGO_HEIGHT = 52;

type AuthPhoneVerifyHeaderProps = {
  title: string;
  phone: string;
};

export function AuthPhoneVerifyHeader({
  title,
  phone,
}: AuthPhoneVerifyHeaderProps) {
  return (
    <View style={{ alignItems: "center" }}>
      <Logo width={LOGO_WIDTH} height={LOGO_HEIGHT} />
      <Text
        style={[
          textStyles.h2,
          {
            color: colors.text.action,
            fontWeight: "700",
            fontSize: 32,
            lineHeight: 34,
            marginTop: spacing[2],
          },
        ]}
      >
        Stride
      </Text>
      <Text
        style={[
          textStyles.titleT2,
          {
            color: colors.text.primary,
            fontWeight: "700",
            fontSize: 20,
            lineHeight: 30,
            marginTop: spacing[120],
            textAlign: "center",
          },
        ]}
      >
        {title}
      </Text>
      <Text
        style={[
          textStyles.bodySmall,
          {
            color: colors.text.secondary,
            fontSize: 16,
            lineHeight: 24,
            marginTop: spacing[8],
            maxWidth: 320,
            textAlign: "center",
          },
        ]}
      >
        Enter the 4-digit verification code sent to
      </Text>
      <Text
        style={[
          textStyles.bodySmall,
          {
            color: colors.text.primary,
            fontWeight: "700",
            fontSize: 16,
            lineHeight: 24,
            textAlign: "center",
          },
        ]}
      >
        {phone}
      </Text>
      <Text
        style={[
          textStyles.bodySmall,
          {
            color: colors.text.secondary,
            fontSize: 16,
            lineHeight: 24,
            textAlign: "center",
          },
        ]}
      >
        Enter the code below to verify.
      </Text>
    </View>
  );
}
