'use client'
import { FC } from 'react'
import styles from './FirstSection.module.scss'
import Image from 'next/image'
import icon from '../../../public/Group 6.png'
import { motion } from 'framer-motion'
import Button from '../button/Button'
const FirstSection: FC = () => {
	return (
		<div className={styles.wrapper} id={'home'}>
			<div className={styles.container}>
				<motion.div
					initial={{
						x: '-20vw',
						opacity: 0,
					}}
					whileInView={{
						x: '0vw',
						opacity: 1,
					}}
					transition={{
						duration: 1,
					}}
					viewport={{ once: true }}
					className={styles.img}
				>
					<Image src={icon} alt='' />
				</motion.div>
				<motion.div
					initial={{
						x: '-20vw',
						opacity: 0,
					}}
					whileInView={{
						x: '0vw',
						opacity: 1,
					}}
					transition={{
						duration: 1,
					}}
					viewport={{ once: true }}
					className={styles.item}
				>
					<span>Full Stack Developer</span>
					<h1 className={styles.title}>Ivan S</h1>
					<p className={styles.subText}>
						Do you need to create a website ? When creating a website, I ensure
						the overall design from design to implementation. I also ensure the
						perfect technical side, so that everything runs exactly as it
						should. If you are interested in my portofilo experience-write to me
						!
					</p>
					<div className={styles.buttons}>
						<a href='#port'>
							<Button onClick={() => {}}>Portfolio</Button>
						</a>
						<a href='#con'>
							<Button onClick={() => {}} variant='t'>
								Contact
							</Button>
						</a>
					</div>
				</motion.div>
			</div>
		</div>
	)
}

export default FirstSection
