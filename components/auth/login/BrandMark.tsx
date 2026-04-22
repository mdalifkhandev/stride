import { Text, View } from "react-native";

import {
  scaleLineHeight,
  scaleTextSize,
  useTextScale,
} from "../../accessibility/TextScaleContext";
import Logo from "../../../assets/images/logo.svg";
import { colors, spacing } from "../../../trast/theme";

const LOGO_WIDTH = 220;
const LOGO_HEIGHT = 136;

type BrandMarkProps = {
  wordmark?: string;
};

export function BrandMark({ wordmark = "Stride" }: BrandMarkProps) {
  useTextScale();

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
          fontSize: scaleTextSize(64),
          lineHeight: scaleLineHeight(70),
          fontWeight: "800",
          color: colors.text.action,
          letterSpacing: scaleTextSize(-1),
        }}
      >
        {wordmark}
      </Text>
    </View>
  );
}
