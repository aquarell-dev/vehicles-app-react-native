import { FC } from 'react'
import { View } from 'react-native'
import ViewSwitchItem from './components/ViewSwitchItem'
import { Ionicons } from '@expo/vector-icons'
import { SetState } from '../../../../../types/global.types'
import { ViewMode } from '../../mode.types'
import constants from '../../../../../../app.constants'
import { useTranslation } from 'react-i18next'

const ViewSwitch: FC<{ viewMode: ViewMode, setViewMode: SetState<ViewMode> }> = props => {
	const {
		viewMode,
		setViewMode
	} = props
	
	const { t } = useTranslation()
	
	return (
		<View className='flex flex-row items-stretch my-6'>
			<ViewSwitchItem
				icon={<Ionicons name='list' size={24} color={constants.colors.text.primary} />}
				text={t('home.viewSwitch.list')}
				pressableStyle='rounded-l-lg'
				onPress={() => setViewMode('list')}
				active={viewMode === 'list'}
			/>
			<ViewSwitchItem
				icon={<Ionicons name='map' size={24} color={constants.colors.text.primary} />}
				text={t('home.viewSwitch.map')}
				pressableStyle='rounded-r-lg'
				onPress={() => setViewMode('map')}
				active={viewMode === 'map'}
			/>
		</View>
	)
}

export default ViewSwitch