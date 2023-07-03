import { FC, PropsWithChildren } from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'

const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<SafeAreaProvider>
			<StatusBar style='auto' />
			<SafeAreaView className='bg-background-primary flex-1 text-text-primary'>
				
				<View className='mx-2 my-4'>
					{children}
				</View>
			</SafeAreaView>
		</SafeAreaProvider>
	)
}

export default Layout