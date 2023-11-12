import { View, Text, Switch } from 'react-native'
import React from 'react'
import { useColorScheme } from 'nativewind'

const Home = () => {

  const { colorScheme, toggleColorScheme } = useColorScheme()

  return (
    <View className="flex-1 bg-gray-200 items-center justify-center">
      <Text className="text-2xl">Home</Text>
      <View className="flex-row items-center mt-2">
        <Text className="pr-2 text-lg">Dark Mode</Text>
        <Switch value={colorScheme === 'dark'} onChange={toggleColorScheme} />
      </View>
    </View>
  )
}

export default Home