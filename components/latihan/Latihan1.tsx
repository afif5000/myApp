import { Text, TextInput, View } from "react-native";

export default function Latihan1() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "Grey",
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 15 }}>
        Aplikasi Data
      </Text>

      <View
        style={{
          width: "100%",
          padding: 20,
          backgroundColor: "white",
          borderRadius: 10,
        }}
      >
        {/* Belajar Text */}
        <Text>Nama</Text>
        {/* Belajar Text Input */}
        <TextInput
          placeholder="Masukkan nama kamu"
          style={{
            borderWidth: 1,
            borderRadius: 10,
            padding: 8,
            marginVertical: 10,
          }}
        />
        <Text>Kelas</Text>
        {/* Belajar Text Input */}
        <TextInput placeholder="Masukkan kelas kamu" />
        <Text>Hobi</Text>
        {/* Belajar Text Input */}
        <TextInput placeholder="Masukkan hobi kamu" />
      </View>
    </View>
  );
}
