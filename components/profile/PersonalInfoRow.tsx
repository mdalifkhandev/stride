import { Feather, Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

type PersonalInfoRowProps = {
  label: string;
  value: string;
  isLast?: boolean;
  onSave?: (value: string) => void;
};

export function PersonalInfoRow({
  label,
  value,
  isLast = false,
  onSave,
}: PersonalInfoRowProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [draftValue, setDraftValue] = useState(value);

  useEffect(() => {
    if (!isEditing) {
      setDraftValue(value);
    }
  }, [isEditing, value]);

  function handleToggleEdit() {
    if (isEditing) {
      const nextValue = draftValue.trim() || value;
      setDraftValue(nextValue);
      onSave?.(nextValue);
      setIsEditing(false);
      return;
    }

    setIsEditing(true);
  }

  function handleBlur() {
    if (!isEditing) {
      return;
    }

    const nextValue = draftValue.trim() || value;
    setDraftValue(nextValue);
    onSave?.(nextValue);
    setIsEditing(false);
  }

  return (
    <View className={!isLast ? "border-b border-[#D4D8DE] pb-4" : ""}>
      <View className="flex-row items-start justify-between">
        <View className="flex-1 pr-3">
          <Text className=" text-[18px] leading-[28px] text-[#252B36]">
            {label}
          </Text>
          {isEditing ? (
            <TextInput
              value={draftValue}
              onChangeText={setDraftValue}
              onBlur={handleBlur}
              onSubmitEditing={handleBlur}
              autoFocus
              className="mt-1 text-[16px] leading-[24px] text-[#252B36]"
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "#D4D8DE",
                paddingBottom: 4,
              }}
              selectionColor="#2B6FD6"
            />
          ) : (
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              className="mt-1 text-[16px] leading-[24px] text-[#7A7A7A]"
            >
              {value}
            </Text>
          )}
        </View>

        <Pressable
          onPress={handleToggleEdit}
          className="mt-1 h-8 w-8 items-center justify-center"
        >
          {isEditing ? (
            <Ionicons name="checkmark" size={20} color="#2B6FD6" />
          ) : (
            <Feather name="edit-2" size={20} color="#9AA0A6" />
          )}
        </Pressable>
      </View>
    </View>
  );
}

