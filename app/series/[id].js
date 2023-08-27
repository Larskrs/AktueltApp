import { useState } from "react";
import { View, Text, ScrollView, SafeAreaView, Linking } from "react-native"
import { Stack, useRouter, useSearchParams } from "expo-router"
import 'react-native-gesture-handler';

import { COLORS, icons, images, SIZES } from "../../constants"
import { StatusBar } from "expo-status-bar";

import useFetch from "../../hook/useFetch"

import { Episodes, ScreenHeaderBtn } from "../../components"

const Home = () => {
    const params = useSearchParams();
    const router = useRouter();

    const seriesId = params.id

    const { data, isLoading, error, refresh} = useFetch(
        `/media/series/${seriesId}?limit=3&order=new`, {});

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.background}}>
            <Stack.Screen 
                options={{
                    headerStyle: {backgroundColor:COLORS.background, color: COLORS.white},
                    headerTitleStyle: {color: COLORS.white, fontSize: 18},
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn background={"transparent"} iconUrl={icons.aktuelt_tv} dimension="100%" />
                        ),
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
                        ),
                    headerTitle: data.title ? data.title : "laster inn...",
                }}
            />

            <StatusBar style="light" />
            

                <View
                    style={{
                        flex: 1,
                        padding: SIZES.medium,
                    }}
                    >

                {seriesId && <Episodes id={seriesId} /> }

                </View>
                </SafeAreaView>
    )
}

export default Home;