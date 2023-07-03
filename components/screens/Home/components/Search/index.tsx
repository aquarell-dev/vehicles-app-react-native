import { FC, useState } from 'react'
import { TextInput, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

const Search: FC = () => {
	const [carsQuery, setCarsQuery] = useState('')
	
	return (
		<View className='flex space-x-2 flex-row items-center border-b border-gray-500 my-4 pb-1 px-2'>
			<AntDesign name='search1' size={24} color='black' />
			<TextInput
				value={carsQuery}
				onChangeText={setCarsQuery}
				className='px-2 py-1 text-lg'
				placeholder='Search a driver...'
			/>
		</View>
	)
}

export default Search