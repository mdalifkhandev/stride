import { Text, View } from "react-native";

import Logo from "../../../assets/images/logo.svg";
import { colors, spacing, textStyles } from "../../../trast/theme";

const LOGO_WIDTH = 130;
const LOGO_HEIGHT = 60;

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
            fontSize: 40,
            lineHeight: 40,
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
              marginTop: compact ? spacing[16] : spacing[24],
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
              textAlign: "center",
              maxWidth: 260,
            },
          ]}
        >
          {subtitle}
        </Text>
      ) : null}
    </View>
  );
}
