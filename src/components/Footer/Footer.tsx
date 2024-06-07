import { getCurrentYear } from '@utilities/getCurrentYear'
import styles from './Footer.module.scss'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer__container}>
				<div className={styles.footer__wrapper}>
					<div className={styles.footer__block}>
						<div className={styles.footer__blockPart}>
							<h2 className={styles.footer__title}>Personal info</h2>
							<p className={styles.footer__text}>Kostiantyn Sukhykh</p>
							<p className={styles.footer__text}>konstantin.suhih&#64;gmail.com</p>
							<p className={styles.footer__text}>067 551 47 28</p>
						</div>
						<div className={styles.footer__blockPart}>
							<h2 className={styles.footer__title}>Technology stack</h2>
							<p className={styles.footer__text}>React</p>
							<p className={styles.footer__text}>Typescript</p>
							<p className={styles.footer__text}>React-router-dom</p>
							<p className={styles.footer__text}>Axios</p>
							<p className={styles.footer__text}>Sass</p>
							<p className={styles.footer__text}>Vite</p>
						</div>
					</div>
					<div className={styles.footer__block}>
						<div className={styles.footer__blockPart}>
							<a
								className={styles.footer__link}
								href='mailto:konstantin.suhih@gmail.com'>
								Send a mail
							</a>
							<a
								className={styles.footer__link}
								target='_blank'
								title='GitHub'
								rel='noreferrer noopener'
								href='https://github.com/Sukhykh/rick-morty'>
								Link to the project on Github
							</a>
						</div>
						<div className={styles.footer__blockPart}>
							<a
								className={styles.footer__link}
								target='_blank'
								title='Rick and Morty API'
								rel='noreferrer noopener'
								href='https://rickandmortyapi.com/documentation/'>
								Link to the API
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.footer__copyright}>
				<span className={styles.footer__copyrightText}>Copyright &copy;</span>
				<span className={styles.footer__copyrightTitle}>
					Kostiantyn Sukhykh
				</span>
				<span className={styles.footer__copyrightText}>{getCurrentYear()}</span>
			</div>
		</footer>
	)
}

export default Footer
