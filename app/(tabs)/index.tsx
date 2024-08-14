import CreateButton from "@/components/CreateButton";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-lightBg p-[20px]">
      <StatusBar  style="dark" />
      <Text className="">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, id
        amet dolores veritatis animi eos temporibus eveniet commodi, debitis
        facilis optio provident cumque, velit tenetur ipsam modi voluptate?
        Quidem, culpa!
      </Text>
      <CreateButton/>
    </SafeAreaView>
  );
}
