import { Text, View } from "react-native";

import Logo from "../../../assets/images/logo.svg";
import { colors, spacing } from "../../../trast/theme";

const LOGO_WIDTH = 190;
const LOGO_HEIGHT = 120;

type BrandMarkProps = {
  wordmark?: string;
};

export function BrandMark({ wordmark = "Stride" }: BrandMarkProps) {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        gap: spacing[16],
      }}
    >
      <Logo width={LOGO_WIDTH} height={LOGO_HEIGHT} />
      <Text
        style={{
          fontSize: 64,
          lineHeight: 70,
          fontWeight: "800",
          color: colors.text.action,
          letterSpacing: -1,
        }}
      >
        {wordmark}
      </Text>
    </View>
  );
}
