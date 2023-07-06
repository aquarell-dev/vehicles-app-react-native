import { Text, View } from 'react-native'
import { FC, useState } from 'react'
import useCars from './hooks/useCars'
import Car from '../Car'
import Filter from '../Filter'
import ViewSwitch from '../ViewSwitch'
import { ViewMode } from '../../mode.types'
import CarsMap from '../CarsMap'
import Search from '../Search'
import { FlashList } from '@shopify/flash-list'
import constants from '../../../../../app.constants'
import useTranslation from '../../../../../hooks/useTranslation'

const Cars: FC = () => {
	const {
		cars,
		filterCarsByType,
		carsQuery,
		setCarsQuery
	} = useCars()
	
	const { i18n } = useTranslation()
	
	const [viewMode, setViewMode] = useState<ViewMode>('list')
	
	return <>
		<Search query={carsQuery} setQuery={setCarsQuery} />
		<Filter filterCallback={filterCarsByType} />
		<ViewSwitch viewMode={viewMode} setViewMode={setViewMode} />
		{viewMode === 'list' ? (
			<>
				<Text
					className='mb-3 text-2xl font-medium px-4'
					style={{
						color: constants.colors.text.primary
					}}
				>
					{i18n.t('home.cars')}
				</Text>
				<View style={{ height: 210 }}>
					<FlashList
						data={cars}
						renderItem={(({ item }) => <Car key={item.id} {...item} />)}
						removeClippedSubviews={true}
						keyExtractor={item => item.id.toString()}
						estimatedItemSize={167}
					/>
				</View>
			</>
		) : <CarsMap cars={cars} />
		}
	</>
}

export default Cars