import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsBuildings } from 'react-icons/bs';
import { LiaBathSolid, LiaArrowsAltSolid, LiaBedSolid } from 'react-icons/lia';
import { IoLocationOutline } from 'react-icons/io5';

const SelectedCard = () => {
	const { id: queryId } = useParams();

	const { properties } = useSelector((state) => state.propertiesReducer);

	const card = properties.find((property) => property.id === queryId);

	return (
		<div className='card'>
			<div className='card-top'>
				<div className='top-section'>
					<button>For {card.for}</button>
					<button>
						<AiOutlineHeart />
					</button>
				</div>
				<div className='top-img'>
					<img
						src={card.img}
						alt='Apartment'
					/>
				</div>
				<div className='top-controls'></div>
			</div>
			<div className='card-mid'>
				<div className='mid-address'>
					<IoLocationOutline />
					<p>{card.location}</p>
				</div>
				<div className='mid-info'>
					<h3>{card.name}</h3>
					<div className='info-stats'>
						<div className='stat'>
							<div className='stat-icon'>
								<BsBuildings />
							</div>
							<div className='stat-text'>
								<p>{card.num_of_rooms} Room</p>
							</div>
						</div>
						<div className='stat'>
							<div className='stat-icon'>
								<LiaBedSolid />
							</div>
							<div className='stat-text'>
								<p>{card.num_of_beds} Bed</p>
							</div>
						</div>
						<div className='stat'>
							<div className='stat-icon'>
								<LiaBathSolid />
							</div>
							<div className='stat-text'>
								<p>{card.num_of_bathrooms} Bath</p>
							</div>
						</div>
						<div className='stat'>
							<div className='stat-icon'>
								<LiaArrowsAltSolid />
							</div>
							<div className='stat-text'>
								<p>{card.area_in_sq_ft} sft</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='card-division'></div>
			<div className='card-low'>
				<div className='low-left'>
					<p>
						${card.price_in_usd.toLocaleString('en-US')} <span>/month</span>
					</p>
				</div>
				<div className='low-right'>
					<button>Read More</button>
				</div>
			</div>
		</div>
	);
};
export default SelectedCard;
