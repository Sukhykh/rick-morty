import Logo from '@components/Logo/Logo'
import Navigation from '@components/Navigation/Navigation'

import styles from './Header.module.scss'

const Header = () => {

	return (
		<header className={styles.header}>
			<div className={styles.header__container}>
				<div className={styles.header__wrapper}>
					<Logo/>
					<Navigation />
				</div>
			</div>
		</header>
	)
}

export default Header