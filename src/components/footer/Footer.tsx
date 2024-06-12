import { FC } from 'react'
import styles from './Footer.module.scss'
const Footer: FC = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.items}>
				<a href='https://github.com/IvanSR01'>GitHub</a>
				<a href='https://freelance.habr.com/freelancers/ivan-nelson'>Habr</a>
				<a href='https://t.me/nelsonivanz'>Telegram</a>
			</div>
			<p>© 2024 all rights reserved.</p>
		</footer>
	)
}

export default Footer
