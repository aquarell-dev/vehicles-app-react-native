import { useDispatch } from 'react-redux'

import { bindActionCreators } from '@reduxjs/toolkit'
import { themeActions } from '../features/theme/theme.slice'


const actions = {
	...themeActions
}

export const useActions = () => {
	const dispatch = useDispatch()
	
	return bindActionCreators(actions, dispatch)
}