import { FC } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../../screens/Home'
import Car from '../../screens/Car'
import { HomeStackParamList } from './home.navigation.types'

const Stack = createNativeStackNavigator<HomeStackParamList>()

const HomeNavigation: FC = () => {
	return (
		<Stack.Navigator initialRouteName='HomePage' screenOptions={{ headerShown: false }}>
			<Stack.Screen name='HomePage' component={Home} />
			<Stack.Screen name='Car'>
				{props => <Car {...props} />}
			</Stack.Screen>
		</Stack.Navigator>
	)
}

export default HomeNavigation