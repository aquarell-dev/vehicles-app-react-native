import { FC } from 'react'
import { Image, Text, View } from 'react-native'
import { TCar } from '../../../../../types/car.types'
import { PrimaryButton } from '../../../../ui/Button'
import { Ionicons } from '@expo/vector-icons'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

const Car: FC<TCar> = props => {
	const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>()
	
	const {
		id,
		driver,
		title,
		photo,
		location
	} = props
	
	return (
		<View className='bg-background-secondary my-2 flex flex-row space-x-2 rounded-xl'>
			<Image className='w-28 rounded-l-xl' source={{ uri: photo }} />
			<View className='px-4 py-2 flex justify-between space-y-2'>
				<Text className='text-button-primary text-lg font-medium'>{title} №{id}</Text>
				<Text className='text-[16px]'>{driver.name}</Text>
				<View className='flex flex-row space-x-1 items-center'>
					<Ionicons name='location-sharp' size={24} color='white' />
					<Text className='text-md text-text-primary font-medium'>{location.locationString}</Text>
				</View>
				<View className='w-28'>
					<PrimaryButton onPress={() => navigation.navigate('Car', { car: props })}>
						<Text className='text-white font-medium'>More</Text>
					</PrimaryButton>
				</View>
			</View>
		</View>
	)
}

export default Car