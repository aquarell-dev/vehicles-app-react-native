import { I18n } from 'i18n-js'
import { en, ru } from '../localization/languages'
import { useEffect, useState } from 'react'
import { getLocales } from 'expo-localization'

// i've never worked with localization before, so here's how i'd do it
// mb i shoulda added redux or at least context for an i18n object
const useTranslation = () => {
	const i18n = new I18n({
		en,
		ru
	})
	
	i18n.enableFallback = true
	
	const [locale, setLocale] = useState(getLocales()[0].languageCode)
	
	useEffect(() => {
		i18n.locale = getLocales()[0].languageCode
	}, [locale])
	
	return {
		i18n,
		locale,
		setLocale
	}
}

export default useTranslation