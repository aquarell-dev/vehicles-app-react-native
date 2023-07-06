import { useCallback } from 'react'
import { Linking } from 'react-native'

const whatsappMessage = 'Добрый день, подскажите пожалуйста, какой номер заказа у вас сейчас в работе'

const useDeeplinks = (phone: string) => {
	const openWhatsAppDeepLink = useCallback(
		() => {
			const whatsAppPhone = phone.replace('+', '')
			
			Linking.openURL(
				`whatsapp://send?phone=79003007858&text=${whatsappMessage}`
			)
				.then()
				.catch()
		},
		[phone]
	)
	
	const openPhoneDeepLink = useCallback(() => Linking.openURL(`tel:${phone}`), [phone])
	
	return {
		openPhoneDeepLink,
		openWhatsAppDeepLink
	}
}

export default useDeeplinks