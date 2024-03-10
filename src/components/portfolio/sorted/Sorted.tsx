import { Dispatch, FC, SetStateAction, useState } from 'react'
import styles from './Sorted.module.scss'
const Sorted: FC<{ setFilter: Dispatch<SetStateAction<string>> }> = ({
	setFilter,
}) => {
	const sortData = ['All', 'front-end', 'back-end', 'full-stack']
	const [count, setCount] = useState<number>(0)
	return (
		<div className={styles.wrapper}>
			{sortData.map((item, i) => (
				<p
					className={`${i === count && styles.active}`}
					key={i}
					onClick={() => {
						setCount(i)
						setFilter(sortData[i].toLowerCase())
					}}
				>
					{item}
				</p>
			))}
		</div>
	)
}

export default Sorted
