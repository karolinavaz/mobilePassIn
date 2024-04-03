import { Input } from "../components/input";
import { Text, View, Image,StatusBar } from "react-native";
import { FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import { colors } from "../styles/colors";
import { Button } from "../components/button";
import { Link } from "expo-router";

export default function Register() {
  return (
    <View className="flex-1 bg-green-500 item-center justify-center">
       <StatusBar barStyle="light-content" />
      <Image
        source={require("../assets/logo.png")}
        className="h-16"
        resizeMode="contain"
      />

      <View className="w-full mt-12 gap-3">
        <Input>
          <FontAwesome6
            name="user-circle"
            color={colors.green[200]}
            size={20}
          />
          <Input.Field placeholder="Nome completo"/>
        </Input>
        <Input>
          <MaterialIcons
            name="alternate-email"
            color={colors.green[200]}
            size={20}
          />
          <Input.Field placeholder="E-mail" keyboardType="email-address"/>
        </Input>
      </View>
      <Button title="Realizar inscrição" />

      <Link 
        href="/" 
        className="text-gray-100 text-base font-bold text-center mt-8"
      >
        Já possui ingresso?
      </Link>
    </View>
  );
}
