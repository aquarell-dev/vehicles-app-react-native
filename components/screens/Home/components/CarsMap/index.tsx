import { FC } from 'react'
import { Marker } from 'react-native-maps'
import { TCar } from '../../../../../types/car.types'
import { ImageURISource } from 'react-native'
import Map from '../../../../ui/Map'

const CarsMap: FC<{ cars: TCar[] }> = ({ cars }) =>
	<Map
		markers={
			cars.map(car =>
				<Marker
					key={car.id}
					coordinate={{
						latitude: car.location.latitude,
						longitude: car.location.longitude,
					}}
					icon={car.location.marker as ImageURISource}
				/>
			)
		}
	/>


export default CarsMap