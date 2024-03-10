import { FC, ReactNode } from 'react'
import styles from './Button.module.scss'
import clsx from 'clsx'
interface IButton {
	onClick: (e?: any) => void
	children: ReactNode
	variant?: string
}

const Button: FC<IButton> = ({ children, variant, onClick }) => {
	return (
		<button onClick={onClick} className={clsx(styles.button, variant && styles.variantTwo)}>
			{children}
		</button>
	)
}

export default Button
