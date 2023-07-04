import { FC, ReactNode } from 'react'
import MapView, { MapViewProps } from 'react-native-maps'

const Map: FC<{ markers: ReactNode[] } & MapViewProps> = props => {
	const {
		markers,
		style,
		...rest
	} = props
	
	return (
		<MapView
			style={style ?? {
				width: '100%',
				height: 250
			}}
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
			{...rest}
		>
			{markers}
		</MapView>
	)
}

export default Map