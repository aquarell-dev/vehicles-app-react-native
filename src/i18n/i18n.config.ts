import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { en, ru } from '../localization/languages'
import { getLocales } from 'expo-localization'
import AsyncStorage from '@react-native-async-storage/async-storage'

let selectedLang

AsyncStorage.getItem('LANG')
	.then(language => selectedLang = language)
	.catch(e => selectedLang = null)

i18n
	.use(initReactI18next) // passes i18n down to react-i18next
	.init({
		compatibilityJSON: 'v3',
		resources: {
			en: {
				translation: en,
			},
			ru: {
				translation: ru,
			},
		},
		
		lng: selectedLang ?? getLocales()[0].languageCode,
		fallbackLng: 'en',
		
		interpolation: {
			escapeValue: false,
		},
	})

const supportedLanguages = {
	ru: 'Русский',
	en: 'English'
}

export { supportedLanguages }

export default i18n
