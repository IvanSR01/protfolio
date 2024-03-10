import { FC, ReactNode } from 'react'
import styles from './SectionHeader.module.scss'
import { motion } from 'framer-motion'

const SectionHeader: FC<{ children: ReactNode }> = ({ children }) => {
	const motions = {
		initial: { x: '-10vw', opacity: 0 },
		animate: { x: '0vw', opacity: 1 },
	}
	return (
		<header className={styles.header}>
			<motion.h2
				variants={motions}
				initial={'initial'}
				whileInView={'animate'}
				transition={{
					duration: 1,
				}}
				viewport={{ once: true }}
			>
				{children}
			</motion.h2>
		</header>
	)
}

export default SectionHeader
