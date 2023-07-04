import { FC } from 'react'
import { TextInput, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { SetState } from '../../../../../types/global.types'

type SearchProps = { query: string, setQuery: SetState<string> }

const Search: FC<SearchProps> = ({ setQuery, query }) => {
	return (
		<View className='flex space-x-2 flex-row items-center border-b border-gray-500 my-4 pb-1 px-2'>
			<AntDesign name='search1' size={24} color='black' />
			<TextInput
				value={query}
				onChangeText={setQuery}
				className='px-2 py-1 text-lg'
				placeholder='Search a driver...'
			/>
		</View>
	)
}

export default Search