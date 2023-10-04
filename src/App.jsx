import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from './store';
import CardWrapper from './components/CardWrapper/CardWrapper';
import SelectedCard from './components/SelectedCard/SelectedCard';
import Navbar from './components/Navbar/Navbar';
import './App.css';

function App() {
	return (
		<Router>
			<Provider store={store}>
				<Navbar />
				<Routes>
					<Route
						path='/'
						element={<CardWrapper />}
					/>
					<Route
						path='/property/:id'
						element={<SelectedCard />}
					/>
				</Routes>
			</Provider>
		</Router>
	);
}

export default App;
