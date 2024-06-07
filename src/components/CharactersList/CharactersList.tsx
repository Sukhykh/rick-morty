import { useState } from 'react'
import { useDebounce } from '@utilities/debounce'

import CharactersTable from '@components/CharactersTable/CharactersTable'
import Filter from '@components/Filter/Filter'
import Search from '@components/Search/Search'

import styles from './CharactersList.module.scss'

const statusFilter = ['all', 'alive', 'dead', 'unknown']
const genderFilter = ['all', 'female', 'male', 'genderless', 'unknown']

const CharactersList = () => {
	const [statusValue, setStatusValue] = useState<string>('')
	const [genderValue, setGenderValue] = useState<string>('')
	const [nameValue, setNameValue] = useState<string>('')
	const [currentPage, setCurrentPage] = useState<number>(1)

	const debouncedName = useDebounce(nameValue, 500)
	const debouncedGender = useDebounce(genderValue, 500)
	const debouncedStatus = useDebounce(statusValue, 500)

	const getStatusValue = (value: string) => {
		setCurrentPage(1)
		setStatusValue(value === 'all' ? '' : value)
	}

	const getGenderValue = (value: string) => {
		setCurrentPage(1)
		setGenderValue(value === 'all' ? '' : value)
	}

	return (
		<section className={styles.characterList}>
			<Search name={nameValue} setName={setNameValue} />
			<div className={styles.characterList__filtersBar}>
				<Filter
					title='Set status'
					data={statusFilter}
					onFilterChange={getStatusValue}
				/>
				<Filter
					title='Set gender'
					data={genderFilter}
					onFilterChange={getGenderValue}
				/>
			</div>
			<CharactersTable
				page={currentPage}
				name={debouncedName}
				gender={debouncedGender}
				status={debouncedStatus}
				changePage={setCurrentPage}
			/>
		</section>
	)
}

export default CharactersList
