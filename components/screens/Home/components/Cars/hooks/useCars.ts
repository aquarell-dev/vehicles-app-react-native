import { useMemo, useState } from 'react'
import { FilterCarsByType, TCar, TVehicleType, vehicleTypes } from '../../../../../../types/car.types'
import vehicles from '../../../../../../vehicles.json'

const useCars = () => {
	const loadCars = () => {
		const cars: TCar[] = vehicles.map(vehicle => (
			{
				carType: vehicleTypes[Math.floor(Math.random() * vehicleTypes.length)] as TVehicleType,
				...vehicle
			}
		))
		
		return cars
	}
	
	const [cars, setCars] = useState<TCar[]>(loadCars)
	
	const allCars = useMemo(() => loadCars(), [])
	
	const filterCarsByType: FilterCarsByType = carType => {
		setCars(allCars.filter(car => car.carType === carType))
	}
	
	const updateCarCoordinates = () => {
	}
	
	return { cars, filterCarsByType }
}

export default useCars