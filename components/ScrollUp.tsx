'use client'

import { useEffect, useState } from 'react'
import { HiChevronDoubleUp } from 'react-icons/hi2'

import { CustomButton } from './'

const ScrollUp = () => {
	const [isVisible, setIsVisible] = useState(false)

	const toggleVisibility = () => {
		setIsVisible(window?.scrollY > 800)
	}

	useEffect(() => {
		window.addEventListener('scroll', toggleVisibility)

		return () => {
			window.removeEventListener('scroll', toggleVisibility)
		}
	}, [])

	return (
		<div className="fixed bottom-5 right-5">
			{isVisible && (
				<CustomButton
					btnType="button"
					containerStyles="bg-primary-blue rounded-full text-white py-2"
					handleClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
				>
					<HiChevronDoubleUp className="h-6 w-6 text-white" />
				</CustomButton>
			)}
		</div>
	)
}

export default ScrollUp
