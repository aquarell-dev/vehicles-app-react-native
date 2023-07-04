import React, { FC } from 'react'
import Button from '../Button/components/Button'
import { Octicons } from '@expo/vector-icons'
import { Text, View } from 'react-native'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { DrawerNavigationProp } from '@react-navigation/drawer'

const Header: FC = () => {
	const navigation = useNavigation<DrawerNavigationProp<ParamListBase>>()
	
	return (
		<View>
			<View className='flex flex-row justify-between items-center mx-2'>
				<Text className='text-lg font-medium'>
					Driver Tracker
				</Text>
				<Button onPress={() => navigation.openDrawer()}>
					<Octicons name='three-bars' size={24} color='black' />
				</Button>
			</View>
		</View>
	)
}

export default React.memo(Header)