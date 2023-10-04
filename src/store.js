import { configureStore, createReducer } from '@reduxjs/toolkit';
import PropertyInfo from './db.json';

const initialState = {
	activeTab: 'New York',
	properties: PropertyInfo,
};

const propertiesReducer = createReducer(initialState, {
	changeTab: (state, action) => {
		state.activeTab = action.payload;
	},
});

const store = configureStore({
	reducer: { propertiesReducer },
});

export default store;
