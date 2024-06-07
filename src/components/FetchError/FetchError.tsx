import styles from './FetchError.module.scss'

const FetchError = () => {
	return (
		<p className={styles.error}>Failed to fetch data...</p>
	)
}

export default FetchError