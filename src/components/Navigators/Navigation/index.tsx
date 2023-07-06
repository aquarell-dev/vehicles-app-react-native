import { FC } from 'react'
import Settings from '../../screens/Settings'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeNavigation from '../HomeNavigation'
import { NavigationContainer } from '@react-navigation/native'
import { RootDrawerParamList } from './navigation.types'
import Sidebar from '../../ui/Sidebar'
import { Ionicons } from '@expo/vector-icons'
import constants from '../../../../app.constants'
import { useTranslation } from 'react-i18next'

const Drawer = createDrawerNavigator<RootDrawerParamList>()

const Navigation: FC = () => {
	const { t } = useTranslation()
	
	return (
		<NavigationContainer>
			<Drawer.Navigator
				drawerContent={props => <Sidebar {...props} />}
				initialRouteName='Home'
				screenOptions={{
					headerShown: false,
					drawerLabelStyle: { marginLeft: -25 },
					drawerActiveBackgroundColor: constants.colors.button.primary,
					drawerActiveTintColor: constants.colors.text.primary,
					drawerInactiveTintColor: constants.colors.text.secondary,
				}}
			>
				<Drawer.Screen
					name='Home'
					component={HomeNavigation}
					options={{
						title: t('sidebar.home'),
						drawerIcon: ({ color }) => <Ionicons name='home-outline' size={24} color={color} />
					}}
				/>
				<Drawer.Screen
					name='Settings'
					component={Settings}
					options={{
						title: t('sidebar.settings'),
						drawerIcon: ({ color }) => <Ionicons name='settings-outline' size={24} color={color} />
					}}
				/>
			</Drawer.Navigator>
		</NavigationContainer>
	)
}

export default Navigation