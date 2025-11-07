import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const images = [
  require("@/assets/images/image-0.png"),
  require("@/assets/images/image-1.png"),
  require("@/assets/images/image-2.png"),
  require("@/assets/images/image-3.png"),
];
export default function AddScreen() {
  const [selectedImage, setSelectedImage] = useState<number>(0);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.appBar}>
        <Ionicons name="arrow-back" size={24} color="#FF5B13" />
        <Text style={styles.appBarTitle}>Add Note</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.inputTitle}
          placeholder="Note Title"
          selectionColor="#FF5B13"
        />
        <TextInput
          style={styles.inputContent}
          placeholder="Note Content"
          selectionColor="#FF5B13"
          textAlignVertical="top"
          multiline={true}
        />

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {images.map((img, index) => (
            <TouchableOpacity
              style={[
                styles.boxImage,
                selectedImage === index && styles.imageSelected,
              ]}
              onPress={() => setSelectedImage(index)}
            >
              <Image style={styles.image} source={img} />
            </TouchableOpacity>
          ))}
        </ScrollView>
        <View style={styles.button}>
          <TouchableOpacity style={styles.add}>
            <Text style={{ color: "white" }}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  appBar: {
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 8,
  },
  appBarTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },

  form: {
    padding: 10,
  },

  inputTitle: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#ccc",
    padding: 15,
    marginBottom: 10,
  },

  inputContent: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#ccc",
    padding: 15,
    marginBottom: 10,
    height: 150,
  },

  boxImage: {
    height: 100,
    width: 100,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    marginRight: 10,
  },

  image: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },

  imageSelected: {
    borderColor: "#FF5B13",
  },

  button: {
    flexDirection: "row",
    padding: 10,
    marginTop: 330,
  },

  add: {
    backgroundColor: "#FF5B13",
    borderRadius: 10,
    width: "100%",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
});
