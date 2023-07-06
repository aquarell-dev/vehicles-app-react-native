import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { themeReducer } from '../features/theme/theme.slice'

export const store = configureStore({
	reducer: {
		theme: themeReducer
	},
	devTools: true
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
