import { useState } from "react";

import { Href, useRouter } from "expo-router";
import { Text, View } from "react-native";

import { ScrollMeasurePicker } from "../../../../components/auth/signup/ScrollMeasurePicker";
import { SignupProgressHeader } from "../../../../components/auth/signup/SignupProgressHeader";
import { UnitToggle } from "../../../../components/auth/signup/UnitToggle";
import { AppButton } from "../../../../components/ui/AppButton";
import { AppScreen } from "../../../../components/ui/AppScreen";
import { colors, spacing, textStyles } from "../../../../trast/theme";

const WEIGHT_VALUES = Array.from({ length: 301 }, (_, index) =>
  index.toString().padStart(3, "0"),
);
const WEIGHT_DECIMALS = Array.from({ length: 100 }, (_, index) =>
  index.toString().padStart(2, "0"),
);

export default function SignupWeightScreen() {
  const router = useRouter();
  const successRoute = "/screens/auth/myself/success" as Href;
  const [unit, setUnit] = useState<"Pounds" | "Kg">("Kg");
  const [selectedLeftIndex, setSelectedLeftIndex] = useState(80);
  const [selectedRightIndex, setSelectedRightIndex] = useState(0);

  return (
    <AppScreen>
      <SignupProgressHeader currentStep={4} totalSteps={4} />

      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          gap: spacing[24],
        }}
      >
        <Text
          style={[
            textStyles.titleT2,
            {
              color: colors.text.primary,
              fontWeight: "700",
              textAlign: "center",
            },
          ]}
        >
          What&apos;s your Weight?
        </Text>
        <UnitToggle
          options={["Pounds", "Kg"] as const}
          value={unit}
          onChange={setUnit}
        />

        <ScrollMeasurePicker
          leftValues={WEIGHT_VALUES}
          rightValues={WEIGHT_DECIMALS}
          selectedLeftIndex={selectedLeftIndex}
          selectedRightIndex={selectedRightIndex}
          onChangeLeft={setSelectedLeftIndex}
          onChangeRight={setSelectedRightIndex}
        />
      </View>

      <View style={{ flexDirection: "row", gap: spacing[16] }}>
        <View style={{ flex: 1 }}>
          <AppButton
            label="Previous"
            variant="secondary"
            onPress={() => router.back()}
          />
        </View>
        <View style={{ flex: 1 }}>
          <AppButton label="Done" onPress={() => router.push(successRoute)} />
        </View>
      </View>
    </AppScreen>
  );
}
