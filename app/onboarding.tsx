import { Text, View, StyleSheet, Button } from "react-native";
import { theme } from "@/theme";
import { useRouter } from "expo-router";
import { useUserStore } from "@/store/userStore";
import { PlantlyButton } from "@/components/PlantlyButton";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";

import { PlantlyImage } from "@/components/PlantlyImage";

export default function OnboardingScreen() {
  const router = useRouter();
  const toggleHandleOnboarded = useUserStore(
    (state) => state.toggleHasOnboarded,
  );
  const handlePress = () => {
    toggleHandleOnboarded();
    router.replace("/");
  };

  return (
    <LinearGradient
      start={{ x: 0.5, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={[
        theme.color.green,
        theme.color.appleGreen,
        theme.color.limeGreen,
      ]}
      style={styles.container}
    >
      <StatusBar style="light" />
      <View>
        <Text style={styles.heading}>Plantly</Text>
        <Text style={styles.tagline}>
          Keep your plants healthy and hydrated
        </Text>
      </View>
      <PlantlyImage />
      <PlantlyButton title="Let me in" onPress={handlePress} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: theme.color.white,
  },
  heading: {
    fontSize: 42,
    color: theme.color.white,
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "center",
  },
  tagline: {
    fontSize: 24,
    color: theme.color.white,
    textAlign: "center",
    padding: 16,
  },
});
