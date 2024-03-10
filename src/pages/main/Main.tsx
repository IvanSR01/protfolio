'use client'
import { FC } from 'react'
import styles from './Main.module.scss'
import Header from '@/components/header/Header'
import FirstSection from '@/components/firstSection/FirstSection'
import Skils from '@/components/skills/Skils'
import { backendSkilsData, frontendSkilsData } from '../../skils-data/skils.data'
import Footer from '@/components/footer/Footer'
import Portfolio from '@/components/portfolio/Portfolio'
import Contact from '@/components/contact/Contact'
const Main: FC = () => {
	return (
		<div className={styles.wrapper}>
			<Header />
			<FirstSection />
			<Skils {...frontendSkilsData} />
			<Skils {...backendSkilsData} />
			<Portfolio />
			<Contact />
			<Footer />
		</div>
	)
}

export default Main
