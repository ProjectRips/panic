import React, {useState, useRef} from "react";
import { StyleSheet, Text, View, FlatList, Animated, TouchableOpacity, Image, useWindowDimensions, Dimensions } from "react-native";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

import { Card } from '@rneui/themed';
import { useTailwind } from "tailwindcss-react-native";

const DATA = [
    {
        id: '1',
        title: 'test1',
        desc: 'test1',
        image: require('../assets/image/adaptive-icon.png'),
    },
    {
        id: '2',
        title: 'test1',
        desc: 'test1',
        image: require('../assets/image/adaptive-icon.png'),
    },
    {
        id: '3',
        title: 'test1',
        desc: 'test1',
        image: require('../assets/image/adaptive-icon.png'),
    },
    {
        id: '4',
        title: 'test1',
        desc: 'test1',
        image: require('../assets/image/adaptive-icon.png'),
    },
]
const tw = useTailwind();

const Item = ({item}) => (
    <Card containerStyle={tw("m-3")}>
        <View style={styles.container}>
            <Image source={item.image} style={[styles.image, {useWindowDimensions, resizeMode:'contain'}]}/>

            <View style={{ flex: 0.3 }}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>
        </View>
    </Card>

);

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const slidesRef = useRef(null)

    const viewableItemsChanged = useRef(({viewableItems}) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

    const renderItem = ({ item, }) => {
      return(
        <Item item={item} />
      );
    };

    return (
        <View style={styles.container}>
            <View style={{ flex: 3 }}>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    horizontal
                    showHorizontalScrollIndicator
                    pagingEnabled
                    bounces={false}
                    keyExtractor={(item) => item.id}
                    // onScroll={Animated.event([{nativeEvent: {contentOffset: { x: scrollX }}}],{
                    //     useNativeDriver: false,
                    // })}
                    // scrollEventThrottle={32}
                    // onViewableItemsChanged={viewableItemsChanged}
                    // viewabilityConfig={viewConfig}
                    // ref={slidesRef}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width:0.8*width,
        flex: 0.7,
        justifyContent: 'center',
        marginLeft: 0.1*width,
        marginRight: -0.04*width,
    },
    title: {
        fontWeight: '800',
        fontSize: 20,
        marginBottom: 10,
        color: '#493d8a',
        textAlign: 'center',
    },
    description: {
        fontWeight: '300',
        color: '#62656b',
        textAlign: 'center',
        paddingHorizontal: 64,
    }
});
