import { useState } from 'react'

import { Pages } from '@enums/index'
import { NavLink } from 'react-router-dom'

import styles from './Navigation.module.scss'

const Navigation = () => {
	const [activeLink, setActiveLink] = useState<string>('Episodes')

	const toggleActiveLink = (name: string) => {
		setActiveLink(name)
		console.log(activeLink)
	}

	return (
		<nav className={styles.navigation}>
			<ul className={styles.navigation__list}>
				{Pages.map(page => (
					<li
					className={`${styles.navigation__item} ${
						page.title === activeLink ? styles.navigation__item_active : ''
					}`}
						key={page.title}>
							<NavLink
								className={styles.navigation__link}
								to={page.route}
								onClick={() => toggleActiveLink(page.title)}
								>
									{page.title}
							</NavLink>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Navigation