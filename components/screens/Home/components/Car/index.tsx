import { FC } from 'react'
import { Image, Text, View } from 'react-native'
import { TCar } from '../../../../../types/car.types'
import { PrimaryButton } from '../../../../ui/Button'
import { Ionicons } from '@expo/vector-icons'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import constants from '../../../../../app.constants'
import useTranslation from '../../../../../hooks/useTranslation'

const Car: FC<TCar> = props => {
	const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>()
	
	const { i18n } = useTranslation()
	
	const {
		id,
		driver,
		title,
		photo,
		location
	} = props
	
	return (
		<View
			className='my-2 flex flex-row space-x-2 rounded-xl'
			style={{
				backgroundColor: constants.colors.background.secondary
			}}
		>
			<Image className='w-28 rounded-l-xl' source={{ uri: photo }} />
			<View className='px-4 py-2 flex justify-between space-y-2'>
				<Text
					className='text-lg font-medium'
					style={{
						color: constants.colors.text.primary
					}}
				>
					{title} №{id}
				</Text>
				<Text
					className='text-[16px]'
					style={{
						color: constants.colors.text.secondary
					}}
				>
					{driver.name}
				</Text>
				<View className='flex flex-row space-x-1 items-center'>
					<Ionicons name='location-sharp' size={24} color={constants.colors.text.secondary} />
					<Text
						className='text-md text-text-primary font-medium'
						style={{
							color: constants.colors.text.secondary
						}}
					>
						{location.locationString}
					</Text>
				</View>
				<View className='w-28'>
					<PrimaryButton onPress={() => navigation.navigate('Car', { car: props })}>
						<Text className='text-white font-medium'>{i18n.t('home.car.more')}</Text>
					</PrimaryButton>
				</View>
			</View>
		</View>
	)
}

export default Car