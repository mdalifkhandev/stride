import { Image } from "expo-image";
import { View } from "react-native";
import { spacing } from "../../../theme";

export function BrandMark() {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        gap: spacing[16],
      }}
    >
      <Image
        source={require("../../../assets/images/logo-big.png")}
        contentFit="contain"
        style={{
          width: 243,
          height: 140,
        }}
      />
    </View>
  );
}
