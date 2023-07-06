import { FC, PropsWithChildren } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { View } from 'react-native'
import Header from '../../ui/Header'
import colors from '../../../../colors'

const Layout: FC<PropsWithChildren<{ headerInvisible?: boolean }>> = props => {
	const {
		children,
		headerInvisible
	} = props
	
	return (
		<SafeAreaView className='flex-1' style={{ backgroundColor: colors.background.primary }}>
			<View className='mx-2 my-4'>
				{!headerInvisible && <Header />}
				{children}
			</View>
		</SafeAreaView>
	)
}

export default Layout