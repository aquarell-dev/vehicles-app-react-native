import { Text, View } from 'react-native'
import { FC } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const Sidebar: FC = () => {
	const insets = useSafeAreaInsets()
	
	return (
		<View style={{ paddingTop: insets.top }}>
			<View style={{ position: 'absolute' }}>
				<Text>123</Text>
			</View>
		</View>
	)
}

export default Sidebar