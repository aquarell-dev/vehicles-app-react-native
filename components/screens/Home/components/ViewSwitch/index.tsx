import { FC } from 'react'
import { View } from 'react-native'
import ViewSwitchItem from './components/ViewSwitchItem'
import { Entypo } from '@expo/vector-icons'
import { SetState } from '../../../../../types/global.types'
import { ViewMode } from '../../mode.types'

const ViewSwitch: FC<{ viewMode: ViewMode, setViewMode: SetState<ViewMode> }> = ({ viewMode, setViewMode }) => {
	return (
		<View className='flex flex-row items-stretch my-6'>
			<ViewSwitchItem
				icon={<Entypo name='list' size={24} color='black' />}
				text='List'
				pressableStyle='rounded-l-lg'
				onPress={() => setViewMode('list')}
				active={viewMode === 'list'}
			/>
			<ViewSwitchItem
				icon={<Entypo name='map' size={24} color='black' />}
				text='Map'
				pressableStyle='rounded-r-lg'
				onPress={() => setViewMode('map')}
				active={viewMode === 'map'}
			/>
		</View>
	)
}

export default ViewSwitch