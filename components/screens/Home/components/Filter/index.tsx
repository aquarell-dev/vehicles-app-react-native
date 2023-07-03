import { FC } from 'react'
import { FlatList, Text } from 'react-native'
import { SecondaryButton } from '../../../../ui/Button'
import { FilterCarsByType, TVehicleType, vehicleTypes } from '../../../../../types/car.types'

const Filter: FC<{ filterCallback: FilterCarsByType }> = ({ filterCallback }) => {
	return (
		<FlatList
			horizontal={true}
			data={vehicleTypes}
			renderItem={(t =>
					<SecondaryButton
						key={t.index}
						onPress={() => filterCallback(t.item as TVehicleType)}
					>
						<Text className='text-button-primary font-medium'>{t.item}</Text>
					</SecondaryButton>
			)}
			contentContainerStyle={{ flex: 1, justifyContent: 'space-around', alignItems: 'stretch' }}
		/>
	)
}

export default Filter