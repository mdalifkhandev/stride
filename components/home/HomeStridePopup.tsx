import { Modal, Pressable, View } from "react-native";

import Progres1 from "@/assets/images/progress1.svg";
import Progres2 from "@/assets/images/progress2.svg";
import Progres3 from "@/assets/images/progress3.svg";
import { ProgressGaugeCard } from "../progress/ProgressGaugeCard";
import { ProgressMetricCard } from "../progress/ProgressMetricCard";

type HomeStridePopupProps = {
  visible: boolean;
  onClose: () => void;
};

export function HomeStridePopup({ visible, onClose }: HomeStridePopupProps) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          paddingHorizontal: 30,
          backgroundColor: "rgba(24, 28, 35, 0.56)",
        }}
      >
        <Pressable
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          }}
          onPress={onClose}
        />

        <View
          style={{
            borderRadius: 20,
            backgroundColor: "#FFFFFF",
            padding: 12,
            shadowColor: "#0B2D5B",
            shadowOpacity: 0.18,
            shadowRadius: 16,
            shadowOffset: { width: 0, height: 8 },
            elevation: 12,
          }}
        >
          <ProgressGaugeCard score={700} maxScore={1500} />

          <View style={{ marginTop: 12, flexDirection: "row", gap: 12 }}>
            <ProgressMetricCard
              title="Mobility"
              value="450/500"
              icon={<Progres1 />}
            />
            <ProgressMetricCard
              title="Balance"
              value="450/500"
              icon={<Progres3 />}
            />
          </View>

          <View style={{ marginTop: 12 }}>
            <ProgressMetricCard
              title="Cognition"
              value="450/500"
              icon={<Progres2 />}
              fullWidth
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}
