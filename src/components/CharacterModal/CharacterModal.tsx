import { Character } from 'shared/type/character'

import styles from './CharacterModal.module.scss'

type CharacterModalProps = {
	data: Character
	closeModal: () => void
}

export const CharacterModal: React.FC<CharacterModalProps> = ({
	data,
	closeModal,
}) => {
	const onCloseModal = (
		event: React.MouseEvent<HTMLDivElement, MouseEvent>
	) => {
		event.stopPropagation()
		const targetId = (event.target as HTMLElement).id
		const modalWrapperId = 'modal-wrapper'
		if (targetId !== modalWrapperId) return
		closeModal()
	}

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
								<img
									className={styles.modal__img}
									src={data.image}
									alt='character-img'
									title='Character Image'
								/>
							</picture>
						</div>
						<div className={styles.modal__infoWrapper}>
							<p className={styles.modal__title}>{data.name}</p>
							<p className={styles.modal__info}>
								Gender: {data.gender ? data.gender : 'unknown'}
							</p>
							<p className={styles.modal__info}>
								species: {data.species ? data.species : 'unknown'}
							</p>
							<p className={styles.modal__info}>
								status: {data.status ? data.status : 'unknown'}
							</p>
							<p className={styles.modal__info}>
								type: {data.type ? data.type : 'unknown'}
							</p>
							<p className={styles.modal__info}>
								origin: {data.origin.name ? data.origin.name : 'unknown'}
							</p>
							<p className={styles.modal__info}>
								location: {data.location.name ? data.location.name : 'unknown'}
							</p>
						</div>
					</div>
				</div>
			)}
		</>
	)
}
