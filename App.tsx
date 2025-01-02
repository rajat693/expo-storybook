import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Text } from "./components/ui/text";
import { StyleSheet, View, Platform } from "react-native";

function App() {
  return (
    <GluestackUIProvider mode="light">
      <View style={styles.container}>
        <Text className="text-warning-600" size="xl">
          Open up App.tsx to start working on your app!
        </Text>
      </View>
    </GluestackUIProvider>
  );
}

let AppEntryPoint = App;

if (process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === "true") {
  if (Platform.OS === "web") {
    AppEntryPoint = require("./.storybook").default;
  } else {
    AppEntryPoint = require("./.ondevice").default;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AppEntryPoint;
