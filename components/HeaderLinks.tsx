'use client'

import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import { Fragment } from 'react'

import { footerLinks } from '@/utils/constants'

import { CustomButton } from './'

const HeaderLinks = () => {
	return (
		<div className="md:flex lg:gap-x-10 gap-x-3 hidden">
			<div className="flex items-center justify-between lg:gap-x-5 gap-x-2">
				{footerLinks.map((link) => (
					<Menu as="div" key={link.title} className="relative flex text-left">
						<Menu.Button className="header__menu-btn">
							{link.title}
							<ChevronDownIcon
								className="text-black-200 -mr-1 ml-2 h-5 w-5 hover:text-black-100"
								aria-hidden="true"
							/>
						</Menu.Button>

						<Transition
							as={Fragment}
							enter="transition ease-out duration-100"
							enterFrom="transform opacity-0 scale-95"
							enterTo="transform opacity-100 scale-100"
							leave="transition ease-in duration-75"
							leaveFrom="transform opacity-100 scale-100"
							leaveTo="transform opacity-0 scale-95"
						>
							<Menu.Items className="header__menu-btn-link">
								{link.links.map((item) => (
									<Menu.Item key={item.title}>
										{({ active }) => (
											<Link
												href={item.url}
												className={`${
													active ? 'bg-primary-blue text-white' : 'text-gray-700'
												} block px-4 py-2 text-sm`}
											>
												{item.title}
											</Link>
										)}
									</Menu.Item>
								))}
							</Menu.Items>
						</Transition>
					</Menu>
				))}
			</div>
			<CustomButton title="Sign In" btnType="button" containerStyles="header__menu-btn-auth" />
		</div>
	)
}

export default HeaderLinks
