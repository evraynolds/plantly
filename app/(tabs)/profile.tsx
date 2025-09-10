import { Text, View, StyleSheet, Button } from "react-native";
import { theme } from "../../theme";
import { useUserStore } from "@/store/userStore";
import { PlantlyButton } from "@/components/PlantlyButton";

export default function ProfileScreen() {
  const toggleHandleOnboarded = useUserStore(
    (store) => store.toggleHasOnboarded,
  );

  const handlePress = () => {
    toggleHandleOnboarded();
  };

  return (
    <View style={styles.container}>
      <PlantlyButton title="Back to onboarding" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.color.white,
  },
});
