import { instanceApi } from '@services/Axios'
import { useEffect, useState } from 'react'

import EpisodeItem from '@components/EpisodeItem/EpisodeItem'
import Pagination from '@components/Pagination/Pagination'
import styles from './EpisodeList.module.scss'

import { Episode, Info } from '@types/index.ts'

interface Response {
	info: Info
	results: Episode[]
}

const EpisodeList = () => {
	const [episodesList, setEpisodesList] = useState<Episode[]>([])
	const [episodesInfo, setEpisodesInfo] = useState<Info>({})
	const [currentPage, setCurrentPage] = useState<number>(1)

	const fetchingData = async (): Promise<void> => {
		try {
			const response = await instanceApi.get<Response>('episode', {
				params: {
					page: currentPage,
				},
			})
			setEpisodesList(response.data.results)
			setEpisodesInfo(response.data.info)
		} catch (err) {
			console.log(err)
		}
	}

	const changeCurrentPage = (page: number) => {
		setCurrentPage(page)
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	useEffect(() => {
		fetchingData()
	}, [currentPage])

	return (
		<section className={styles.episodeList}>
			{episodesList.length > 0 ? (
				<div className={styles.episodeList__list}>
					{episodesList.map(episode => (
						<EpisodeItem key={episode.id} data={episode}/>
					))}
				</div>
			) : (
				<p>Failed to fetch data</p>
			)}
			<Pagination totalPages={episodesInfo.pages} currentPage={currentPage} changeCurrentPage={changeCurrentPage}/>
		</section>
	)
}

export default EpisodeList
