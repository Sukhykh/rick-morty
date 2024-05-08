import styles from './Title.module.scss'

type TitleProps = {
	name: string
};

const Title: React.FC<TitleProps> = ({ name }) => {
	return (
		<h1 className={styles.title}>{name}</h1>
	)
}

export default Title



