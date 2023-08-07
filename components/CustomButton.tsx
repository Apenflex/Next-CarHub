'use client'

import Image from 'next/image'

import { CustomButtonProps } from '@/types'

const CustomButton = ({title, btnType, containerStyles, handleClick}: CustomButtonProps) => {
	return (
		<button className={`custom-btn ${containerStyles}`} type={btnType} disabled={false} onClick={handleClick}>
      <span className={`flex-1`}>{title}</span>
		</button>
	)
}
export default CustomButton
