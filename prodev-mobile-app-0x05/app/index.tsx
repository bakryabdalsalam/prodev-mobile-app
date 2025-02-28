import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

const Index = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>ntainer: {
        <View style={styles.backgroundContainer}>
          <View style={styles.companyLogo}>
            <Image source={require("@/assets/images/Logo.png")} />
          </View>

          <View style={styles.textGroup}>width: "100%",
            <Text style={styles.textLarge}>Find your favorite place here</Text>nsions.get("window").height,
            <Text style={styles.textSmall}>The best prices for over 2 </Text>
            <Text style={styles.textSmall}>million properties worldwide</Text>
          </View>",
er",
          <View style={{ position: "absolute", bottom: 0, width: "100%" }}>padding: 20,
            <View style={styles.buttonGroup}>om: 50,
              <TouchableOpacity style={styles.button}>
                <Text style={{ ...styles.textSmall, color: "black" }}>Join here</Text>xtGroup: {
              </TouchableOpacity>: "center",

              <TouchableOpacity style={styles.transparentButton}>
                <Text style={styles.textSmall}>Sign In</Text>",
              </TouchableOpacity>
            </View>
            <View style={{ alignItems: "center", paddingVertical: 20 }}>textAlign: "center",
              <Text style={{ color: "white" }}>Continue to home</Text>om: 12,
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>fontWeight: "200",
  );",
};
: {
const styles = StyleSheet.create({te",
  container: {
    flex: 1,
  },
  backgroundContainer: {ntal: 5,
    flex: 1,ms: "center",
    backgroundColor: '#f5f5f5', // or any color you preferfontSize: 20,
  },,
  companyLogo: {
    width: "100%",
    alignItems: "center",te",
    padding: 20,
    marginBottom: 50,
  },
  textGroup: {ntal: 5,
    alignItems: "center",
  },: 20,
  textLarge: {backgroundColor: "white",
    color: "white",
    fontWeight: "800",
    fontSize: 40,p: {
    textAlign: "center",
    marginBottom: 12,gap: 20,
  }, paddingHorizontal: 20,
  textSmall: {  },
    color: "white",
    fontSize: 18,
    fontWeight: "200",n Index() {
    textAlign: "center",
  },
  transparentButton: {
    borderColor: "white",
    borderWidth: 2,Image}
    borderRadius: 40, style={styles.background}
    paddingVertical: 15,
    paddingHorizontal: 5,
    alignItems: "center",
    fontSize: 20,tyle={styles.companyLogo}>
    flex: 1,              <Image source={require("@/assets/images/Logo.png")} />
  },
  button: {
    borderColor: "white",
    borderWidth: 2,>
    borderRadius: 40, style={styles.textSmall}>The best prices for over 2 </Text>
    paddingVertical: 15,              <Text style={styles.textSmall}>million properties worldwide</Text>
    paddingHorizontal: 5,
    alignItems: "center",
    fontSize: 20, 0, width: "100%" }}>
    backgroundColor: "white",
    flex: 1,tyle={styles.button}>
  },                  <Text style={{ ...styles.textSmall, color: "black" }}>Join here</Text>
  buttonGroup: {
    flexDirection: "row",
    gap: 20,tyle={styles.transparentButton}>
    paddingHorizontal: 20,xt style={styles.textSmall}>Sign In</Text>
  },
});
tyle={{ alignItems: "center", paddingVertical: 20 }}>
export default Index;  
}