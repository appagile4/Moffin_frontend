import { StyleSheet, View } from "react-native";
import AnimatedLogo from "../components/AnimatedLogo";

export default function Index() {
  return (
    <View style={styles.container}>
      <AnimatedLogo width={450} height={450} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    justifyContent: "center",
    alignItems: "center",
  },
});
