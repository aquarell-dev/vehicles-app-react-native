export const vehicleTypes = ['Грузовая', 'Легковая', 'Спортивная'] as const

export type TVehicleType = keyof typeof vehicleTypes

export type TCar = {
	id: number
	title: string
	carType: TVehicleType
	photo: string
	driver: string
	city: string
}

export type FilterCarsByType = (carType: TVehicleType) => void