import { Text, View } from "react-native";

import { Image } from "expo-image";
import { colors, spacing, textStyles } from "../../../theme";

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
      <Image
        source={require("../../../assets/images/logo-small.png")}
        contentFit="contain"
        style={{ width: 100, height: 50 }}
      />

      <Text>sdfsdf</Text>

      {title ? (
        <Text
          style={[
            compact ? textStyles.h2 : textStyles.titleT2, // nearest to 22 when compact
            {
              color: colors.text.primary,
              fontWeight: "700",
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
            compact ? textStyles.bodyLarge : textStyles.bodySmall,
            {
              color: colors.text.secondary,
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
