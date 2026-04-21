import { Text, View } from "react-native";

import Logo from "../../../assets/images/logo.svg";
import { colors, spacing, textStyles } from "../../../trast/theme";

const LOGO_WIDTH = 90;
const LOGO_HEIGHT = 42;

type SignupChoiceHeaderProps = {
  title: string;
  subtitle: string;
};

export function SignupChoiceHeader({
  title,
  subtitle,
}: SignupChoiceHeaderProps) {
  return (
    <View style={{ alignItems: "center" }}>
      <Logo width={LOGO_WIDTH} height={LOGO_HEIGHT} />
      <Text
        style={[
          textStyles.h2,
          {
            color: colors.text.action,
            fontWeight: "700",
            fontSize: 24,
            lineHeight: 30,
            marginTop: spacing[4],
          },
        ]}
      >
        Stride
      </Text>
      <Text
        style={[
          textStyles.h2,
          {
            color: colors.text.primary,
            fontWeight: "700",
            fontSize: 24,
            lineHeight: 36,
            marginTop: spacing[40],
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
            marginTop: spacing[0],
            textAlign: "center",
          },
        ]}
      >
        {subtitle}
      </Text>
    </View>
  );
}
