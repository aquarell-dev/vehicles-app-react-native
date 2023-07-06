import 'react-native-gesture-handler'
import { FC, useCallback } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import Navigation from './components/Navigators/Navigation'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import useTranslation from './hooks/useTranslation'

SplashScreen.preventAutoHideAsync()

const App: FC = () => {
	const [fontsLoaded] = useFonts({
		'MontserratAlt1': require('./assets/fonts/brand-name/MontserratAlt1-SemiBold.otf'),
	})
	
	useTranslation()
	
	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync()
		}
	}, [fontsLoaded])
	
	if (!fontsLoaded) {
		return <></>
	}
	
	return (
		<SafeAreaProvider onLayout={onLayoutRootView}>
			<StatusBar style='light' />
			<Navigation />
		</SafeAreaProvider>
	)
}

export default App
