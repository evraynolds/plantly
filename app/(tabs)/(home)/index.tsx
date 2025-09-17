import { StyleSheet, FlatList } from "react-native";
import { theme } from "../../../theme";
import { usePlantStore } from "@/store/plantsStore";
import { PlantCard } from "@/components/PlantCard";

import { router } from "expo-router";
import { PlantlyButton } from "@/components/PlantlyButton";

export default function App() {
  const plants = usePlantStore((state) => state.plants);

  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      data={plants}
      renderItem={({ item }) => <PlantCard plant={item} />}
      ListEmptyComponent={
        <PlantlyButton
          title="Add your first plant"
          onPress={() => router.navigate("/new")}
        />
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.color.white,
  },
  contentContainer: {
    padding: 12,
  },
});
