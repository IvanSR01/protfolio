import React from 'react'
import styles from './Logo.module.scss'
import Image from 'next/image'
import icon from '../../../../public/logo.png'
const Logo = () => {
	return (
		<div className={styles.logo}>
			<Image width={60} height={50} src={icon} alt='' />
			<p>
				<b>Rose</b>TechForge
			</p>
		</div>
	)
}

export default Logo
