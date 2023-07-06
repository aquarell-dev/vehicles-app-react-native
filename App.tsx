import 'react-native-gesture-handler'
import { FC } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'

import Navigation from './src/components/Navigators/Navigation'

import * as SplashScreen from 'expo-splash-screen'

import { Provider } from 'react-redux'
import { store } from './src/store/store'

import './src/i18n/i18n.config'
import useCustomFonts from './src/hooks/useCustomFonts'

SplashScreen.preventAutoHideAsync()

const App: FC = () => {
	const {
		fontsLoaded,
		onLayoutRootView
	} = useCustomFonts()
	
	if (!fontsLoaded) return <></>
	
	return (
		<Provider store={store}>
			<SafeAreaProvider onLayout={onLayoutRootView}>
				<StatusBar style='light' />
				<Navigation />
			</SafeAreaProvider>
		</Provider>
	)
}

export default App
