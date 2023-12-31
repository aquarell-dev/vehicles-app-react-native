import { FC, ReactNode } from 'react'
import { StyleProp, Text, View, ViewStyle } from 'react-native'
import constants from '../../../../../../app.constants'

const CarProperty: FC<{ icon: ReactNode, text: string, style?: StyleProp<ViewStyle> }> = props => {
	const {
		icon,
		text,
		style
	} = props
	
	return (
		<View className='flex flex-row space-x-2 items-center' style={style}>
			{icon}
			<Text className='font-medium' style={{
				color: constants.colors.text.primary
			}}>{text}</Text>
		</View>
	)
}

export default CarProperty
