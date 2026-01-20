import { StyleSheet, View } from "react-native";
import Header from "../_components/home/Header";
import Jobs from "../_components/home/Jobs";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <Jobs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },
});
