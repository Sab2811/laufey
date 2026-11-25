"use client";

import { SafeAreaView, Text, useWindowDimensions, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Carousel } from "react-native-reanimated-carousel";
import CarouselUI from "../components/carousel";

const Onboarding = () => {
    const { width, height } = useWindowDimensions();

    const pages = [
        {
            image: require("@/assets/images/cat.png"),
            header: "Take control of your finances.",
            description:
                "Forget everything you know about the complicated world of finance. It can be easy.",
        },

        {
            image: require("@/assets/images/hand.png"),
            header: "Manage your savings.",
            description:
                "Tracking your expenses, and ensure your savings grow and are used wisely.",
        },

        {
            image: require("@/assets/images/bag.png"),
            header: "Control your finances.",
            description:
                "Making informed decisions, and planning to ensure financial stability and achieve your financial goals.",
        },
    ];

    return (
        <SafeAreaView>
            <GestureHandlerRootView>
                <View>
                    <Carousel
                        style={{ width, height, padding: 24 }}
                        data={pages}

                        renderItem={({ item, index }) => (
                            <CarouselUI
                                key={index}
                                image={item.image}
                                header={item.header}
                                description={item.description}
                            />
                        )}
                    />
                    <Text>Next</Text>
                </View>
            </GestureHandlerRootView>
        </SafeAreaView>
    );
};

export default Onboarding;