import sprite from '@assets/images/sprite.svg'
import React from 'react'
import styles from './Pagination.module.scss'

const ELLIPSIS = 'ellipsis'
const MAX_VISIBLE_PAGES = 5

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
	const createPagination = () => {
		const pages = []

		if (totalPages <= MAX_VISIBLE_PAGES) {
			for (let i = 1; i <= totalPages; i++) {
				pages.push(i)
			}
		} else {
			if (currentPage <= 3) {
				pages.push(1, 2, 3, 4, ELLIPSIS, totalPages)
			} else if (currentPage >= totalPages - 2) {
				pages.push(
					1,
					ELLIPSIS,
					totalPages - 3,
					totalPages - 2,
					totalPages - 1,
					totalPages
				)
			} else {
				pages.push(
					1,
					ELLIPSIS,
					currentPage - 1,
					currentPage,
					currentPage + 1,
					ELLIPSIS,
					totalPages
				)
			}
		}

		return pages
	}

	return (
		<ul className={styles.pagination}>
			{totalPages > MAX_VISIBLE_PAGES && (
				<li
					className={`${styles.pagination__item} ${
						currentPage === 1 ? styles.pagination__item_disabled : ''
					}`}
					onClick={() => currentPage > 1 && changeCurrentPage(currentPage - 1)}>
					<svg className={styles.pagination__arrowWrapper}>
						<use
							className={styles.pagination__arrow}
							xlinkHref={`${sprite}#chevronLeft`}
						/>
					</svg>
				</li>
			)}
			{createPagination().map((page, index) => (
				<li
					key={index}
					className={`${styles.pagination__item} ${
						page === currentPage ? styles.pagination__item_active : ''
					} ${page === 'ellipsis' ? styles.pagination__item_ellipsis : ''}`}
					onClick={() =>
						page !== 'ellipsis' && changeCurrentPage(Number(page))
					}>
					{page === 'ellipsis' ? (

							<svg className={styles.pagination__ellipsisWrapper}>
								<use
									className={styles.pagination__ellipsis}
									xlinkHref={`${sprite}#ellipsis`}
								/>
							</svg>
					) : (
						page
					)}
				</li>
			))}
			{totalPages > MAX_VISIBLE_PAGES && (
				<li
					className={`${styles.pagination__item} ${
						currentPage === totalPages ? styles.pagination__item_disabled : ''
					}`}
					onClick={() =>
						currentPage < totalPages && changeCurrentPage(currentPage + 1)
					}>
					<svg className={styles.pagination__arrowWrapper}>
						<use
							className={styles.pagination__arrow}
							xlinkHref={`${sprite}#chevronRight`}
						/>
					</svg>
				</li>
			)}
		</ul>
	)
}

export default Pagination
