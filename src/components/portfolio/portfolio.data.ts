import icon from '../../../public/Снимок экрана 2024-02-18 105237.png'

export type TypePortfolio = {
	icon: string
	link: string
	tag: string
}

export const portfolioData: TypePortfolio[] = [
	{
		icon: 'https://habrastorage.org/getpro/freelansim/allfiles/138/1383/1383647/preview_b58f324dfb.png',
		link: 'https://github.com/IvanSR01/MetaBlog',
		tag: 'full-stack',
	},
	{
		icon: 'https://habrastorage.org/getpro/freelansim/allfiles/139/1395/1395075/preview_34e4fdec40.png',
		link: 'https://github.com/IvanSR01/Task-nova-client',
		tag: 'front-end',
	},
	{
		icon: icon.src,
		link: 'https://github.com/IvanSR01/SwiftWallet',
		tag: 'back-end',
	},
	{
		icon: 'https://habrastorage.org/getpro/freelansim/allfiles/138/1384/1384827/preview_52a5be32d8.png',
		link: 'https://github.com/IvanSR01/Threads-api',
		tag: 'full-stack',
	},
]
