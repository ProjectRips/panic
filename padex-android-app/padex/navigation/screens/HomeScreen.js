import * as React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Pressable } from 'react-native';
import member1 from '../../member1';
import member2 from '../../member2';
import { Avatar, Button } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native'
import { Card, Title, Paragraph } from 'react-native-paper';




export default function HomeScreen() {
    const navigation = useNavigation();

    return (
        <ScrollView contentContainerStyle={styles.container}>

            <Card style={[styles.card, styles.shadowProp]}>
                <Card.Content>
                    <Card.Cover style={[styles.mb_20, styles.rounded]} source={require('../../assets/home/main-paddy.png')}/>
                    <Title style={[styles.center, styles.f_30, styles.mb_20]}><Title style={[styles.light_green, styles.f_30]}>Panic</Title></Title> 
                    <Paragraph style={styles.parag}>
                    Panic (Paddy Clinic) adalah aplikasi yang dibuat khusus untuk deteksi penyakit padi. Kami menggunakan sistem pakar berbasis AI untuk memberikan hasil terbaik berdasarkan gejala yang mungkin muncul. Pengguna hanya perlu memasukkan gejala dan sistem pakar akan memberikan hasilnya.                    </Paragraph>

                    <View style={styles.checklist_container}>
                        <Image style={[styles.width_33,styles.checklist]} source={ require("../../assets/home/checklist.png") } />
                        <Image style={[styles.width_33,styles.checklist]} source={ require("../../assets/home/checklist.png") } />
                        <Image style={[styles.width_33,styles.checklist]} source={ require("../../assets/home/checklist.png") } />
                    </View>
                    <View style={styles.checklist_container_text}>
                        <Text style={[styles.width_33, styles.center]}>Handal</Text>
                        <Text style={[styles.width_33, styles.center]}>Mudah Diakses</Text>
                        <Text style={[styles.width_33, styles.center]}>Menghemat Waktu, Tenaga, dan Biaya</Text>
                    </View>

                    <Pressable style={styles.btnGetStarted} onPress={() => navigation.navigate("Deteksi")}><Text style={styles.btnGetStartedText}>Ayo Mulai</Text></Pressable>
                </Card.Content>
            </Card>

           

            <Card style={[styles.card, styles.shadowProp]}>
                <Card.Content>
                    <Title style={[styles.title2, styles.center]}>Our Teams</Title>
                    <View style={styles.avatarView}>
                    {member1.map((item, index) => 
                            <Avatar
                                size={64}
                                rounded
                                source={item.image_url}
                                key={index}
                                />
                        ) 
                    }
                        
                </View>
                <View style={styles.avatarNameView1}>
                    {member1.map((item, index) => 
                        <Text key={index} style={[styles.width_50, styles.center, styles.fontBold]}>{item.name}</Text>
                        ) 
                    }
                </View>   

                <View style={styles.avatarNameView2}>
                    {member2.map((item, index) => 
                        <Text key={index} style={[styles.width_50, styles.center, styles.fontSizeJobTitle]}>{item.job_title}</Text>
                        ) 
                    }
                </View>   

                
                <View style={styles.avatarView}>
                    {member2.map((item, index) => 
                            <Image
                                style={styles.avatar}
                                source={ item.image_url }
                                key={index}
                                />
                        ) 
                    }
                        
                </View>
                <View style={styles.avatarNameView2}>
                    {member2.map((item, index) => 
                        <Text key={index} style={[styles.width_50, styles.center, styles.fontBold]}>{item.name}</Text>
                        ) 
                    }
                </View>   

                <View style={styles.avatarNameView2}>
                    {member2.map((item, index) => 
                        <Text key={index} style={[styles.width_50, styles.center, styles.fontSizeJobTitle]}>{item.job_title}</Text>
                        ) 
                    }
                </View>   
                </Card.Content>
            </Card>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerTeamMember: {
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
        borderWidth:1,
    },
    avatarView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width:"100%",
        marginTop: 20
    },
    avatarNameView1: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width:"100%",
    },
    avatarNameView2: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width:"100%",

    },
    title: {
        fontSize: 40, 
        fontWeight:'bold',
        marginTop: 20,
        marginBottom: 30,
    },
    title2: {
        fontSize: 30, 
        fontWeight:'bold',
        marginTop: 20,
    },
    parag: {
        textAlign: "justify",
        textAlignVertical: "center",
        color: "black"
    },
    avatar:{
        width: 70,
        height: 70,
        borderRadius: 70/2,
    },
    card: {
        borderRadius: 20,
        width: "90%",
        marginTop: 20,
        justifyContent: "center",
        marginBottom: 40
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    light_green: {
        color: "#6C875E"
    },
    center: {
        textAlign: "center",
    },
    f_30: {
        fontSize: 30,
    },
    mb_20: {
        marginBottom: 20,
    },
    rounded: {
        borderRadius: 20
    },
    checklist_container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width:"100%",
        marginTop: -5
    },
    checklist_container_text: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width:"100%",
        marginTop: -25,
        marginBottom: 20
    },
    checklist: {
        width:100,
        height: 100
    },
    width_33: {
        width: "33%"
    },
    width_50: {
        width: "50%"
    },
    btnGetStarted: {
        backgroundColor: "#6C875E",
        color: "#2C3C1F",
        borderRadius: 20,
        width: "100%",
        padding: 15,
        alignItems: "center",
        width: "80%",
        marginLeft: "auto",
        marginRight: "auto"
    },
    btnGetStartedText:{
        color: "white",
        fontSize: 20,
        fontWeight: "bold"
    },
    fontBold: {
        fontWeight: "bold"
    },
    fontSizeJobTitle:{
        fontSize: 12
    }

})

