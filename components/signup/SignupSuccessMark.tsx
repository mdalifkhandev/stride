import { StyleSheet, View } from "react-native";

import SuccessMark from "../../assets/images/success.svg";
import { spacing } from "../../theme/theme";

export function SignupSuccessMark() {
  return (
    <View style={styles.wrap}>
      <SuccessMark width={200} height={200} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    width: 140,
    height: 120,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: spacing[16],
  },
});
