import { FC } from 'react'
import { TButton } from '../../button.types'
import Button from '../Button'
import constants from '../../../../../app.constants'

const SecondaryButton: FC<TButton> = props => {
	const {
		children,
		...rest
	} = props
	
	return (
		<Button
			{...rest}
			style={{
				backgroundColor: constants.colors.button.secondary
			}}
		>
			{children}
		</Button>
	)
}

export default SecondaryButton