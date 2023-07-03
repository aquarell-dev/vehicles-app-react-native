import { useMemo, useState } from 'react'
import { FilterCarsByType, TCar } from '../../../../../../types/car.types'
import vehicles from '../../../../../../vehicles.json'
import TruckMarker from '../../../../../../assets/markers/truck.png'
import CarMarker from '../../../../../../assets/markers/truck.png'
import SpecialCarMarker from '../../../../../../assets/markers/truck.png'

const useCars = () => {
	const loadCars = () => vehicles.map(v => ({
		...v,
		location: {
			...v.location,
			marker: v.carType === 'Грузовые' ? TruckMarker : v.carType === 'Легковые' ? CarMarker : SpecialCarMarker
		}
	})) as TCar[]
	
	const [cars, setCars] = useState<TCar[]>(loadCars())
	
	const allCars = useMemo(() => loadCars(), [])
	
	const filterCarsByType: FilterCarsByType = carType => {
		if (!carType) setCars(allCars)
		
		setCars(allCars.filter(car => car.carType === carType) as TCar[])
	}
	
	return { cars, filterCarsByType }
}

export default useCars