import React, { FC } from 'react'
import { Octicons } from '@expo/vector-icons'
import { Text, TouchableOpacity, View } from 'react-native'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { DrawerNavigationProp } from '@react-navigation/drawer'
import constants from '../../../../app.constants'

const Header: FC = () => {
	const navigation = useNavigation<DrawerNavigationProp<ParamListBase>>()
	
	return (
		<View>
			<View className='flex flex-row justify-between items-center mx-2'>
				<Text
					className='text-xl'
					style={{
						fontFamily: 'MontserratAlt1',
						color: constants.colors.text.primary
					}}
				>
					TRACKET
				</Text>
				<TouchableOpacity onPress={() => navigation.openDrawer()} activeOpacity={0.9}>
					<Octicons name='three-bars' size={24} color={constants.colors.text.primary} />
				</TouchableOpacity>
			</View>
		</View>
	)
}

export default React.memo(Header)