import React, { FC } from 'react'
import Cars from './components/Cars'
import Layout from '../../layouts/Layout'
import { Text, View } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { HomeStackParamList } from '../../Navigators/HomeNavigation/home.navigation.types'
import constants from '../../../app.constants'
import useTranslation from '../../../hooks/useTranslation'

const Home: FC<NativeStackScreenProps<HomeStackParamList, 'HomePage'>> = () => {
	const { i18n } = useTranslation()
	
	return (
		<Layout>
			<View className='mt-8'>
				<Text
					className='text-4xl'
					style={{
						color: constants.colors.text.primary
					}}
				>
					<Text className='underline'>{i18n.t('home.header.underline')}</Text>
					<Text> {i18n.t('home.header.default')}</Text>
					<Text className='font-semibold'> {i18n.t('home.header.bold')}</Text>
				</Text>
			</View>
			<Cars />
		</Layout>
	)
}

export default Home
