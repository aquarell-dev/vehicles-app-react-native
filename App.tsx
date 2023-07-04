import 'react-native-gesture-handler'
import { FC } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import Navigation from './components/Navigators/Navigation'


const App: FC = () => {
	return (
		<SafeAreaProvider>
			<StatusBar style='auto' />
			<Navigation />
		</SafeAreaProvider>
	)
}

export default App
