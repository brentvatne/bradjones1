import React from "react";
import { View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function App() {
  return (
    <View>
      <DateTimePicker
        mode="date"
        value={new Date()}
        display="spinner"
        onChange={() => null}
      />
    </View>
  );
}
