export const vehicleTypes = ['Грузовые', 'Легковые', 'Специальные'] as const

export type TVehicleType = keyof typeof vehicleTypes

export type TDriver = {
	name: string
	phone: string
}

export type TCar = {
	id: number
	title: string
	carType: TVehicleType
	photo: string
	driver: TDriver
	location: {
		locationString: string
		latitude: number
		longitude: number
		marker: string
	}
}

export type FilterCarsByType = (carType?: TVehicleType) => void
export type FilterCarsByTitle = (title: string) => void