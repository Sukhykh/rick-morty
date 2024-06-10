import { useEffect, useState } from 'react'
import { Location } from 'shared/type/index'

import jpeg from '@assets/images/episodes/episodes.jpg'
import webp from '@assets/images/episodes/episodes.webp'

import axios from 'axios'
import styles from './LocationModal.module.scss'

type LocationModalProps = {
	data: Location
	closeModal: () => void
}

const LocationModal: React.FC<LocationModalProps> = ({ data, closeModal }) => {
	const [characterData, setCharacterData] = useState<string[]>([])
	const [isShort, setIsShort] = useState<boolean>(true)

	const fetchCharacterData = async () => {
		try {
			const residentsRequests = data.residents.map(element =>
				axios.get(element)
			)
			const characterResponses = await Promise.all(residentsRequests)
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
									alt='Location-img'
									title='Location Image'
								/>
							</picture>
						</div>
						<div className={styles.modal__infoWrapper}>
							<p className={styles.modal__info}>{data.name}</p>
							<p className={styles.modal__info}>{data.type}</p>
							<p className={styles.modal__title}>{data.name}</p>
							<p className={styles.modal__info}>{toRenderCharacters.length ? "Residents:" : "No Residents here"}</p>
							{toRenderCharacters.length && (
								<ul className={styles.modal__characterList}>
									{toRenderCharacters.map((name, index) => (
										<li className={styles.modal__character} key={index}>
											{name}
										</li>
									))}
								</ul>
							)}
							{toRenderCharacters.length > 3 && 
								<div className={styles.modal__button} onClick={toggleIsShort}>
									{isShort ? 'Show more' : 'Show less'}
								</div>
							}
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default LocationModal
