import { FC } from 'react'
import { TouchableOpacity } from 'react-native'
import { TButton } from '../../button.types'
import { styled } from 'nativewind'


const Button: FC<TButton> = props => {
	const {
		children,
		textStyle,
		...rest
	} = props
	
	return (
		<TouchableOpacity
			className='rounded-2xl flex items-center justify-center px-4 py-2'
			activeOpacity={0.8}
			{...rest}
		>
			{children}
		
		</TouchableOpacity>
	)
}

export default styled(Button, { props: { textStyle: true } })