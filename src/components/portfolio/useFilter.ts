import { useMemo } from 'react'
import { TypePortfolio } from './portfolio.data'

export const useFilter = (
	array: TypePortfolio[],
	sort: string
): TypePortfolio[] => {
	if (sort === 'all') return array
	// eslint-disable-next-line react-hooks/rules-of-hooks
	return array.filter(item => {
		return item.tag === sort
	})
}
