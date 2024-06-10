import jpeg from '@assets/images/episodes/episodes.jpg'
import webp from '@assets/images/episodes/episodes.webp'
import { Location } from 'shared/type'
import styles from './LocationItem.module.scss'

type LocationItemProps = {
	data: Location
	openModal: (data: Location) => void
}

const LocationItem: React.FC<LocationItemProps> = ({ data, openModal }) => {
	const { name, type } = data

	const trimmedName: string =
		name.length > 24 ? name.slice(0, 24) + '...' : name

	return (
		<div className={styles.location} onClick={() => openModal(data)}>
			<div className={styles.location__imgWrapper}>
				<picture>
					<source srcSet={webp} type='image/webp' />
					<img
						className={styles.location__img}
						src={jpeg}
						alt='location-img'
						title='Location Image'
					/>
				</picture>
			</div>
			<div className={styles.location__infoWrapper}>
				<p className={styles.location__name}>{trimmedName}</p>
				<p className={styles.location__info}>{type}</p>
			</div>
		</div>
	)
}

export default LocationItem

