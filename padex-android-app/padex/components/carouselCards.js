// import React from 'react'
// import { View, StyleSheet, Dimensions, Text } from "react-native"
// import CarouselCardsItem, { SLIDER_WIDTH, ITEM_WIDTH } from './carouselCardsItem'
// import data from "../slides";
// import Carousel, { ParallaxImage } from 'react-native-snap-carousel';

// const { width: screenWidth } = Dimensions.get('window')

// const CarouselCards = () => {
//     const isCarousel = React.useRef(null);

//     return (
//         // <View style={styles.container}>
//         //   <Carousel
//         //     layout="stack"
//         //     layoutCardOffset={9}
//         //     ref={isCarousel}    
//         //     data={data}
//         //     renderItem={CarouselCardsItem}
//         //     sliderWidth={SLIDER_WIDTH}
//         //     itemWidth={ITEM_WIDTH}
//         //     inactiveSlideShift={0}
//         //     useScrollView={true}
//         //   />
//         // </View>
//         <View>
//           <View style={styles.pageTitleContainer}>
//             <Text style={styles.pageTitle}>Welcome and Join Us</Text>
//           </View>
//           <View style={styles.container}>
//             <Carousel
//                     sliderWidth={screenWidth}
//                     sliderHeight={screenWidth}
//                     itemWidth={screenWidth - 60}
//                     data={data}
//                     renderItem={CarouselCardsItem}
//                     hasParallaxImages={true}
//                 />
//           </View>
//         </View>

//       )
// }

// const styles = StyleSheet.create({
//   pageTitleContainer: {
//     flex: 0.1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

//   pageTitle: {
//     fontWeight: '800',
//     fontSize: 30,
//   },

//   container: {
//       flex: 0.9,
//       justifyContent: 'center',
//       alignItems: 'center',
//   },

// })



// export default CarouselCards
