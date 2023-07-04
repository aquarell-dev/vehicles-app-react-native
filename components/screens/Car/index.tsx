import { FC } from 'react'
import { ImageURISource } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { HomeStackParamList } from '../../Navigators/HomeNavigation/home.navigation.types'
import Layout from '../../layouts/Layout'
import Map from '../../ui/Map'
import { Marker } from 'react-native-maps'
import AboutCar from './components/AboutCar'
import CarImage from './components/CarImage'

const Car: FC<NativeStackScreenProps<HomeStackParamList, 'Car'>> = props => {
	const {
		route: {
			params: {
				car
			}
		}
	} = props
	
	return (
		<Layout headerInvisible>
			<CarImage photoUrl={car.photo} />
			<AboutCar
				title={car.title}
				driver={car.driver}
				carType={car.carType as string}
			/>
			<Map
				markers={[
					<Marker
						key={car.id}
						coordinate={{
							latitude: car.location.latitude,
							longitude: car.location.longitude,
						}}
						icon={car.location.marker as ImageURISource}
					/>
				]}
			/>
		</Layout>
	)
}

export default Car