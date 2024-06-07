import { Character } from '@type/character'
import React from 'react'
import styles from './CharacterItam.module.scss'

type CharacterItemProps = {
	data: Character
	openModal: (data: Character) => void
}

const CharacterItem: React.FC<CharacterItemProps> = ({ data, openModal }) => {
	const { image, name, gender, species, status } = data

	const trimmedName: string =
	name.length > 24 ? name.slice(0, 24) + '...' : name

	return (
		<div className={styles.character} onClick={() => openModal(data)}>
			<div className={styles.character__imgWrapper}>
			<picture>
					<img
						className={styles.character__img}
						src={image}
						alt='character-img'
						title='Character Image'
					/>
				</picture>
			</div>
			<div className={styles.character__infoWrapper}>
				<p className={styles.character__name}>{trimmedName}</p>
				<p className={styles.character__info}>gender: {gender ? gender : 'Unknown'}</p>
				<p className={styles.character__info}>species: {species ? species : 'Unknown'}</p>
				<p className={styles.character__info}>status: {status ? status : 'Unknown'}</p>
			</div>
		</div>
	)
}

export default CharacterItem
