import React from 'react'

import styles from './Pagination.module.scss'

type PaginationProps = {
	totalPages: number
	currentPage: number
	changeCurrentPage: (page: number) => void
}

const Pagination: React.FC<PaginationProps> = ({
	totalPages,
	currentPage,
	changeCurrentPage,
}) => {
	const newArray = Array.from({ length: totalPages }, (_, index) => index + 1)

	return (
		<ul className={styles.pagination}>
			{newArray.map(page => (
				<li key={page}
					className={`${styles.pagination__item} ${
						page === currentPage ? styles.pagination__item_active : ''
					}`}
					onClick={() => changeCurrentPage(page)}>
					{page}
				</li>
			))}
		</ul>
	)
}

export default Pagination
