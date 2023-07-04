import { FC } from 'react'
import { Linking, Text, View } from 'react-native'
import CarProperty from '../CarProperty'
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons'
import { PrimaryButton, SecondaryButton } from '../../../../ui/Button'

const AboutCar: FC<{ title: string, carType: string, driver: string }> = props => {
	return (
		<View className='mt-2 mb-4'>
			<Text className='text-xl text-center font-semibold'>{props.title}</Text>
			<View className='flex flex-row items-center justify-center mt-2'>
				<CarProperty
					icon={<FontAwesome5 name='car-side' size={20} color='black' />}
					text={props.carType as string}
					style={{ marginRight: 5 }}
				/>
				<CarProperty
					icon={<FontAwesome name='drivers-license' size={20} color='black' />}
					text={props.driver}
					style={{ marginLeft: 5 }}
				/>
			</View>
			<CarProperty
				icon={<FontAwesome name='drivers-license' size={20} color='black' />}
				text={props.driver}
				style={{
					display: 'flex',
					justifyContent: 'center',
					marginBottom: 20
				}}
			/>
			<View className='flex flex-row justify-around items-center'>
				<PrimaryButton onPress={() => Linking.openURL('tel:+12345')}>
					<Text className='text-white font-medium'>Позвонить</Text>
				</PrimaryButton>
				<SecondaryButton onPress={() => Linking.openURL('https://wa.me/15551234567')}>
					<Text className='text-'>Написать</Text>
				</SecondaryButton>
			</View>
		</View>
	)
}

export default AboutCar