import { FC } from 'react'
import Logo from './logo/Logo'
import styles from './Header.module.scss'
import Nav from './nav/Nav'
const Header: FC = () => {
	return (
		<header className={styles.header}>
			<Logo />
			<Nav />
		</header>
	)
}

export default Header
