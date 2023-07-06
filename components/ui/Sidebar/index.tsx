import { FC } from 'react'
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { ImageBackground, Text, View } from 'react-native'
import constants from '../../../app.constants'

const Sidebar: FC<DrawerContentComponentProps> = props => {
	return (
		<View style={{
			flex: 1,
			backgroundColor: constants.colors.background.primary,
		}}>
			<DrawerContentScrollView {...props}>
				<ImageBackground
					source={require('../../../assets/images/menu-bg.jpg')}
					style={{
						padding: 40
					}}
				>
					<Text
						className='text-3xl text-center text-white'
						style={{ fontFamily: 'MontserratAlt1' }}
					>
						TRACKET
					</Text>
				</ImageBackground>
				<DrawerItemList {...props} />
			</DrawerContentScrollView>
		</View>
	)
}

export default Sidebar