import { FC } from 'react'
import { View } from 'react-native'
import Header from './components/Header'
import Search from './components/Search'
import Filter from './components/Filter'

const Home: FC = () => {
	return (
		<View>
			<Header />
			<Search />
			<Filter />
		</View>
	)
}

export default Home