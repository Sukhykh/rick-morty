import { instanceApi } from '@services/Axios'
import { useEffect, useState } from 'react'

import { Episode, Info } from '@type/index'

import EpisodeItem from '@components/EpisodeItem/EpisodeItem'
import Pagination from '@components/Pagination/Pagination'
import EpisodeModal from '@components/EpisodeModal/EpisodeModal'
import FetchError from '@components/FetchError/FetchError'

import styles from './EpisodeList.module.scss'

interface Response {
	info: Info
	results: Episode[]
}

const initialInfo: Info = {
  count: 0,
  next: null,
  pages: 0,
  prev: null
};

const EpisodeList = () => {
	const [episodesList, setEpisodesList] = useState<Episode[]>([])
	const [episodesInfo, setEpisodesInfo] = useState<Info>(initialInfo)
	const [currentPage, setCurrentPage] = useState<number>(1)
	const [currentModal, setCurrentModal] = useState<Episode | null>(null)
	const [error, setError] = useState<boolean>(false)

	const changeCurrentPage = (page: number) => {
		setCurrentPage(page)
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	const openModal = (data: Episode) => {
		setCurrentModal(data)
	}

	const closeModal = () => {
		setCurrentModal(null)
	}

	useEffect(() => {
		const fetchingData = async (): Promise<void> => {
			try {
				const response = await instanceApi.get<Response>('episode', {
					params: {
						page: currentPage,
					},
				})
				setError(false)
				setEpisodesList(response.data.results)
				setEpisodesInfo(response.data.info)
			} catch (err) {
				setError(true)
				console.log(err)
			}
		}

		fetchingData()
	}, [currentPage])

	return (
		<section className={styles.episodeList}>
			{!error && episodesList.length > 0 ? (
				<div className={styles.episodeList__list}>
					{episodesList.map(episode => (
						<EpisodeItem key={episode.id} data={episode} openModal={openModal}/>
					))}
				</div>
			) : (
				<FetchError/>
			)}
			{!error && <Pagination totalPages={episodesInfo.pages} currentPage={currentPage} changeCurrentPage={changeCurrentPage}/>}
			{currentModal && <EpisodeModal data={currentModal} closeModal={closeModal}/>}
		</section>
	)
}

export default EpisodeList
