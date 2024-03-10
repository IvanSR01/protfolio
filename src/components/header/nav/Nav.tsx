'use client'
import { FC } from 'react'
import styles from './Nav.module.scss'
import { navData } from './nav.data'
import { useSize } from './useSize'
import Menu from './menu/Menu'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'
const Nav: FC = () => {
	const width = useSize()
	const pathname = usePathname()
	return (
		<nav className={styles.nav}>
			{width >= 1000 ? (
				<>
					{navData.map((item, i) => (
						<a
							className={clsx(
								styles.link,
								pathname == item.path && styles.active
							)}
							href={`#${item.path}`}
							key={i}
						>
							{item.name}
						</a>
					))}
				</>
			) : (
				<Menu />
			)}
		</nav>
	)
}

export default Nav
