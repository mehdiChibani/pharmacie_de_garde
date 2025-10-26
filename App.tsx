import 'react-native-gesture-handler';
import 'react-native-reanimated';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View } from 'react-native';
import AntDesign from '@react-native-vector-icons/ant-design';
import LottieView from 'lottie-react-native';
import SvgComponent from './assets/svgs/test';

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: 'Rubik-Regular' }}>
        Welcome to the Home Screen 🏠
      </Text>
      <AntDesign name="home" size={30} color="#900" />
      <LottieView
        source={require('./assets/animations/loading.json')}
        style={{ width: '100%', height: '30%' }}
        autoPlay
        loop
      />
      <SvgComponent />
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: 'Rubik-Bold', fontSize: 20 }}>
        This is your Profile 👤
      </Text>
      <AntDesign name="user" size={30} color="#900" />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: '#900',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({ color, size }) => {
            let iconName: string = 'home';
            if (route.name === 'Profile') iconName = 'user';
            else if (route.name === 'Home') iconName = 'home';
            return <Text>ppp</Text>;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
  },
});
