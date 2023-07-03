import { FlatList, Text } from 'react-native'
import { FC, useState } from 'react'
import useCars from './hooks/useCars'
import Car from '../Car'
import Filter from '../Filter'
import ViewSwitch from '../ViewSwitch'
import { ViewMode } from '../../mode.types'
import CarsMap from '../CarsMap'

const Cars: FC = () => {
	const { cars, filterCarsByType } = useCars()
	
	const [viewMode, setViewMode] = useState<ViewMode>('list')
	
	return <>
		<Filter filterCallback={filterCarsByType} />
		<ViewSwitch viewMode={viewMode} setViewMode={setViewMode} />
		{viewMode === 'list' ? (
			<>
				<Text className='mb-3 text-2xl font-medium px-4'>Your Cars</Text>
				<FlatList
					data={cars}
					renderItem={(({ item, index }) => <Car key={index} {...item} />)}
				/>
			</>
		) : <CarsMap cars={cars} />
		}
	</>
}

export default Cars