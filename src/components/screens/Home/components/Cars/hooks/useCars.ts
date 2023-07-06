import { useEffect, useMemo, useState } from 'react'
import { FilterCarsByTitle, FilterCarsByType, TCar } from '../../../../../../types/car.types'
import vehicles from '../../../../../../../vehicles.json'
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
	const [carsQuery, setCarsQuery] = useState('')
	const [filterApplied, setFilterApplied] = useState(false)
	
	const allCars = useMemo(() => loadCars(), [])
	
	const filterCarsByType: FilterCarsByType = carType => {
		if (!carType) {
			setCars(allCars)
			return setCarsQuery('')
		}
		
		setCars(allCars.filter(car => car.carType === carType) as TCar[])
	}
	
	const filterCarsByTitle: FilterCarsByTitle = title =>
		setCars(
			allCars.filter(car => car.title.toLowerCase().includes(title.toLowerCase()))
		)
	
	useEffect(() => {
		if (carsQuery)
			filterCarsByTitle(carsQuery)
	}, [carsQuery])
	
	
	return {
		cars,
		carsQuery,
		setCarsQuery,
		filterCarsByType,
		filterCarsByTitle
	}
}

export default useCars