import { FlatList, Text, View } from 'react-native'
import { FC } from 'react'
import useCars from './hooks/useCars'
import Car from '../Car'
import Filter from '../Filter'

const Cars: FC = () => {
	const { cars, filterCarsByType } = useCars()
	
	return <>
		<Filter filterCallback={filterCarsByType} />
		<View className='my-6'>
			<Text className='mb-3 text-2xl font-medium px-4'>Your Cars</Text>
			<FlatList
				data={cars}
				renderItem={(({ item, index }) => <Car key={index} {...item} />)}
			/>
		</View>
	</>
}

export default Cars