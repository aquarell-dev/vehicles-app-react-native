import { FC } from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { HomeStackParamList } from '../../../../Navigators/HomeNavigation/home.navigation.types'

const CarImage: FC<{ photoUrl: string }> = ({ photoUrl }) => {
	const navigation = useNavigation<NativeStackNavigationProp<HomeStackParamList, 'Car'>>()
	
	return (
		<View className='relative'>
			<Image
				source={{ uri: photoUrl }}
				style={{
					width: '100%',
					height: 200
				}}
				className='rounded-xl'
			/>
			<TouchableOpacity
				className='absolute m-2 w-10 h-10 bg-slate-800 rounded-full flex justify-center items-center'
				activeOpacity={0.9}
				onPress={() => navigation.goBack()}
			>
				<Feather name='arrow-left' size={24} color='white' />
			</TouchableOpacity>
		</View>
	)
}

export default CarImage