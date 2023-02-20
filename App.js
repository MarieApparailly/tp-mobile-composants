import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World ;)</Text>
      <StatusBar style="auto" />
      <View style={styles.brick}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    fontSize: 50,
  },

  brick: {
    width: 200,
    height: 200,
    backgroundColor: "#68C8DE",
    alignItems: "center",
    padding: 10,
    margin: 30,
    border: "10 solid",
    borderColor: "#218197",
    borderRadius: 20,
  },
});
