import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import './navbar.css';

const Navbar = () => {
	const dispatch = useDispatch();
	const [searchParams, setSearchParams] = useSearchParams({});

	const handleClick = (city) => {
		dispatch({ type: 'changeTab', payload: city });
		setSearchParams({ page: city });
	};

	useEffect(() => {
		searchParams.get('page') &&
			dispatch({ type: 'changeTab', payload: searchParams.get('page') });
	}, []);

	const cities = ['New York', 'Mumbai', 'Paris', 'London'];

	return (
		<nav className='navbar'>
			<div className='nav-left'>
				<div className='left-btns'>
					{cities.map((city) => (
						<button
							key={city}
							className={`btn ${
								searchParams.get('page') === city ? 'activePage' : ''
							}`}
							onClick={() => handleClick(city)}>
							{city}
						</button>
					))}
				</div>
			</div>
			<div className='nav-right'>
				<div className='right-btns'>
					<button className='btn'>
						View All <BsArrowRight />
					</button>
				</div>
			</div>
		</nav>
	);
};
export default Navbar;
