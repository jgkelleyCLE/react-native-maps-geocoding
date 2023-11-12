import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home, Map, Search, Cart } from '../Screens'
import { AntDesign, Feather } from '@expo/vector-icons'
import { useColorScheme } from 'nativewind'
import { COLORS } from '../constants/styles'
import Animated, { createAnimatedComponent } from 'react-native-reanimated'


const AppNavigation = () => {
    
    const Tab = createBottomTabNavigator()
    const { colorScheme } = useColorScheme()

    const AnimatedTab = Animated.createAnimatedComponent(Tab)

  return (
    <NavigationContainer>
        <Tab.Navigator screenOptions={{ 
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: colorScheme === 'dark' ? '#000000cb' : '#ffffffe1',
                    width: '95%',
                    alignSelf: 'center',
                    position: 'absolute',
                    bottom: 20,
                    left: 10,
                    borderRadius: 30,
                    height: 70,
                    paddingBottom: -5,
                    paddingTop: -5
                   
                },
                tabBarShowLabel: false,
                tabBarActiveTintColor: colorScheme === 'dark' ? COLORS.amber500 : COLORS.green600,
                tabBarInactiveTintColor: colorScheme === 'dark' ? COLORS.gray400 : COLORS.gray600

            }}>
            <Tab.Screen 
                name="Home" 
                component={Home} 
                options={{ tabBarIcon: ({ focused, color })=> {
                    return <AntDesign name="home" size={30} color={color} />
                },
                
            }} 
            />

            <Tab.Screen 
                name="Search" 
                component={Search}
                options={{ tabBarIcon: ({ focused, color })=> {
                    return <AntDesign name="search1" size={30} color={color} />
                } }} 
            />

            <Tab.Screen 
                name="Map" 
                component={Map}
                options={{ tabBarIcon: ({ focused, color })=> {
                    return <Feather name="map-pin" size={30} color={color} />
                } }} 
            />

            <Tab.Screen 
                name="Cart" 
                component={Cart}
                options={{ tabBarIcon: ({ focused, color })=> {
                    return <AntDesign name="shoppingcart" size={30} color={color} />
                } }} 
            />

        </Tab.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation