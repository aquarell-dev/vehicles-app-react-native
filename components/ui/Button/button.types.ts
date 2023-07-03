import { PropsWithChildren } from 'react'
import { TextProps, TouchableOpacityProps } from 'react-native'

export type TButton = PropsWithChildren & TouchableOpacityProps & {
	textStyle?: TextProps['style']
}