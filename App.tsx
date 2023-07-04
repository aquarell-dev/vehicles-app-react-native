import 'react-native-gesture-handler'
import { FC } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import Navigation from './components/Navigators/Navigation'
import { ToastProvider } from 'react-native-toast-notifications'


const App: FC = () => {
	return (
		<SafeAreaProvider>
			<ToastProvider>
				<StatusBar style='auto' />
				<Navigation />
			</ToastProvider>
		</SafeAreaProvider>
	)
}

export default App
