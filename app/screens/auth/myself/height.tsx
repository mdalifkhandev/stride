import { useState } from "react";

import { Href, useRouter } from "expo-router";
import { ScrollView, Text, View } from "react-native";


import { ScrollMeasurePicker } from "../../../../components/auth/signup/ScrollMeasurePicker";
import { SignupProgressHeader } from "../../../../components/auth/signup/SignupProgressHeader";
import { UnitToggle } from "../../../../components/auth/signup/UnitToggle";
import { AppButton } from "../../../../components/ui/AppButton";
import { AppScreen } from "../../../../components/ui/AppScreen";
import { colors, spacing, textStyles } from "../../../../theme";

const HEIGHT_OPTIONS = ["4'", "5'", "6'", "7'"] as const;

const HEIGHT_DECIMALS = [
  '00"',
  '01"',
  '02"',
  '03"',
  '04"',
  '05"',
  '06"',
  '07"',
  '08"',
  '09"',
  '10"',
  '11"',
] as const;

const METER_OPTIONS = ["0", "1", "2"] as const;

const METER_DECIMALS = [
  ".00",
  ".01",
  ".02",
  ".03",
  ".04",
  ".05",
  ".06",
  ".07",
  ".08",
  ".09",
  ".10",
  ".11",
  ".12",
  ".13",
  ".14",
  ".15",
  ".16",
  ".17",
  ".18",
  ".19",
  ".20",
  ".21",
  ".22",
  ".23",
  ".24",
  ".25",
  ".26",
  ".27",
  ".28",
  ".29",
  ".30",
  ".31",
  ".32",
  ".33",
  ".34",
  ".35",
  ".36",
  ".37",
  ".38",
  ".39",
  ".40",
  ".41",
  ".42",
  ".43",
  ".44",
  ".45",
  ".46",
  ".47",
  ".48",
  ".49",
  ".50",
  ".51",
  ".52",
  ".53",
  ".54",
  ".55",
  ".56",
  ".57",
  ".58",
  ".59",
  ".60",
  ".61",
  ".62",
  ".63",
  ".64",
  ".65",
  ".66",
  ".67",
  ".68",
  ".69",
  ".70",
  ".71",
  ".72",
  ".73",
  ".74",
  ".75",
  ".76",
  ".77",
  ".78",
  ".79",
  ".80",
  ".81",
  ".82",
  ".83",
  ".84",
  ".85",
  ".86",
  ".87",
  ".88",
  ".89",
  ".90",
  ".91",
  ".92",
  ".93",
  ".94",
  ".95",
  ".96",
  ".97",
  ".98",
  ".99",
] as const;

export default function SignupHeightScreen() {
  const router = useRouter();
  const weightRoute = "/screens/auth/myself/weight" as Href;
  const [unit, setUnit] = useState<"Ft" | "Meter">("Ft");
  const [selectedLeftIndex, setSelectedLeftIndex] = useState(1);
  const [selectedRightIndex, setSelectedRightIndex] = useState(5);

  const isMeter = unit === "Meter";
  const leftValues = isMeter ? METER_OPTIONS : HEIGHT_OPTIONS;
  const rightValues = isMeter ? METER_DECIMALS : HEIGHT_DECIMALS;

  return (
    <AppScreen>
      <ScrollView
        bounces={false}
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <SignupProgressHeader currentStep={3} totalSteps={4} />

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
            What&apos;s your height?
          </Text>
          <UnitToggle
            options={["Ft", "Meter"] as const}
            value={unit}
            onChange={setUnit}
          />

          <ScrollMeasurePicker
            leftValues={leftValues}
            rightValues={rightValues}
            selectedLeftIndex={selectedLeftIndex}
            selectedRightIndex={selectedRightIndex}
            onChangeLeft={setSelectedLeftIndex}
            onChangeRight={setSelectedRightIndex}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            gap: spacing[16],
            marginTop: spacing[20],
          }}
        >
          <View style={{ flex: 1 }}>
            <AppButton
              label="Previous"
              variant="secondary"
              onPress={() => router.back()}
            />
          </View>
          <View style={{ flex: 1 }}>
            <AppButton
              label="Continue"
              onPress={() => router.push(weightRoute)}
            />
          </View>
        </View>
      </ScrollView>
    </AppScreen>
  );
}
