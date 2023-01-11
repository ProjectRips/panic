import React, { useContext, Component, createContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// Screens
import HomeScreen from './screens/HomeScreen';
import PredictScreen from './screens/PredictScreen';
import InfoScreen from './screens/InfoScreen';


//context
import DiseaseData from './screens/DiseaseContext';

//Screen names
const homeName = "Home";
const predictName = "Deteksi";
const infoName = "Informasi";

const Tab = createBottomTabNavigator();

class MainContainer2 extends Component {
  state = {message: ""}
  render() {
    return (
      <DiseaseData.Provider value={{state: this.state, setMessage: (value) => this.setState({
        message: value })}}>
        <Tab.Navigator
          initialRouteName={homeName}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              let rn = route.name;

              if (rn === homeName) {
                iconName = focused ? 'home' : 'home-outline';
                return <Ionicons name={iconName} size={size} color={color} />;


              } else if (rn === predictName) {
                iconName = 'gps-fixed';
                return <MaterialIcons name={iconName} size={size} color={color} />;


              } else if (rn === infoName) {
                iconName = 'article';
                return <MaterialIcons name={iconName} size={size} color={color} />;

              }

              // You can return any component that you like here!
            },
            tabBarActiveTintColor: "#6C875E",
            tabBarInactiveTintColor: "grey",
            tabBarLabelStyle: {
              paddingBottom: 10, fontSize: 10,
            },
            tabBarStyle: [
              {
                display: "flex",
                height: 60,
                borderTopLeftRadius: 25,
                borderTopRightRadius: 25,
                overflow: "hidden",
              },
              null
            ],
            headerShown: false,
            tabBarHideOnKeyboard: true,
          })}
        >

          <Tab.Screen name={homeName} component={HomeScreen} />
          <Tab.Screen name={predictName} component={PredictScreen} />
          <Tab.Screen name={infoName} component={InfoScreen} options={{unmountOnBlur: true}} />

        </Tab.Navigator>
      </DiseaseData.Provider>


    );
  }

}

export default function(){
  return <MainContainer2/>;
};

