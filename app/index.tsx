import { Text, TextInput, View } from "react-native";


export default function Index() {
  return (
    <View>
      {/* Belajar Text */}
      <Text>Nama</Text>

      {/* Belajar Text Input */}
      <TextInput placeholder="Abdullah"
      style={{
        height: 40,
        padding: 5,
        marginHorizontal: 8,
        borderWidth: 1,
      }}
      />
      <Text>Kelas</Text>

      {/* Belajar Text Input */}
      <TextInput placeholder="11"
      style={{
        height: 40,
        padding: 5,
        marginHorizontal: 8,
        borderWidth: 1,
      }}
      />
      <Text>Hobi</Text>

      {/* Belajar Text Input */}
      <TextInput placeholder="Design"
      style={{
        height: 40,
        padding: 5,
        marginHorizontal: 8,
        borderWidth: 1,
      }}
      />
    </View>
  );
}
