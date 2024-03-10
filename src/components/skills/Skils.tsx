'use client'
import { FC } from 'react'
import styles from './Skils.module.scss'
import { motion } from 'framer-motion'
import Image from 'next/image'
import icon from '../../../public/image 14.png'
import SectionHeader from '../sectionHeader/SectionHeader'
export interface ISkils {
	id: string
	title: string
	firstArray: { title: string; content: string; icon: string }[]
	secondArray: { title: string; procent: number }[]
}

const Skils: FC<ISkils> = ({ id, title, firstArray, secondArray }) => {
	const motions = {
		initial: { x: '-20vw', opacity: 0 },
		animate: { x: '0vw', opacity: 1 },
	}

	const motionsItems = {
		initial: { y: '120px', opacity: 0 },
		animate: { y: '0vh', opacity: 1 },
	}
	return (
		<div className={styles.wrapper} id={id}>
			<SectionHeader>{title}</SectionHeader>
			<main>
				<motion.section
					variants={motions}
					initial={'initial'}
					whileInView={'animate'}
					transition={{
						duration: 1,
					}}
					viewport={{ once: true }}
					className={styles.section}
				>
					<h3>What am I doing ?</h3>
					<div className={styles.items}>
						{firstArray.map((item, i) => (
							<motion.div
								variants={motionsItems}
								initial={'initial'}
								whileInView={'animate'}
								transition={{
									duration: 1.1 + i,
								}}
								viewport={{ once: true }}
								className={styles.item}
								key={i}
							>
								<div>
									<Image src={icon} alt={''} />
								</div>
								<div>
									<h4>{item.title}</h4>
									<p>{item.content}</p>
								</div>
							</motion.div>
						))}
					</div>
				</motion.section>
				<motion.section
					variants={motions}
					initial={'initial'}
					whileInView={'animate'}
					transition={{
						duration: 1,
					}}
					viewport={{ once: true }}
					className={styles.section}
					style={{
						marginLeft: '20px',
					}}
				>
					<h3>Coding Skills</h3>
					<div
						className={styles.items}
						style={{
							marginLeft: '20px',
						}}
					>
						{secondArray.map((item, i) => (
							<motion.div
								variants={motionsItems}
								initial={'initial'}
								whileInView={'animate'}
								transition={{
									duration: 0.1 + i || 0.5,
								}}
								viewport={{ once: true }}
								className={styles.codingItem}
								key={i}
							>
								<header className={styles.heading}>
									<h4>{item.title}</h4>
									<p>
										{item.procent}
										{'%'}
									</p>
								</header>
								<div className={styles.width}>
									<div
										className={styles.content}
										style={{
											width: `${item.procent}%`,
										}}
									>
										<p
											style={{
												opacity: 0,
											}}
										>
											s
										</p>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</motion.section>
			</main>
		</div>
	)
}

export default Skils
