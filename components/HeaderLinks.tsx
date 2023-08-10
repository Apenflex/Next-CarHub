'use client'

import { Menu, Transition } from '@headlessui/react'
import Link from 'next/link'
import { Fragment, useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { HiChevronDown } from 'react-icons/hi2'

import { footerLinks } from '@/utils/constants'

import { CustomButton } from './'
import Modal from './Modal'

const HeaderLinks = () => {
	const [isModalOpen, setIsModalOpen ] = useState(false)

	return (
		<div className="">
      {/* Mobile menu */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
			<GiHamburgerMenu
				className="text-black-200 block h-7 w-7 hover:text-black-100 md:hidden"
				aria-hidden="true"
				onClick={() => setIsModalOpen(true)}
      />
      {/* Desktop menu */}
			<div className="hidden gap-x-3 md:flex lg:gap-x-10">
				<div className="flex items-center justify-between gap-x-2 lg:gap-x-5">
					{footerLinks.map((link) => (
						<Menu as="div" key={link.title} className="relative flex text-left">
							<Menu.Button className="header__menu-btn">
								{link.title}
								<HiChevronDown
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
		</div>
	)
}

export default HeaderLinks
