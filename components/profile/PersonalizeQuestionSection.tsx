import { View, Text } from "react-native";

import { PersonalizeQuestionCard } from "./PersonalizeQuestionCard";

type SectionItem = {
  question: string;
  answers: string[];
};

type PersonalizeQuestionSectionProps = {
  title: string;
  items: SectionItem[];
  onUpdateItem?: (question: string, answers: string[]) => void;
};

export function PersonalizeQuestionSection({
  title,
  items,
  onUpdateItem,
}: PersonalizeQuestionSectionProps) {
  return (
    <View className="gap-5">
      <View className="flex-row items-center gap-3">
        <Text className="font-['Inter-Bold'] text-[18px] leading-[28px] text-[#6E6E6E]">
          {title}
        </Text>
        <View className="h-px flex-1 bg-[#D4D8DE]" />
      </View>

      {items.map((item) => (
        <PersonalizeQuestionCard
          key={`${title}-${item.question}`}
          question={item.question}
          answers={item.answers}
          onSaveAnswers={(answers) => onUpdateItem?.(item.question, answers)}
        />
      ))}
    </View>
  );
}
