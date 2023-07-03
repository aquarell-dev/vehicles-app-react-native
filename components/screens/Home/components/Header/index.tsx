import React, { FC } from 'react'
import Button from '../../../../ui/Button/components/Button'
import { Octicons } from '@expo/vector-icons'
import { Text, View } from 'react-native'

const Header: FC = () => {
	return (
		<View>
			<View className='flex flex-row justify-between items-center mx-2'>
				<Button>
					<Octicons name='three-bars' size={24} color='black' />
				</Button>
				<Text className='text-lg font-medium'>
					Driver Tracker
				</Text>
			</View>
			<View className='mt-8'>
				<Text className='text-4xl'>
					<Text className='underline'>Keep track</Text>
					<Text> of your drivers</Text>
					<Text className='font-semibold'> in one app</Text>
				</Text>
			</View>
		</View>
	)
}

export default React.memo(Header)