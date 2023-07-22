import { View, Text, StyleSheet } from "react-native";
function SubTitle({ children }) {
  return (
    <>
      <View style={styles.subTitleContaiiner}>
        <Text style={styles.subTitle}>{children}</Text>
      </View>
    </>
  );
}

export default SubTitle;

const styles = StyleSheet.create({
  subTitle: {
    color: "#d2b597",
    fontSize: 18,
    fontWeight: "bold",

    textAlign: "center",
  },
  subTitleContaiiner: {
    borderBottomColor: "#bf9872",
    borderBottomWidth: 2,
    marginHorizontal: 12,
    marginVertical: 4,
    padding: 6,
  },
});
