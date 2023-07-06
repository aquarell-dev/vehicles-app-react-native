import { useFonts } from 'expo-font'
import { useCallback } from 'react'
import * as SplashScreen from 'expo-splash-screen'

const useCustomFonts = () => {
	const [fontsLoaded] = useFonts({
		'MontserratAlt1': require('../assets/fonts/brand-name/MontserratAlt1-SemiBold.otf'),
	})
	
	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync()
		}
	}, [fontsLoaded])
	
	return {
		fontsLoaded,
		onLayoutRootView
	}
}

export default useCustomFonts