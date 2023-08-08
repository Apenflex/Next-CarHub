'use client'

import Image from 'next/image'
import { useState } from 'react'

import { SearchManufacturer } from './'

const SearchButton = ({ otherClass }: { otherClass: string }) => {
	return (
		<button className={`z-10 -ml-3 ${otherClass}`} type="submit">
			<Image
				src="/magnifying-glass.svg"
				alt="magnifying-glass"
				width={40}
				height={40}
				className="object-contain"
			/>
		</button>
	)
}

const SearchBar = () => {
	const [manufacturer, setManufacturer] = useState('')
	const [model, setModel] = useState('')
	const handleSearch = () => {}

	return (
		<form className="searchbar" onSubmit={handleSearch}>
			<div className="searchbar__item">
				<SearchManufacturer manufacturer={manufacturer} setManufacturer={setManufacturer} />
				<SearchButton otherClass="sm:hidden" />
			</div>
			<div className="searchbar__item">
				<Image
					src="/model-icon.png"
					alt="model icon"
					width={25}
					height={25}
					className="absolute ml-4 h-[20px] w-[20px]"
				/>
				<input
					type="text"
					name="model"
					placeholder="Tiguan"
					value={model}
					onChange={(e) => setModel(e.target.value)}
					className="searchbar__input"
				/>
				<SearchButton otherClass="sm:hidden" />
			</div>
			<SearchButton otherClass="max-sm:hidden" />
		</form>
	)
}

export default SearchBar
