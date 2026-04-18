import { useRouter } from "expo-router";
import { ScrollView, StyleSheet, Text } from "react-native";

import { SignupField } from "../../../components/signup/SignupField";
import { SignupProgressHeader } from "../../../components/signup/SignupProgressHeader";
import { AppButton } from "../../../components/ui/AppButton";
import { AppScreen } from "../../../components/ui/AppScreen";
import { colors, spacing, textStyles } from "../../../theme/theme";

export default function SignupProfileScreen() {
  const router = useRouter();

  return (
    <AppScreen>
      <SignupProgressHeader progress={20} />

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Let&apos;s Get To Know You</Text>

        <SignupField label="Full Name" placeholder="Type your full name" />
        <SignupField label="Nickname" placeholder="Type your nickname" />
        <SignupField
          label="Email"
          placeholder="example@gamil.com"
          keyboardType="email-address"
        />
      </ScrollView>

      <AppButton
        label="Next"
        onPress={() => router.push("/screens/signup/sex")}
      />
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    marginTop: 28,
  },
  content: {
    gap: 18,
    paddingBottom: spacing[24],
  },
  title: {
    ...textStyles.h1,
    color: colors.text.primary,
    fontWeight: "700",
    lineHeight: 42,
    // maxWidth: 250,
    marginBottom: spacing[8],
  },
});
