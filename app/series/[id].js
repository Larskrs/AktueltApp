import { useState } from "react";
import { View, Text, ScrollView, SafeAreaView, Linking, useWindowDimensions } from "react-native"
import { Stack, useRouter, useSearchParams } from "expo-router"
import { Image } from "expo-image";
import 'react-native-gesture-handler';

import { COLORS, icons, images, SIZES } from "../../constants"
import { StatusBar } from "expo-status-bar";

import useFetch from "../../hook/useFetch"

import { Episodes, ScreenHeaderBtn } from "../../components"

const Home = () => {
    const params = useSearchParams();
    const router = useRouter();
    const { height, width } = useWindowDimensions();

    const seriesId = params.id

    const { data, isLoading, error, refresh} = useFetch(
        `/media/series/${seriesId}?limit=3&order=new`, {});

    return (
        <SafeAreaView style={{flex: 1, height: height, backgroundColor: 'rgba(0, 0, 0, 0.75)'}}>
            <Stack.Screen 
                options={{
                    headerStyle: {backgroundColor: "transparent", color: COLORS.white, height: 0, opacity: 0},
                    headerTitleStyle: {color: COLORS.white, fontSize: 18},
                    headerShadowVisible: false,
                    headerTransparent: true,
                    headerBackVisible: false,
                    headerShown: true,
                    
                    
                    headerLeft: () => (
                        <ScreenHeaderBtn background={"transparent"} iconUrl={icons.aktuelt_tv} dimension="100%" />
                        ),
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
                        ),
                    headerTitle: "",
                }}
            />
        
                <StatusBar style="light" />
            
                <Image 
                    source={{uri: data.posters?.[0]}}
                    onLoad={(event) => console.log(event)}
                    blurRadius={100}

                    style={{ position: "absolute", top: 0, left: 0, width: width, height: height }}
                    transition={1000}
                />

                <ScrollView
                    showsVerticalScrollIndicator={false}
                    bounces={true}
                    contentOffset={200}
                    
                    contentContainerStyle={{
                        height: height + 200,
                        position: "absolute",
                        top: 0,
                        left: 0,
                        flex: 1,
                        width: width, 
                    }}
                    >


                <View style={{
                    top: 0,
                    left: 0,
                    alignItems: "center",
                    padding: SIZES.medium,
                    flex: 1,    
            }}>     

                    {data.type === "album" && <Image 
                        source={{uri: data.posters?.[0]}}
                        style={{ width: 200, height: 200, borderRadius: SIZES.medium }}
                        transition={500}
                        />}
                    {data.type !== "album" && <Image 
                        source={{uri: data.thumbnails?.[0]}}
                        onLoad={(event) => console.log(event)}
                        style={{ width: width - (SIZES.medium * 2), height: 200, borderRadius: SIZES.medium }}
                        transition={500}
                        />}
                        <Text style={{ 
                            fontSize: SIZES.xLarge, 
                            color: COLORS.white,
                            marginTop: SIZES.xxLarge,
                        }}>{data.title ? data.title : "Loading..."}</Text>
                    {seriesId && <Episodes id={seriesId} /> }

                </View>

                </ScrollView>
                </SafeAreaView>
    )
}

export default Home;