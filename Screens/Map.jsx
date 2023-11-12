import { View, Text, Image, ActivityIndicator, FlatList, Pressable, TextInput, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import MapView, { Marker } from 'react-native-maps'
import * as Location from 'expo-location';
import { useGetAllJobsQuery } from '../redux/jobApi';
import { COLORS } from '../constants/styles';

const Map = () => {

  const [location, setLocation] = useState(null)
  const [address, setAddress] = useState(null)
  const [geoAddy, setGeoAddy] = useState(null)

  console.log("geo test: ", geoAddy[0].latitude)

  const { data: jobLocations, isLoading, isFetching, isSuccess, isError, error } = useGetAllJobsQuery()

  let content

  if(isLoading || isFetching){
    content = <ActivityIndicator size="large" color="blue" />
  }else if(isSuccess){
    content = jobLocations?.map((item, index) => (
      <Marker
          key={index}
          coordinate={{ latitude: item.lat, longitude: item.long }}
        >
            <Image className="w-12 h-12 rounded-full" source={{ uri: item.images[0].url }} />
         </Marker>
    ))
  }

  const getPermissions = async() => {
    let { status } = await Location.requestForegroundPermissionsAsync()
    if(status !== 'granted'){
      console.log('please grant permission')
      return
    }

    let currentLocation = await Location.getCurrentPositionAsync()
    setLocation(currentLocation)
    console.log("location: ", currentLocation)
  }

  useEffect(()=> {

    getPermissions()

  }, [])


  const geocode = async() => {
    // const geoAddress = await Location.geocodeAsync(address)
    setGeoAddy(await Location.geocodeAsync(address))
    // console.log("Geocoded address: ", geoAddress)
    console.log("GEO ADDY: ", geoAddy)
  }

  return (
    <View className="flex-1 ">
      <MapView
      className="w-[100%] h-[100%]"
        initialRegion={{
          latitude: 41.5000,
          longitude: -81.6575,
          latitudeDelta: 0.3022,
          longitudeDelta: 0.3022
        }}
      >
          <Marker
            key={Math.random()}
            coordinate={ { latitude: geoAddy[0].latitude, longitude: geoAddy[0].longitude } }
          >
            <Image style={{ objectFit: 'contain' }} className="w-10 h-10 rounded-full" source={{ uri: "https://static.wikia.nocookie.net/ryans-funny-parts/images/4/49/Big-Bird-03.png/revision/latest/scale-to-width-down/302?cb=20160102004342" }} />
          </Marker>
        {content}
        
          
      </MapView>

      <TextInput 
        className="z-10 absolute bottom-24 bg-gray-400/90 text-xl rounded-full w-11/12 px-4 p-2 self-center" 
        placeholder='Address...' 
        placeholderTextColor={COLORS.violet900}
        value={address}
        onChangeText={setAddress}
      />
    
    <TouchableOpacity className="bg-violet-900 absolute top-14 left-2 z-10 p-2 rounded-md" onPress={geocode}>
      <Text className="text-white text-xl">Geocode Address</Text>
    </TouchableOpacity>
      

      {/* <Pressable className="z-10 absolute bottom-24 bg-blue-400/90 rounded-full w-11/12 p-2 self-center items-center" onPress={getPermissions}>
        <Text className="text-2xl">Get user location</Text>
      </Pressable> */}
    </View>
  )
}

export default Map