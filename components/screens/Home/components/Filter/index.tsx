import { FC } from 'react'
import { FlatList, Text } from 'react-native'
import { SecondaryButton } from '../../../../ui/Button'
import { FilterCarsByType, TVehicleType, vehicleTypes } from '../../../../../types/car.types'
import constants from '../../../../../app.constants'
import useTranslation from '../../../../../hooks/useTranslation'

const Filter: FC<{ filterCallback: FilterCarsByType }> = ({ filterCallback }) => {
	const { i18n } = useTranslation()
	
	return (
		<>
			<FlatList
				horizontal={true}
				className='mb-2'
				style={{
					minHeight: 40
				}}
				data={vehicleTypes}
				renderItem={(t =>
						<SecondaryButton
							key={t.index}
							onPress={() => filterCallback(t.item as TVehicleType)}
						>
							<Text
								className='font-medium'
								style={{
									color: constants.colors.text.primary
								}}
							>
								{t.item}</Text>
						</SecondaryButton>
				)}
				contentContainerStyle={{
					flex: 1,
					justifyContent: 'space-around',
					alignItems: 'stretch'
				}}
			/>
			<SecondaryButton onPress={() => filterCallback()}>
				<Text
					className='font-medium'
					style={{
						color: constants.colors.text.primary
					}}>
					{i18n.t('home.clearFilter')}
				</Text>
			</SecondaryButton>
		</>
	)
}

export default Filter