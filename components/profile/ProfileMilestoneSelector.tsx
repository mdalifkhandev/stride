import { Pressable, Text, View } from "react-native";

type ProfileMilestoneSelectorProps = {
  dayOptions: readonly number[];
  activityDays: number;
  selectorBackground: string;
  selectorBorder: string;
  selectorActiveBackground: string;
  selectorActiveText: string;
  selectorText: string;
  onSelect: (days: number) => void;
};

export function ProfileMilestoneSelector({
  dayOptions,
  activityDays,
  selectorBackground,
  selectorBorder,
  selectorActiveBackground,
  selectorActiveText,
  selectorText,
  onSelect,
}: ProfileMilestoneSelectorProps) {
  return (
    <View
      className="mt-4 rounded-2xl border px-3 py-3"
      style={{
        backgroundColor: selectorBackground,
        borderColor: selectorBorder,
      }}
    >
      <Text className=" text-[14px] text-[#252B36]">
        Preview milestone
      </Text>
      <View className="mt-3 flex-row gap-2">
        {dayOptions.map((days) => {
          const selected = activityDays === days;

          return (
            <Pressable
              key={days}
              onPress={() => onSelect(days)}
              className="flex-1 items-center rounded-xl border px-3 py-3"
              style={{
                backgroundColor: selected ? selectorActiveBackground : "#FFFFFF",
                borderColor: selected
                  ? selectorActiveBackground
                  : selectorBorder,
              }}
            >
              <Text
                className=" text-[15px]"
                style={{ color: selected ? selectorActiveText : selectorText }}
              >
                {days} Days
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

