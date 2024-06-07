import CharacterItem from '@components/CharacterItem/CharacterItem'
import FetchError from '@components/FetchError/FetchError'
import Pagination from '@components/Pagination/Pagination'
import { instanceApi } from '@services/Axios'
import { Character } from '@type/character'
import { Info } from '@type/info'
import { useEffect, useState } from 'react'
import styles from './CharactersTable.module.scss'
import { CharacterModal } from '@components/CharacterModal/CharacterModal'

type CharactersTableProps = {
	page: number
	name: string
	gender: string
	status: string
	changePage: (page: number) => void
}

interface Response {
	info: Info
	results: Character[]
}

const initialInfo: Info = {
	count: 0,
	next: null,
	pages: 0,
	prev: null,
}

const CharactersTable: React.FC<CharactersTableProps> = ({
	page,
	name,
	gender,
	status,
	changePage
}) => {
	const [charactersList, setCharactersList] = useState<Character[]>([])
	const [characterInfo, setCharacterInfo] = useState<Info>(initialInfo)
	const [currentModal, setCurrentModal] = useState<Character | null>(null)
	const [error, setError] = useState<boolean>(false)

	const changeCurrentPage = (page: number) => {
		changePage(page)
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	const openModal = (data: Character) => {
		setCurrentModal(data)
	}

	const closeModal = () => {
		setCurrentModal(null)
	}

	useEffect(() => {
		const fetchingData = async (): Promise<void> => {
			try {
				const response = await instanceApi.get<Response>('character', {
					params: {
						page,
						name,
						gender,
						status,
					},
				})
				setError(false)
				setCharactersList(response.data.results)
				setCharacterInfo(response.data.info)
				
			} catch (err) {
				setError(true)
				console.log(err)
			}
		}
		fetchingData()
	}, [page, gender, name, status])

	return (
		<>
			{!error && charactersList.length > 0 ? (
				<div className={styles.characterTable}>
					{charactersList.map(character => (
						<CharacterItem key={character.id} data={character} openModal={openModal}/>
					))}
				</div>
			) : (
				<FetchError />
			)}
			{!error && <Pagination totalPages={characterInfo.pages} currentPage={page} changeCurrentPage={changeCurrentPage}/>}
			{currentModal && <CharacterModal data={currentModal} closeModal={closeModal}/>}
		</>
	)
}

export default CharactersTable
