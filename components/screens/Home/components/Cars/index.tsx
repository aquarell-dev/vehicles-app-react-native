import { View } from 'react-native'
import { FC } from 'react'
import useCars from './hooks/useCars'

const Cars: FC = () => {
	const { cars } = useCars()
	
	return <View></View>
}

export default Cars