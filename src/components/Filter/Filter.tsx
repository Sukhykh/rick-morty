import styles from './Filter.module.scss'

import { useState } from 'react'

type FilterProps = {
	data: string[]
	title: string
	onFilterChange: (str: string) => void
}

const Filter: React.FC<FilterProps> = ({ data, title, onFilterChange }) => {
	const [selectedOption, setSelectedOption] = useState('all')

	const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const selectedValue = event.target.value
		setSelectedOption(selectedValue)
		onFilterChange(selectedValue)
	}

	return (
		<div className={styles.filter}>
			<p className={styles.filter__title}>{title}:</p>
			<div className={styles.filter__labelBar}>
				{data.map(element => (
					<label className={styles.filter__label} key={element}>
						<input
							className={styles.filter__input}
							type='radio'
							value={element}
							checked={selectedOption === element}
							onChange={handleOptionChange}
						/>
						{element}
					</label>
				))}
			</div>
		</div>
	)
}

export default Filter
