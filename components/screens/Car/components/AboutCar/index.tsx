import { FC, useCallback } from 'react'
import { Linking, Text, View } from 'react-native'
import CarProperty from '../CarProperty'
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons'
import { PrimaryButton, SecondaryButton } from '../../../../ui/Button'
import { TDriver } from '../../../../../types/car.types'
import { useToast } from 'react-native-toast-notifications'

const whatsappMessage = 'Добрый день, подскажите пожалуйста, какой номер заказа у вас сейчас в работе'

const AboutCar: FC<{ title: string, carType: string, driver: TDriver }> = props => {
	const toast = useToast()
	
	const openWhatsAppDeepLink = useCallback(() => Linking.openURL(
		`whatsapp://send?phone=${props.driver.phone.replaceAll('+', '')}&text=${whatsappMessage}`
	)
		.then(() => console.log('success'))
		.catch(e => toast.show(
			'Произошла Ошибка',
			{
				type: 'warning',
				placement: 'top',
				duration: 1500,
				animationType: 'slide-in'
			}
		)), [])
	
	
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
					text={props.driver.name}
					style={{ marginLeft: 5 }}
				/>
			</View>
			<CarProperty
				icon={<FontAwesome name='mobile-phone' size={20} color='black' />}
				text={props.driver.phone}
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
				<SecondaryButton onPress={openWhatsAppDeepLink}>
					<Text className='text-'>Написать</Text>
				</SecondaryButton>
			</View>
		</View>
	)
}

export default AboutCar