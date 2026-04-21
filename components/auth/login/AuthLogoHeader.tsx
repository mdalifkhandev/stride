import { Text, View } from "react-native";

import Logo from "../../../assets/images/logo.svg";
import { colors, spacing, textStyles } from "../../../trast/theme";

const LOGO_WIDTH = 118;
const LOGO_HEIGHT = 52;

type AuthLogoHeaderProps = {
  title?: string;
  subtitle?: string;
  compact?: boolean;
};

export function AuthLogoHeader({
  title,
  subtitle,
  compact = false,
}: AuthLogoHeaderProps) {
  return (
    <View
      style={[
        { alignItems: "center", gap: spacing[8] },
        compact && { gap: spacing[2] },
      ]}
    >
      <Logo width={LOGO_WIDTH} height={LOGO_HEIGHT} />
      <Text
        style={[
          textStyles.h2,
          {
            color: colors.text.action,
            fontWeight: "700",
            fontSize: compact ? 32 : 40,
            lineHeight: compact ? 34 : 40,
          },
        ]}
      >
        Stride
      </Text>
      {title ? (
        <Text
          style={[
            textStyles.titleT2,
            {
              color: colors.text.primary,
              fontWeight: "700",
              fontSize: compact ? 22 : 18,
              lineHeight: compact ? 30 : 27,
              marginTop: compact ? spacing[4] : spacing[24],
              textAlign: "center",
            },
          ]}
        >
          {title}
        </Text>
      ) : null}
      {subtitle ? (
        <Text
          style={[
            textStyles.bodySmall,
            {
              color: colors.text.secondary,
              fontSize: compact ? 16 : 14,
              lineHeight: compact ? 24 : 21,
              textAlign: "center",
              marginTop: compact ? spacing[8] : spacing[0],
              maxWidth: compact ? 320 : 260,
            },
          ]}
        >
          {subtitle}
        </Text>
      ) : null}
    </View>
  );
}
