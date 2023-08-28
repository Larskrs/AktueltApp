import { useState } from "react";
import { View, Text, ScrollView, SafeAreaView, Linking } from "react-native"
import { Stack, useRouter } from "expo-router"
import 'react-native-gesture-handler';

import { COLORS, icons, images, SIZES } from "../constants"
import { StatusBar } from "expo-status-bar";

import useFetch from "../hook/useFetch"

import { News, LatestVideos, ScreenHeaderBtn, LatestAlbums } from "../components"

const Home = () => {
    const router = useRouter();

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.background}}>
            <Stack.Screen 
                options={{
                    headerStyle: {backgroundColor:COLORS.background},
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn background={"transparent"} iconUrl={icons.aktuelt_tv} dimension="100%" />
                        ),
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
                        ),
                    headerTitle: "",
                }}
            />

            <StatusBar style="dark" />
            
            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        flex: 1,
                        padding: SIZES.medium,
                    }}
                >

                <News />
                <LatestVideos />
                <LatestAlbums />

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;