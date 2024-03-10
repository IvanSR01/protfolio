'use client'
import { FC, useEffect, useRef, useState } from 'react'
import styles from './Menu.module.scss'
import { navData } from '../nav.data'
import { AnimatePresence, motion } from 'framer-motion'
const Menu: FC = () => {
	const [isOpen, setIsOpen] = useState(false)
	const modalRef = useRef(null)
	useEffect(() => {
		const handleClick = (event: any) => {
			const path = event.path || (event.composedPath && event.composedPath())
			// eslint-disable-next-line react/prop-types
			if (!path.includes(modalRef.current)) {
				setIsOpen(false)
			}
		}
		document.body.addEventListener('click', handleClick)

		return () => {
			document.body.removeEventListener('click', handleClick)
		}
	})
	return (
		<div className={styles.menu} ref={modalRef}>
			<label className={styles.container}>
				<input
					type='checkbox'
					checked={isOpen}
					onChange={() => setIsOpen(!isOpen)}
				/>
				<div className={styles.checkmark}>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</label>
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						exit={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						className={styles.items}
					>
						{navData.map((item, i) => (
							<a
								className={styles.link}
								href={`#${item.path}`}
								key={i}
								onClick={() => setIsOpen(false)}
							>
								{item.name}
							</a>
						))}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}

export default Menu
