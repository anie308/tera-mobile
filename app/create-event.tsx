import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "@/components/Button";
import { useNavigation } from "expo-router";

const CreateEvent = () => {
  const navigation = useNavigation();
  //bg-lightBg dark:bg-darkBg
  return (
    <SafeAreaView className="flex-1 p-[20px] bg-lightBg flex-col items-center">
      <View className="flex-row items-center justify-between w-full">
        <Text className="text-[20px] font-[500] text-start ">Create Event</Text>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="h-[30px] w-[30px] bg-gray-300 rounded-[5px]"
        ></TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="w-full mt-[5%]"
      >
        <View className="mb-[5%] flec-col w-full " style={{ gap: 15 }}>
          <TouchableOpacity className="w-full max-w-[368px] bg-gray-200  h-[350px] rounded-[20px]"></TouchableOpacity>
          <TextInput
            className="text-[16px] h-[50px] bg-gray-200 rounded-[10px] px-[10px] placeholder:text-[16px]"
            placeholder="Event Name"
            placeholderTextColor="gray"
          />
          <TouchableOpacity className="p-[10px] bg-gray-200 w-full rounded-[10px] flex-row items-center space-x-[5px]">
            <View className="h-[20px] rounded-[5px] w-[20px] bg-gray-300"></View>
            <View>
              <Text className="font-[500] text-[14px]">
                Wednesday, August 14
              </Text>
              <Text className="text-[14px]">1:30 PM -- 2:30 PM GMT+1</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="p-[10px] bg-gray-200 w-full rounded-[10px] flex-row items-center space-x-[5px]">
            <View className="h-[20px] rounded-[5px] w-[20px] bg-gray-300"></View>
            <View>
              <Text className="font-[500] text-[14px]">Add Event Location</Text>
              <Text className="text-[14px]">
                Offline location or virtual link
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="p-[10px] bg-gray-200 w-full rounded-[10px] flex-row items-center space-x-[5px]">
            <View className="h-[20px] rounded-[5px] w-[20px] bg-gray-300"></View>
            <Text className="font-[500] text-[14px]">Add Description</Text>
          </TouchableOpacity>
        </View>
        <Button text="Create Event" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateEvent;
