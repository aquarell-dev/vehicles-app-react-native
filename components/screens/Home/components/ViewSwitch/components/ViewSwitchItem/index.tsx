import { FC, ReactNode } from 'react'
import { Pressable, PressableProps, Text } from 'react-native'
import { styled } from 'nativewind'
import clsx from 'clsx'
import constants from '../../../../../../../app.constants'

type ViewSwitchItemProps = {
	icon: ReactNode
	text: string
	pressableStyle?: string
	textStyle?: string
	active: boolean
} & PressableProps

const ViewSwitchItem: FC<ViewSwitchItemProps> = props => {
	const {
		icon,
		text,
		textStyle,
		style,
		className,
		pressableStyle,
		active,
		...rest
	} = props
	
	const pressableClasses = clsx(
		'w-1/2 py-2 px-4 flex flex-row items-center justify-center space-x-2',
		pressableStyle
	)
	
	const textClasses = clsx(
		'text-center text-lg',
		textStyle
	)
	
	return (
		<Pressable
			className={pressableClasses}
			{...rest}
			style={{
				backgroundColor: !active ?
					constants.colors.background.primary :
					constants.colors.background.secondary
			}}
		>
			{icon}
			<Text
				className={textClasses}
				style={{
					color: constants.colors.text.primary
				}}
			>
				{text}
			</Text>
		</Pressable>
	)
}

export default styled(ViewSwitchItem, {
	props: {
		textStyle: true,
		pressableStyle: true
	}
})