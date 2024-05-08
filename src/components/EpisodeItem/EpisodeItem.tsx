import jpeg from '@assets/images/episodes/episodes.jpg'
import webp from '@assets/images/episodes/episodes.webp'
import { Episode } from '@types/index.ts'
import React from 'react'
import styles from './EpisodeItem.module.scss'

type EpisodeItemProps = {
	data: Episode
}

const EpisodeItem: React.FC<EpisodeItemProps> = ({ data }) => {
	const { name, air_date, episode } = data

	const trimmedName: string =
		name.length > 24 ? name.slice(0, 24) + '...' : name

	return (
		<div className={styles.episode}>
			<div className={styles.episode__imgWrapper}>
				<picture>
					<source srcSet={webp} type='image/webp' />
					<img
						className={styles.episode__img}
						src={jpeg}
						alt='episode-img'
						title='Episode Image'
					/>
				</picture>
			</div>
			<div className={styles.episode__infoWrapper}>
				<p className={styles.episode__name}>{trimmedName}</p>
				<p className={styles.episode__info}>{episode}</p>
				<p className={styles.episode__info}>Date: {air_date}</p>
			</div>
		</div>
	)
}

export default EpisodeItem