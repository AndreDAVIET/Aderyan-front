import React from 'react';
import HomePage from './src/pages/HomePage';
import {Icon} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import History from './src/pages/History';
import House from './src/pages/House';
import Map from './src/pages/Map';
import Market from './src/pages/Market';
import Inventory from './src/pages/Inventory';
import MarketProvider from './src/provider/MarketProvider';
import CityProvider from './src/provider/CityProvider';

const Stack = createStackNavigator();

const App = () => {
  return (
    <CityProvider>
      <MarketProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomePage} />
            <Stack.Screen name="History" component={History} />
            <Stack.Screen name="House" component={House} />
            <Stack.Screen name="BottonNav" component={BottomNav} />
            <Stack.Screen name="Map" component={Map} />
            <Stack.Screen name="Market" component={Market} />
            <Stack.Screen name="Inventory" component={Inventory} />
          </Stack.Navigator>
        </NavigationContainer>
      </MarketProvider>
    </CityProvider>
  );
};
export default App;

const BottomNav = ({navigation}) => {
  const Tab = createBottomTabNavigator();
  navigation.setOptions({header: () => null});

  return (
    <Tab.Navigator
      initialRouteName="Market"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let iconName;
          if (route.name === 'Market') {
            iconName = focused ? 'barcode' : 'ios-barcode';
          } else if (route.name === 'Map') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          } else if (route.name === 'Inventory') {
            iconName = focused ? 'ios-person' : 'ios-person';
          }
          return <Icon name={iconName} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Map">
        {() => {
          return (
            <Stack.Navigator initialRouteName="Home" headerMode="none">
              <Stack.Screen name="Map" component={Map} />
            </Stack.Navigator>
          );
        }}
      </Tab.Screen>
      <Tab.Screen name="Market">
        {() => {
          return (
            <Stack.Navigator initialRouteName="Home" headerMode="none">
              <Stack.Screen name="Market" component={Market} />
            </Stack.Navigator>
          );
        }}
      </Tab.Screen>
      <Tab.Screen name="Inventory">
        {() => {
          return (
            <Stack.Navigator initialRouteName="Home" headerMode="none">
              <Stack.Screen name="Inventory" component={Inventory} />
            </Stack.Navigator>
          );
        }}
      </Tab.Screen>
    </Tab.Navigator>
  );
};
