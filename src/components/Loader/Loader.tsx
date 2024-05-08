import styles from './Loader.module.scss'

const Loader = () => {
	return (
		<div className={styles.preloader}>
			<div
				className={`${styles.preloader__spin} ${styles.preloader__spin_one}`}></div>
			<div
				className={`${styles.preloader__spin} ${styles.preloader__spin_two}`}></div>
			<div
				className={`${styles.preloader__spin} ${styles.preloader__spin_three}`}></div>
			<div
				className={`${styles.preloader__spin} ${styles.preloader__spin_four}`}></div>
			<div
				className={`${styles.preloader__spin} ${styles.preloader__spin_five}`}></div>
			<div
				className={`${styles.preloader__spin} ${styles.preloader__spin_six}`}></div>
			<div
				className={`${styles.preloader__spin} ${styles.preloader__spin_seven}`}></div>
			<div
				className={`${styles.preloader__spin} ${styles.preloader__spin_eight}`}></div>
			<div
				className={`${styles.preloader__spin} ${styles.preloader__spin_nine}`}></div>
			<div className={styles.preloader__text}>loading...</div>
		</div>
	)
}

export default Loader
