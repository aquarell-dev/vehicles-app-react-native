export const vehicleTypes = ['Грузовая', 'Легковая', 'Спортивная'] as const

export type TVehicleType = keyof typeof vehicleTypes

export type TCar = {
	title: string
	carType: TVehicleType
	photo: string
	city: string
}