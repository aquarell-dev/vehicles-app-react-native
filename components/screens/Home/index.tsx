import React, { FC } from 'react'
import Cars from './components/Cars'
import Layout from '../../layouts/Layout'
import { Text, View } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { HomeStackParamList } from '../../Navigators/HomeNavigation/home.navigation.types'

const Home: FC<NativeStackScreenProps<HomeStackParamList, 'HomePage'>> = () => {
	return (
		<Layout>
			<View className='mt-8'>
				<Text className='text-4xl'>
					<Text className='underline'>Keep track</Text>
					<Text> of your drivers</Text>
					<Text className='font-semibold'> in one app</Text>
				</Text>
			</View>
			<Cars />
		</Layout>
	)
}

export default Home
