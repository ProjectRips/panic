import React, { useState } from "react";
import {
    View,
    Text,
    Pressable,
    StyleSheet,
    ImageBackground,
    Dimensions,
    Image

} from "react-native";

import { useNavigation } from '@react-navigation/native'

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const WelcomeScreen = () => {
    const navigation = useNavigation()


    const onWelcomeBtn = () => {
        navigation.navigate("MainContainer2")
    };


    return (

        <View style={styles.root}>
            <ImageBackground 
                source={require("../../assets/welcomeScreen/bg.png")} 
                resizeMode="cover"
                style={styles.img}>
            
                <View style={[styles.welcomeContainer, styles.h_80, styles.pt_90]}>
                    <Image style={[styles.logo]} source={require("../../assets/welcomeScreen/logo_2.png")}/>
                    <Text style={[styles.title, styles.center, styles.font_white]}>Selamat Datang</Text>
                    <Text style={[styles.center, styles.p_15, styles.font_white]}>Panic membantu Anda mengidentifikasi gejala penyakit pada padi dan menyediakan informasi cara penanganan</Text>
                </View>

                <Pressable
                    onPress={onWelcomeBtn}
                    style={[styles.container, styles.bottomWelcomeBtn]}

                >
                    <Text style={[styles.text]}>Lanjutkan</Text>
                </Pressable>
            </ImageBackground>

        </View>


    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: "center",
        marginTop: 30
        // padding: 20,
    },
    welcomeContainer: {
        justifyContent: "center",
        alignContent: "center",
        marginLeft: "auto",
        marginRight: "auto"
    },
    logo: {
        maxWidth: 200,
        height: 200,
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: 30
    },
    h_80: {
        height: "80%"
    },
    p_15: {
        margin: 15,
    },  
    pt_90: {
        paddingTop: "0%"
    },  
    bottomWelcomeBtn: {
        backgroundColor: "#6C875E",
        color: "#2C3C1F",
        borderRadius: 20,
        width: "100%",
        padding: 15,
        alignItems: "center",
        width: "80%",
    },
    container: {
        width: "100%",
        borderRadius: 5,
        marginVertical: 5,
        // padding: 15,
        alignItems: "center",
    },
    text: {
        fontWeight: "bold",
        fontSize: 20,
    },
    title: {
        fontSize: 35, 
        fontWeight:'bold',
    },
    center: {
        textAlign: "center",
    },
    img: {
        height: screenHeight,
        width: screenWidth,
        justifyContent: 'center',
        alignItems: 'center',
    },

    font_white: {
        color: "white"
    }
     

});
export default WelcomeScreen;
