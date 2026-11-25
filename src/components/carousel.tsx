"use client";

import { Image, ImageSource } from "expo-image";
import { Text, View } from "react-native";

const CarouselUI = ({
    image,
    header,
    description,
}: {
    image: ImageSource; // Updated from string
    header: string;
    description: string;
}) => {
    return (
        <View className="flex flex-col gap-2.5 w-[91%]">
            <Image
                source={image}
                style={{
                    height: "75%",
                    width: "96%",
                    borderRadius: 24,
                }}
            />
            <Text className="text-3xl font-semibold text-[#1E1E1E]">{header}</Text>
            <Text className="text-sm text-[#757575]">{description}</Text>
        </View>
    );
};

export default CarouselUI;