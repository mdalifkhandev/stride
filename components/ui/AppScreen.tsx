import type { PropsWithChildren } from "react";

import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { colors, spacing } from "../../theme/theme";

type AppScreenProps = PropsWithChildren<{
  padded?: boolean;
}>;

export function AppScreen({ children, padded = true }: AppScreenProps) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.surface.primary }}>
      <View
        style={[
          { flex: 1, backgroundColor: colors.surface.primary },
          padded && {
            paddingHorizontal: spacing[16],
            paddingBottom: spacing[24],
          },
        ]}
      >
        {children}
      </View>
    </SafeAreaView>
  );
}
