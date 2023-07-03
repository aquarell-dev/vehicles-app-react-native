import { FC } from 'react'
import { TButton } from '../../button.types'
import Button from '../Button'

const PrimaryButton: FC<TButton> = ({ children, ...props }) => {
	return (
		<Button {...props} textStyle='bg-button-primary'>
			{children}
		</Button>
	)
}

export default PrimaryButton