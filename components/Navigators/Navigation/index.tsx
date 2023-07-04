import { FC } from 'react'
import Settings from '../../screens/Settings'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeNavigation from '../HomeNavigation'
import { NavigationContainer } from '@react-navigation/native'
import { RootDrawerParamList } from './navigation.types'

const Drawer = createDrawerNavigator<RootDrawerParamList>()

const Navigation: FC = () => {
	return (
		<NavigationContainer>
			<Drawer.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
				<Drawer.Screen name='Home' component={HomeNavigation} />
				<Drawer.Screen name='Settings' component={Settings} />
			</Drawer.Navigator>
		</NavigationContainer>
	)
}

export default Navigation