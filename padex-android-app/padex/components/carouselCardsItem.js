// import React from 'react'
// import { View, Text, StyleSheet, Dimensions, Image } from "react-native"
// import Carousel, { ParallaxImage } from 'react-native-snap-carousel';

// export const SLIDER_WIDTH = Dimensions.get('window').width + 80
// export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

// const CarouselCardItem = ({ item, index }) => {
//     return (
//         // <View style={styles.container} key={index}>
//         //   <Image
//         //     source={item.image}
//         //     style={styles.image}
//         //   />
//         //   <Text style={styles.header}>{item.title}</Text>
//         //   <Text style={styles.body}>{item.desc}</Text>
//         // </View>

//         <View style={styles.item}>
//             <ParallaxImage
//                 source={item.image}
//                 containerStyle={styles.imageContainer}
//                 style={styles.image}
//                 parallaxFactor={0.4}
//                 {...parallaxProps}
//             />
//             <Text style={styles.title} numberOfLines={2}>
//                 { item.title }
//             </Text>
//         </View>
//     )
// }


// // const styles = StyleSheet.create({
// //     container: {
// //         backgroundColor: 'white',
// //         borderRadius: 8,
// //         width: ITEM_WIDTH,
// //         // marginTop: 'auto',
// //         // marginBottom: 'auto',
// //         paddingBottom: 40,
// //         shadowColor: "#000",
// //         shadowOffset: {
// //           width: 0,
// //           height: 3,
// //         },
// //         shadowOpacity: 0.29,
// //         shadowRadius: 4.65,
// //         elevation: 7,
// //       },
// //       image: {
// //         width: ITEM_WIDTH,
// //         height: 300,
// //       },
// //       header: {
// //         color: "#222",
// //         fontSize: 28,
// //         fontWeight: "bold",
// //         paddingLeft: 20,
// //         paddingTop: 20
// //       },
// //       body: {
// //         color: "#222",
// //         fontSize: 18,
// //         paddingLeft: 20,
// //         paddingLeft: 20,
// //         paddingRight: 20
// //       } 
// // });

// const styles = StyleSheet.create({
//   item: {
//     width: screenWidth - 60,
//     height: screenWidth - 60,
//   },
//   imageContainer: {
//     flex: 1,
//     marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
//     backgroundColor: 'white',
//     borderRadius: 8,
//   },
//   image: {
//     ...StyleSheet.absoluteFillObject,
//     resizeMode: 'cover',
//   },
// })

// export default CarouselCardItem;