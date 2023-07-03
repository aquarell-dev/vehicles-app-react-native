import { FC } from 'react'
import { View } from 'react-native'
import Header from './components/Header'
import Search from './components/Search'
import Cars from './components/Cars'

const Home: FC = () => {
	return (
		<View>
			<Header />
			<Search />
			<Cars />
		</View>
	)
}

export default Home