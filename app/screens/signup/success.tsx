import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

import { SignupSuccessMark } from "../../../components/signup/SignupSuccessMark";
import { AppButton } from "../../../components/ui/AppButton";
import { AppScreen } from "../../../components/ui/AppScreen";
import { colors, spacing, textStyles } from "../../../theme/theme";

export default function SignupSuccessScreen() {
  const router = useRouter();

  return (
    <AppScreen>
      <View style={styles.content}>
        <SignupSuccessMark />
        <Text style={styles.title}>Account Created Successfully!</Text>
      </View>

      <View style={styles.footer}>
        <AppButton label="Next" onPress={() => router.replace("/")} />
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: spacing[56],
  },
  title: {
    ...textStyles.titleT2,
    color: colors.text.primary,
    textAlign: "center",
    fontWeight: "500",
  },
  footer: {
    paddingBottom: spacing[8],
  },
});
