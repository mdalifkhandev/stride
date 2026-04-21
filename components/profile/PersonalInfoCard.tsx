import { View } from "react-native";

import { PersonalInfoRow } from "./PersonalInfoRow";

type Item = {
  label: string;
  value: string;
};

type PersonalInfoCardProps = {
  items: Item[];
  onUpdateItem?: (label: string, value: string) => void;
};

export function PersonalInfoCard({
  items,
  onUpdateItem,
}: PersonalInfoCardProps) {
  return (
    <View className="mb-7 rounded-[20px] bg-white px-4 py-5 shadow-sm">
      {items.map((item, index) => (
        <View key={item.label} className={index > 0 ? "pt-5" : ""}>
          <PersonalInfoRow
            label={item.label}
            value={item.value}
            isLast={index === items.length - 1}
            onSave={(value) => onUpdateItem?.(item.label, value)}
          />
        </View>
      ))}
    </View>
  );
}
