'use client'

import { Combobox, Transition } from '@headlessui/react'
import Image from 'next/image'
import { Fragment, useState } from 'react'

import { manufacturers } from '@/constants'
import { SearchManufacturerProps } from '@/types'

const SearchManufacturer = ({ manufacturer, setManufacturer }: SearchManufacturerProps) => {
	const [query, setQuery] = useState('')

	const filteredManufactures =
		query === ''
			? manufacturers
			: manufacturers.filter((item) =>
					item.toLowerCase().replace(/\s+/g, '').includes(query.toLowerCase().replace(/\s+/g, ''))
			  )

	return (
		<div className="search-manufacturer">
			<Combobox value={manufacturer} onChange={setManufacturer} >
				<div className="relative w-full">
					<Combobox.Button className="absolute top-[14px]">
						<Image src="/car-logo.svg" alt="Car Logo" width={20} height={20} className="ml-4" />
					</Combobox.Button>

					<Combobox.Input
						className="search-manufacturer__input"
						placeholder="Volkswagen"
						displayValue={(manufacturer: string) => manufacturer}
						onChange={(e) => setQuery(e.target.value)}
					/>

					<Transition
						as={Fragment}
						leave="transition ease-in duration-100"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
						afterLeave={() => setQuery('')}
					>
						<Combobox.Options>
							{filteredManufactures.map((item) => (
								<Combobox.Option
									className={({ active }) =>
										`search-manufacturer__option relative ${
											active ? 'bg-primary-blue text-white' : 'text-gray-900'
										}`
									}
									key={item}
									value={item}
								>
									{({ selected, active }) => (
										<>
											<span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>{item}</span>
											{selected ? (
												<span
													className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
														active ? 'text-white' : 'text-teal-600'
													}`}
												></span>
											) : null}
										</>
									)}
								</Combobox.Option>
							))}
						</Combobox.Options>
					</Transition>
				</div>
			</Combobox>
		</div>
	)
}

export default SearchManufacturer
