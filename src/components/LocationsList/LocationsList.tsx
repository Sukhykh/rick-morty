import { instanceApi } from '@services/Axios'
import { useEffect, useState } from 'react'

import { Info, Location } from '@type/index'

import FetchError from '@components/FetchError/FetchError'
import LocationItem from '@components/LocationItem/LocationItem'
import LocationModal from '@components/LocationModal/LocationModal'
import Pagination from '@components/Pagination/Pagination'

import styles from './LocationsList.module.scss'

interface Response {
	info: Info
	results: Location[]
}

const initialInfo: Info = {
	count: 0,
	next: null,
	pages: 0,
	prev: null,
}

const LocationList = () => {
	const [LocationsList, setLocationsList] = useState<Location[]>([])
	const [LocationsInfo, setLocationsInfo] = useState<Info>(initialInfo)
	const [currentPage, setCurrentPage] = useState<number>(1)
	const [currentModal, setCurrentModal] = useState<Location | null>(null)
	const [error, setError] = useState<boolean>(false)

	const changeCurrentPage = (page: number) => {
		setCurrentPage(page)
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	const openModal = (data: Location) => {
		setCurrentModal(data)
	}

	const closeModal = () => {
		setCurrentModal(null)
	}

	useEffect(() => {
		const fetchingData = async (): Promise<void> => {
			try {
				const response = await instanceApi.get<Response>('location', {
					params: {
						page: currentPage,
					},
				})
				setError(false)
				setLocationsList(response.data.results)
				setLocationsInfo(response.data.info)
			} catch (err) {
				setError(true)
				console.log(err)
			}
		}

		fetchingData()
	}, [currentPage])

	return (
		<section className={styles.locationList}>
			{!error && LocationsList.length > 0 ? (
				<div className={styles.locationList__list}>
					{LocationsList.map(location => (
						<LocationItem
							key={location.id}
							data={location}
							openModal={openModal}
						/>
					))}
				</div>
			) : (
				<FetchError />
			)}
			{!error && (
				<Pagination
					totalPages={LocationsInfo.pages}
					currentPage={currentPage}
					changeCurrentPage={changeCurrentPage}
				/>
			)}
			{currentModal && (
				<LocationModal data={currentModal} closeModal={closeModal} />
			)}
		</section>
	)
}

export default LocationList
