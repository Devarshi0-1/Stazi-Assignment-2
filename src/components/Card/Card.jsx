import { useNavigate } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsBuildings } from 'react-icons/bs';
import { LiaBathSolid, LiaArrowsAltSolid, LiaBedSolid } from 'react-icons/lia';
import { IoLocationOutline } from 'react-icons/io5';

import './card.css';

const Card = ({
	id,
	forRent,
	image,
	location,
	name,
	numOfRooms,
	numOfBeds,
	numOfBathrooms,
	priceInUsd,
	area,
}) => {
	const navigate = useNavigate();

	const handleCardClick = () => {
		navigate(`/property/${id}`);
	};

	return (
		<div
			className='card'
			onClick={handleCardClick}>
			<div className='card-top'>
				<div className='top-section'>
					<button>For {forRent}</button>
					<button>
						<AiOutlineHeart />
					</button>
				</div>
				<div className='top-img'>
					<img
						src={image}
						alt='Apartment'
					/>
				</div>
				<div className='top-controls'></div>
			</div>
			<div className='card-mid'>
				<div className='mid-address'>
					<IoLocationOutline />
					<p>{location}</p>
				</div>
				<div className='mid-info'>
					<h3>{name}</h3>
					<div className='info-stats'>
						<div className='stat'>
							<div className='stat-icon'>
								<BsBuildings />
							</div>
							<div className='stat-text'>
								<p>{numOfRooms} Room</p>
							</div>
						</div>
						<div className='stat'>
							<div className='stat-icon'>
								<LiaBedSolid />
							</div>
							<div className='stat-text'>
								<p>{numOfBeds} Bed</p>
							</div>
						</div>
						<div className='stat'>
							<div className='stat-icon'>
								<LiaBathSolid />
							</div>
							<div className='stat-text'>
								<p>{numOfBathrooms} Bath</p>
							</div>
						</div>
						<div className='stat'>
							<div className='stat-icon'>
								<LiaArrowsAltSolid />
							</div>
							<div className='stat-text'>
								<p>{area} sft</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='card-division'></div>
			<div className='card-low'>
				<div className='low-left'>
					<p>
						${priceInUsd.toLocaleString('en-US')} <span>/month</span>
					</p>
				</div>
				<div className='low-right'>
					<button>Read More</button>
				</div>
			</div>
		</div>
	);
};
export default Card;
