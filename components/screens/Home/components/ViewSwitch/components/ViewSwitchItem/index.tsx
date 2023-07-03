import { FC, ReactNode } from 'react'
import { Pressable, PressableProps, Text, TextProps } from 'react-native'
import { styled } from 'nativewind'
import { classnames } from '../../../../../../../utils'

type ViewSwitchItemProps = {
	icon: ReactNode
	text: string
	pressableStyle?: TextProps['style']
	textStyle?: TextProps['style']
	active: boolean
} & PressableProps

const ViewSwitchItem: FC<ViewSwitchItemProps> = ({
	                                                 icon,
	                                                 text,
	                                                 textStyle,
	                                                 style,
	                                                 className,
	                                                 pressableStyle,
	                                                 active,
	                                                 ...props
                                                 }) => {
	return (
		<Pressable
			style={pressableStyle}
			className={classnames(
				'w-1/2 py-2 px-4 border border-slate-200 flex flex-row items-center justify-center space-x-2',
				active ? 'bg-background-secondary' : 'bg-white'
			)}
			{...props}
		>
			{icon}
			<Text
				className='text-center text-lg'
				style={textStyle}
			>
				{text}
			</Text>
		</Pressable>
	)
}

export default styled(ViewSwitchItem, { props: { textStyle: true, pressableStyle: true } })