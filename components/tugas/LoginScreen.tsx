import { Button, Text, TextInput, View } from "react-native";

export default function LoginScreen() {
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
        Login
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
        <Text>Email</Text>
        {/* Belajar Text Input */}
        <TextInput
          placeholder="Masukkan email"
          style={{
            color: "grey",
            borderColor: "grey",
            borderWidth: 1,
            borderRadius: 10,
            padding: 8,
            marginVertical: 10,
          }}
        />
        <Text>Password</Text>
        {/* Belajar Text Input */}
        <TextInput
          placeholder="Masukkan password"
          style={{
            color: "grey",
            borderColor: "grey",
            borderWidth: 1,
            borderRadius: 10,
            padding: 8,
            marginVertical: 10,
          }}
        />
        <Button title="Login" />
      </View>
    </View>
  );
}
