import { StyleSheet, Text, View } from "react-native";

import Logo from "../../assets/images/logo.svg";
import { colors, spacing } from "../../theme/theme";

const LOGO_WIDTH = 190;
const LOGO_HEIGHT = 120;

type BrandMarkProps = {
  wordmark?: string;
};

export function BrandMark({ wordmark = "Stride" }: BrandMarkProps) {
  return (
    <View style={styles.container}>
      <Logo width={LOGO_WIDTH} height={LOGO_HEIGHT} />
      <Text style={styles.wordmark}>{wordmark}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: spacing[16],
  },
  wordmark: {
    fontSize: 64,
    lineHeight: 70,
    fontWeight: "800",
    color: colors.text.action,
    letterSpacing: -1,
  },
});
