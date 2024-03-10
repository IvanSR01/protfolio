import phoneIcon from '../../../public/image 18.svg'
import geoIcon from '../../../public/image 19.svg'
import mailIcon from '../../../public/image 20.svg'
export const contactData: TypeContact[] = [
	{
		title: '+7 995 084 39 44',
		content:
			'Replace a classic meaningful text with an appropriate meaningless',
		icon: phoneIcon.src,
	},
	{
		title: 'Russian Federation',
		content:
			'Replace a classic meaningful text with an appropriate meaningless',
		icon: geoIcon.src,
	},
	{
		title: 'ivan.sryvkin@bk.ru',
		content:
			'Replace a classic meaningful text with an appropriate meaningless',
		icon: mailIcon.src,
	},
]

type TypeContact = {
	title: string
	content: string
	icon: string
}
