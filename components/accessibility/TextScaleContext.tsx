import {
  createContext,
  useContext,
  useMemo,
  useState,
  type PropsWithChildren,
} from "react";
import {
  PanResponder,
  Pressable,
  Text,
  View,
  type LayoutChangeEvent,
} from "react-native";

let currentTextScale = 1;

export const textScaleOptions = [0.8, 0.9, 1, 1.15, 1.3] as const;
const textScaleLabels = ["1*", "2*", "3*", "4*", "5*"] as const;

type TextScaleValue = (typeof textScaleOptions)[number];

type TextScaleContextValue = {
  textScale: TextScaleValue;
  setTextScale: (value: TextScaleValue) => void;
};

const TextScaleContext = createContext<TextScaleContextValue | null>(null);

export function getCurrentTextScale() {
  return currentTextScale;
}

export function scaleTextSize(size: number) {
  return Math.round(size * currentTextScale * 100) / 100;
}

export function scaleLineHeight(height: number) {
  return Math.round(height * currentTextScale * 100) / 100;
}

export function TextScaleProvider({ children }: PropsWithChildren) {
  const [textScale, setTextScale] = useState<TextScaleValue>(1);
  currentTextScale = textScale;

  const value = useMemo(
    () => ({
      textScale,
      setTextScale,
    }),
    [textScale],
  );

  return (
    <TextScaleContext.Provider value={value}>
      {children}
    </TextScaleContext.Provider>
  );
}

export function useTextScale() {
  const context = useContext(TextScaleContext);

  if (!context) {
    throw new Error("useTextScale must be used within TextScaleProvider");
  }

  return context;
}

type TextScaleSliderProps = {
  title?: string;
};

export function TextScaleSlider({
  title = "Text Size",
}: TextScaleSliderProps) {
  const { textScale, setTextScale } = useTextScale();
  const [trackWidth, setTrackWidth] = useState(0);
  const activeIndex = textScaleOptions.indexOf(textScale);
  const activeLabel = textScaleLabels[activeIndex] ?? "3*";
  const stepCount = textScaleOptions.length - 1;
  const stepWidth = stepCount > 0 ? trackWidth / stepCount : 0;
  const thumbOffset = trackWidth > 0 ? stepWidth * activeIndex : 0;

  const updateFromPosition = (position: number) => {
    if (trackWidth <= 0) {
      return;
    }

    const clamped = Math.min(Math.max(position, 0), trackWidth);
    const index = Math.round(clamped / stepWidth);
    setTextScale(textScaleOptions[index] ?? 1);
  };

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: (event) => {
      updateFromPosition(event.nativeEvent.locationX);
    },
    onPanResponderMove: (event) => {
      updateFromPosition(event.nativeEvent.locationX);
    },
  });

  const handleTrackLayout = (event: LayoutChangeEvent) => {
    setTrackWidth(event.nativeEvent.layout.width);
  };

  return (
    <View
      style={{
        marginTop: 16,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: "#D4D8DE",
        backgroundColor: "#FFFFFF",
        padding: 16,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontFamily: "Inter-SemiBold",
            fontSize: 14,
            lineHeight: 21,
            color: "#252B36",
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            fontFamily: "Inter-Medium",
            fontSize: 13,
            lineHeight: 18,
            color: "#2B6FD6",
          }}
        >
          {activeLabel}
        </Text>
      </View>

      <View
        {...panResponder.panHandlers}
        onLayout={handleTrackLayout}
        style={{
          marginTop: 16,
          height: 32,
          justifyContent: "center",
        }}
      >
        <View
          style={{
            height: 6,
            borderRadius: 999,
            backgroundColor: "#E1EFFE",
          }}
        />
        <View
          style={{
            position: "absolute",
            left: 0,
            right: trackWidth - thumbOffset,
            height: 6,
            borderRadius: 999,
            backgroundColor: "#0052AD",
          }}
        />
        {trackWidth > 0 ? (
          <View
            style={{
              position: "absolute",
              left: Math.max(thumbOffset - 12, 0),
              width: 24,
              height: 24,
              borderRadius: 999,
              backgroundColor: "#0052AD",
              borderWidth: 3,
              borderColor: "#FFFFFF",
            }}
          />
        ) : null}
      </View>

      <View
        style={{
          marginTop: 12,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {textScaleOptions.map((option, index) => {
          const selected = option === textScale;
          return (
            <Pressable key={option} onPress={() => setTextScale(option)}>
              <Text
                style={{
                  fontFamily: selected ? "Inter-SemiBold" : "Inter-Regular",
                  fontSize: 12,
                  lineHeight: 18,
                  color: selected ? "#0052AD" : "#7B8591",
                }}
              >
                {textScaleLabels[index]}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
