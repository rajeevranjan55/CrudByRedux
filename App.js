import { StyleSheet, View } from "react-native";
import Routes from "./src/Navigations/Routes";
import { Provider } from "react-redux";
import { store } from "./src/Redux/store";

export default function App() {
  return (
    <View style={styles.container}>
      <Provider store={store}>
      <Routes />
      </Provider>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
