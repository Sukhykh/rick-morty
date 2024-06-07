import { useEffect, useState } from 'react'
import { Episode } from 'shared/type/episode'

import jpeg from '@assets/images/episodes/episodes.jpg'
import webp from '@assets/images/episodes/episodes.webp'

import axios from 'axios'
import styles from './EpisodeModal.module.scss'

type EpisodeModalProps = {
	data: Episode
	closeModal: () => void
}

const EpisodeModal: React.FC<EpisodeModalProps> = ({ data, closeModal }) => {
	const [characterData, setCharacterData] = useState<string[]>([])
	const [isShort, setIsShort] = useState<boolean>(true)

	const fetchCharacterData = async () => {
		try {
			const characterRequests = data.characters.map(element =>
				axios.get(element)
			)
			const characterResponses = await Promise.all(characterRequests)
			const characterData = characterResponses.map(
				response => response.data.name
			)
			setCharacterData(characterData)
		} catch (error) {
			console.error(error)
		}
	}

	const toggleIsShort = () => {
		setIsShort(prev => !prev)
	}

	const onCloseModal = (
		event: React.MouseEvent<HTMLDivElement, MouseEvent>
	) => {
		event.stopPropagation()
		const targetId = (event.target as HTMLElement).id
		const modalWrapperId = 'modal-wrapper'
		if (targetId !== modalWrapperId) return
		setIsShort(true)
		closeModal()
	}

	useEffect(() => {
		if (data) {
			fetchCharacterData()
		}
	}, [data])

	const toRenderCharacters = isShort ? characterData.slice(0, 3) : characterData

	return (
		<>
			{data && (
				<div
					className={styles.modal}
					onClick={event => onCloseModal(event)}
					id='modal-wrapper'>
					<div className={styles.modal__wrapper}>
						<div className={styles.modal__imgWrapper}>
							<picture>
								<source srcSet={webp} type='image/webp' />
								<img
									className={styles.modal__img}
									src={jpeg}
									alt='episode-img'
									title='Episode Image'
								/>
							</picture>
						</div>
						<div className={styles.modal__infoWrapper}>
							<p className={styles.modal__info}>{data.episode}</p>
							<p className={styles.modal__info}>{data.air_date}</p>
							<p className={styles.modal__title}>{data.name}</p>
							<p className={styles.modal__info}>Characters:</p>
							<ul className={styles.modal__characterList}>
								{toRenderCharacters.map((name, index) => (
									<li className={styles.modal__character} key={index}>
										{name}
									</li>
								))}
							</ul>
							<div className={styles.modal__button} onClick={toggleIsShort}>
								{isShort ? 'Show more' : 'Show less'}
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default EpisodeModal
