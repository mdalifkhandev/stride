import { Feather, Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

type PersonalizeQuestionCardProps = {
  question: string;
  answers: string[];
  onSaveAnswers?: (answers: string[]) => void;
};

export function PersonalizeQuestionCard({
  question,
  answers,
  onSaveAnswers,
}: PersonalizeQuestionCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [draftAnswer, setDraftAnswer] = useState(answers.join(", "));

  useEffect(() => {
    if (!isEditing) {
      setDraftAnswer(answers.join(", "));
    }
  }, [answers, isEditing]);

  function normalizeAnswers(value: string) {
    return value
      .split(/,|\n/)
      .map((item) => item.trim())
      .filter(Boolean);
  }

  function handleToggleEdit() {
    if (isEditing) {
      const nextAnswers = normalizeAnswers(draftAnswer);
      onSaveAnswers?.(nextAnswers.length ? nextAnswers : answers);
      setIsEditing(false);
      return;
    }

    setIsEditing(true);
  }

  function handleBlur() {
    if (!isEditing) {
      return;
    }

    const nextAnswers = normalizeAnswers(draftAnswer);
    onSaveAnswers?.(nextAnswers.length ? nextAnswers : answers);
    setIsEditing(false);
  }

  return (
    <View className="rounded-[20px] bg-white px-4 py-5 shadow-sm">
      <View className="flex-row items-start justify-between">
        <View className="flex-row items-center gap-2">
          <Ionicons name="help-circle-outline" size={22} color="#A0A0A0" />
          <Text className=" text-[16px] leading-[24px] text-[#6E6E6E]">
            Question
          </Text>
        </View>

        <Pressable onPress={handleToggleEdit} className="mt-0.5">
          {isEditing ? (
            <Ionicons name="checkmark" size={20} color="#2B6FD6" />
          ) : (
            <Feather name="edit-2" size={20} color="#A0A0A0" />
          )}
        </Pressable>
      </View>

      <Text className="mt-3 text-[18px] leading-[30px] text-[#252B36]">
        {question}
      </Text>

      <View className="mt-3 flex-row items-center gap-2">
        <Ionicons name="return-down-back-outline" size={22} color="#A0A0A0" />
        <Text className=" text-[16px] leading-[24px] text-[#6E6E6E]">
          Answered
        </Text>
      </View>

      {isEditing ? (
        <TextInput
          value={draftAnswer}
          onChangeText={setDraftAnswer}
          onBlur={handleBlur}
          onSubmitEditing={handleBlur}
          placeholder="Type your answer"
          autoFocus
          multiline
          className="mt-3 text-[16px] leading-[24px] text-[#252B36]"
          style={{
            minHeight: 44,
            borderBottomWidth: 1,
            borderBottomColor: "#D4D8DE",
            paddingBottom: 6,
          }}
          selectionColor="#2B6FD6"
        />
      ) : (
        <View className="mt-2 gap-2">
          {answers.map((answer) => (
            <View key={answer} className="flex-row items-start gap-3">
              <Text className=" text-[20px] leading-[24px] text-[#252B36]">
                •
              </Text>
              <Text className="flex-1 text-[16px] leading-[28px] text-[#252B36]">
                {answer}
              </Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
}

