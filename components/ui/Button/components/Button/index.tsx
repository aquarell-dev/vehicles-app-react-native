import { FC } from 'react'
import { TouchableOpacity } from 'react-native'
import { TButton } from '../../button.types'
import { styled } from 'nativewind'


const Button: FC<TButton> = ({
	                             children,
	                             textStyle,
	                             style,
	                             ...props
                             }) => {
	return (
		<TouchableOpacity
			className='rounded-2xl flex items-center justify-center'
			style={textStyle}
			activeOpacity={0.8}
			{...props}
		>
			{children}
		</TouchableOpacity>
	)
}

export default styled(Button, { props: { textStyle: true } })