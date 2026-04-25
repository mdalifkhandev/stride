import { View } from "react-native";

import SuccessMark from "../../../assets/images/success.svg";
import { spacing } from "../../../theme";

export function SignupSuccessMark() {
  return (
    <View
      style={{
        width: 140,
        height: 120,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        marginBottom: spacing[16],
      }}
    >
      <SuccessMark width={200} height={200} />
    </View>
  );
}
