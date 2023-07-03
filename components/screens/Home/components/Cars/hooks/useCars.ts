import { useEffect, useState } from 'react'
import { TCar } from '../../../../../../types/car.types'
import * as fs from 'fs'

const useCars = () => {
	const [cars, setCars] = useState<TCar[]>([])
	
	useEffect(() => {
		const jsonString = fs.readFileSync('../../../../../../vehicles.json', 'utf-8')
		setCars(JSON.parse(jsonString))
	}, [])
	
	const updateCarCoordinates = () => {
	}
	
	return { cars }
}

export default useCars