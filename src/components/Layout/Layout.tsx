import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import Footer from '@components/Footer/Footer'
import Header from '@components/Header/Header'
import Loader from '@components/Loader/Loader'

import styles from './Layout.module.scss'

const Layout = () => {
	return (
		<>
			<Header />
			<Suspense fallback={<Loader />}>
				<main className={styles.main}>
					<div className={styles.main__container}>
						<div className={styles.main__wrapper}>
							<Outlet />
						</div>
					</div>
				</main>
			</Suspense>
			<Footer />
		</>
	)
}

export default Layout
