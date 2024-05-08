import logo from '@assets/images/logo.png'
import styles from './Logo.module.scss';

const Logo = () => {
	return (
		<a className={styles.logo} href='/'>
			<div className={styles.logo__imgWrapper}>
				<img
					className={styles.logo__img}
					src={logo}
					alt='logo'
					width={150}
					height={50}
				/>
			</div>
		</a>
	)
}

export default Logo
