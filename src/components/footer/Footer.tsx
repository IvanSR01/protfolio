import { FC } from 'react'
import styles from './Footer.module.scss'
const Footer: FC = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.items}>
				<a>GitHub</a>
				<a>Habr</a>
				<a href=''>Telegram</a>
			</div>
			<p>© 2024 all rights reserved.</p>
		</footer>
	)
}

export default Footer
