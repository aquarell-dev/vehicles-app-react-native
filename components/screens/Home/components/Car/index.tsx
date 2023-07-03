import { FC } from 'react'
import { Text, View } from 'react-native'
import { TCar } from '../../../../../types/car.types'

const Car: FC<TCar> = ({ title, carType, photo, city }) => {
	return (
		<View className='bg-background-secondary'>
			<Text>{title}</Text>
		</View>
	)
}

export default Car