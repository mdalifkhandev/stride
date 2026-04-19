import { useRouter } from "expo-router";
import { Text, View } from "react-native";

import { SignupSuccessMark } from "../../../../components/auth/signup/SignupSuccessMark";
import { AppButton } from "../../../../components/ui/AppButton";
import { AppScreen } from "../../../../components/ui/AppScreen";
import { colors, spacing, textStyles } from "../../../../trast/theme";

export default function SignupSuccessScreen() {
  const router = useRouter();

  return (
    <AppScreen>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: spacing[56],
        }}
      >
        <SignupSuccessMark />
        <Text
          style={[
            textStyles.titleT2,
            {
              color: colors.text.primary,
              textAlign: "center",
              fontWeight: "500",
            },
          ]}
        >
          Account Created Successfully!
        </Text>
      </View>

      <View style={{ paddingBottom: spacing[8] }}>
        <AppButton label="Done" />
      </View>
    </AppScreen>
  );
}
