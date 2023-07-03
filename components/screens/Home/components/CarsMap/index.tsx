import { FC } from 'react'
import MapView, { Marker } from 'react-native-maps'
import { TCar } from '../../../../../types/car.types'
import { ImageURISource } from 'react-native'

const CarsMap: FC<{ cars: TCar[] }> = ({ cars }) => {
	return (
		<MapView
			style={{ width: '100%', height: 300 }}
			initialRegion={{
				latitude: 55.7558,
				longitude: 37.6173,
				latitudeDelta: 0.3,
				longitudeDelta: 0.3
			}}
			loadingEnabled={true}
			scrollEnabled={true}
			zoomEnabled={true}
			zoomControlEnabled={true}
		>
			{cars.map(car =>
				<Marker
					key={car.id}
					coordinate={{
						latitude: car.location.latitude,
						longitude: car.location.longitude,
					}}
					icon={car.location.marker as ImageURISource}
				/>)}
		</MapView>
	)
}

export default CarsMap