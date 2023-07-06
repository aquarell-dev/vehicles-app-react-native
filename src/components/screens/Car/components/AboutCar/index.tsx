import { FC } from 'react'
import { Text, View } from 'react-native'
import CarProperty from '../CarProperty'
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons'
import { PrimaryButton, SecondaryButton } from '../../../../ui/Button'
import { TDriver } from '../../../../../types/car.types'
import constants from '../../../../../../app.constants'
import { useTranslation } from 'react-i18next'
import useDeeplinks from '../../hooks/useDeeplinks'


const AboutCar: FC<{ title: string, carType: string, driver: TDriver }> = props => {
	const { t } = useTranslation()
	
	const {
		openWhatsAppDeepLink,
		openPhoneDeepLink
	} = useDeeplinks(props.driver.phone)
	
	return (
		<View className='mt-2 mb-4'>
			<Text
				className='text-xl text-center font-semibold'
				style={{
					color: constants.colors.text.primary
				}}
			>
				{props.title}
			</Text>
			<View className='flex flex-row items-center justify-center mt-2'>
				<CarProperty
					icon={<FontAwesome5 name='car-side' size={20} color={constants.colors.text.primary} />}
					text={props.carType as string}
					style={{ marginRight: 5 }}
				/>
				<CarProperty
					icon={<FontAwesome name='drivers-license' size={20} color={constants.colors.text.primary} />}
					text={props.driver.name}
					style={{ marginLeft: 5 }}
				/>
			</View>
			<CarProperty
				icon={<FontAwesome name='mobile-phone' size={20} color={constants.colors.text.primary} />}
				text={props.driver.phone}
				style={{
					display: 'flex',
					justifyContent: 'center',
					marginBottom: 20
				}}
			/>
			<View className='flex flex-row justify-around items-center'>
				<PrimaryButton onPress={openPhoneDeepLink}>
					<Text className='font-medium' style={{ color: constants.colors.text.primary }}>{t('car.call')}</Text>
				</PrimaryButton>
				<SecondaryButton onPress={openWhatsAppDeepLink}>
					<Text className='font-medium' style={{ color: constants.colors.text.primary }}>{t('car.message')}</Text>
				</SecondaryButton>
			</View>
		</View>
	)
}

export default AboutCar