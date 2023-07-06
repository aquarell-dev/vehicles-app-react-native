import { FC } from 'react'
import { TextInput, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { SetState } from '../../../../../types/global.types'
import constants from '../../../../../app.constants'
import useTranslation from '../../../../../hooks/useTranslation'

type SearchProps = { query: string, setQuery: SetState<string> }

const Search: FC<SearchProps> = props => {
	const {
		setQuery,
		query
	} = props
	
	const { i18n } = useTranslation()
	
	return (
		<View className='flex space-x-2 flex-row items-center border-b border-gray-500 my-4 pb-1 px-2'>
			<AntDesign name='search1' size={24} color={constants.colors.text.primary} />
			<TextInput
				value={query}
				onChangeText={setQuery}
				style={{
					color: constants.colors.text.primary
				}}
				className='px-2 py-1 text-lg'
				placeholder={i18n.t('home.search')}
				placeholderTextColor={constants.colors.text.primary}
			/>
		</View>
	)
}

export default Search