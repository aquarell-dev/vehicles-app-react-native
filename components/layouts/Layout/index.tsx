import { FC, PropsWithChildren } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { View } from 'react-native'
import Header from '../../ui/Header'

const Layout: FC<PropsWithChildren<{ headerInvisible?: boolean }>> = props => {
	const {
		children,
		headerInvisible
	} = props
	
	return (
		<SafeAreaView className='bg-background-primary flex-1 text-text-primary'>
			<View className='mx-2 my-4'>
				{!headerInvisible && <Header />}
				{children}
			</View>
		</SafeAreaView>
	)
}

export default Layout