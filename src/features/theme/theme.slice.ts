import { createSlice } from '@reduxjs/toolkit'
import { ThemeInitialState } from './theme.types'

const initialState: ThemeInitialState = {
	theme: 'dark'
}

const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		toggleTheme: state => {
			state.theme = state.theme === 'light' ? 'dark' : 'light'
		}
	}
})

export const themeReducer = themeSlice.reducer
export const themeActions = themeSlice.actions
