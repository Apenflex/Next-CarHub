'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'
import { toast } from 'react-hot-toast'

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
	const router = useRouter()

	const handleSearch = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (manufacturer === '' && model === '') {
			toast.error('Please enter a manufacturer or model')
		}

		updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase())
	}

	const updateSearchParams = (model: string, manufacturer: string) => {
		const searchParams = new URLSearchParams(window.location.search)

		if (model) {
			searchParams.set('model', model)
		} else {
			searchParams.delete('model')
		}

		if (manufacturer) {
			searchParams.set('manufacturer', manufacturer)
		} else {
			searchParams.delete('manufacturer')
		}

		const newPathName = `${window.location.pathname}?${searchParams.toString()}`

		router.push(newPathName)
	}

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
