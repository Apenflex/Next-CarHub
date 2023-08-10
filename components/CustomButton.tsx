'use client'

import Image from 'next/image'

import { CustomButtonProps } from '@/types'

const CustomButton = ({
	title,
	btnType,
	containerStyles,
	textStyles,
	rightIcon,
	isDisabled,
	children,
	handleClick,
}: CustomButtonProps) => {
	return (
		<button className={`custom-btn ${containerStyles}`} type={btnType} disabled={false} onClick={handleClick}>
			<span className={`flex-1 ${textStyles}`}>{title}</span>
			{rightIcon && (
				<div className="relative h-6 w-6">
					<Image src={rightIcon} alt="right-icon" fill className="object-contain" />
				</div>
			)}
			{children}
		</button>
	)
}
export default CustomButton
