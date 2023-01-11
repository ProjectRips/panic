import * as React from 'react';
import { StyleSheet, Text, View, useWindowDimensions, Image } from 'react-native';

export default function CarouselItem(item){
    const width = useWindowDimensions();

    return(
        <View style={styles.container}>
            {/* <Image source={require('../assets/image/test.jpg')} style={[styles.image, {width, resizeMode:'contain'}]}/> */}

            <View style={{ flex: 0.3 }}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <Text>test</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
   
})