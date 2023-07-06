import { FC } from 'react'
import { TButton } from '../../button.types'
import Button from '../Button'
import constants from '../../../../../app.constants'

const PrimaryButton: FC<TButton> = ({
	                                    children,
	                                    ...props
                                    }) => {
	return (
		<Button
			{...props}
			style={{ backgroundColor: constants.colors.button.primary }}
		>
			{children}
		</Button>
	)
}

export default PrimaryButton