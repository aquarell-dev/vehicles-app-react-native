import { FC } from 'react'
import { TButton } from '../../button.types'
import Button from '../Button'

const SecondaryButton: FC<TButton> = ({ children, ...props }) => {
	return (
		<Button textStyle='bg-button-secondary px-4 py-2' {...props}>
			{children}
		</Button>
	)
}

export default SecondaryButton