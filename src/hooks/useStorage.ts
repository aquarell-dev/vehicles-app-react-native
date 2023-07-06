import AsyncStorage from '@react-native-async-storage/async-storage'

const useStorage = () => {
	const setItem = async <T>(key: string, value: T) => {
		try {
			const json = JSON.stringify(value)
			await AsyncStorage.setItem(key, json)
		} catch (e) {
			console.log(e)
		}
	}
	
	const getItem = async <T>(key: string) => {
		try {
			const value: string | null = await AsyncStorage.getItem(key)
			
			if (value === null) return null
			
			return JSON.parse(value) as T
		} catch (e) {
			console.log(e)
			return null
		}
	}
	
	return {
		getItem,
		setItem
	}
}

export default useStorage
