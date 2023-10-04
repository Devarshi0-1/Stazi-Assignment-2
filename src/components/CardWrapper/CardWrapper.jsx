import { useSelector } from 'react-redux';
import { BsHourglassTop } from 'react-icons/bs';
import Card from '../Card/Card';
import './cardWrapper.css';

const CardWrapper = () => {
	const { properties, activeTab } = useSelector(
		(state) => state.propertiesReducer
	);

	const pageProperties = properties.filter(
		(property) => property.city === activeTab
	);

	return (
		<>
			<main className='cardWrapper'>
				{pageProperties.map((property) => (
					<Card
						key={property.id}
						id={property.id}
						forRent={property.for}
						image={property.img}
						location={property.location}
						name={property.name}
						numOfRooms={property.num_of_rooms}
						numOfBeds={property.num_of_beds}
						numOfBathrooms={property.num_of_bathrooms}
						priceInUsd={property.price_in_usd}
						area={property.area_in_sq_ft}
					/>
				))}
			</main>
			<div className='showMore'>
				<button>
					<BsHourglassTop />
					Show More
				</button>
			</div>
		</>
	);
};
export default CardWrapper;
