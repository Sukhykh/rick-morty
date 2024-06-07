import { useState } from 'react'
import styles from './Search.module.scss'

type SearchProps = {
	name: string
	setName: (name: string) => void
}

const Search: React.FC<SearchProps> = ({ name, setName }) => {
	const [inputFocus, setInputFocus] = useState(false)

	const handleFocusIn = () => {
		setInputFocus(true)
	}

	const handleFocusOut = () => {
		setInputFocus(false)
	}

	return (
		<div className={styles.search}>
			<input
				className={`${styles.search__input} ${
					inputFocus ? styles.search__input_active : ''
				}`}
				onFocus={handleFocusIn}
				onBlur={handleFocusOut}
				onChange={e => setName(e.target.value)}
				value={name}
				type='text'
				placeholder='Search by name...'
			/>
		</div>
	)
}

export default Search
