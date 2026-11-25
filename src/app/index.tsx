"use client";

import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { StyleSheet, View } from "react-native";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    // ms
    // 1s = 1000 ms
    // 3s = 3000 ms

    setTimeout(() => router.push("/onboarding"), 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/Content.png")}
        style={{
          width: "100%",
          height: 100,
          objectFit: "cover",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});