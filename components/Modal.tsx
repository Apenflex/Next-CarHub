'use client'

import { Dialog, Menu, Transition } from '@headlessui/react'
import Link from 'next/link'
import { Fragment } from 'react'
import { HiChevronDown } from 'react-icons/hi2'
import { IoClose } from 'react-icons/io5'

import { footerLinks } from '@/utils/constants'

import { CustomButton } from './'

interface ModalProps {
	isOpen?: boolean
	onClose: () => void
}
 
const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
	return (
		<>
			<Transition.Root show={isOpen} as={Fragment}>
				<Dialog className="relative z-50" as="div" onClose={onClose}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-500"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-500"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black bg-opacity-40" />
					</Transition.Child>
					<div className="fixed inset-0 overflow-hidden">
						<div className="absolute inset-0 overflow-hidden">
							<div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
								<Transition.Child
									as={Fragment}
									enter="transform transition ease-in-out duration-500 sm:duration-700"
									enterFrom="translate-x-full"
									enterTo="translate-x-0"
									leave="transform transition ease-in-out duration-500 sm:duration-700"
									leaveTo="translate-x-full"
								>
									<Dialog.Panel className="pointer-events-auto w-screen max-w-md">
										<div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
											<div className="px-4 sm:px-6">
												<div className="flex items-start justify-end">
													<div className="ml-3 flex h-7 items-center">
														<button className="ProfileDrawerBtnClose" type="button" onClick={onClose}>
															<span className="sr-only">Close panel</span>
															<IoClose size={24} />
														</button>
													</div>
												</div>
											</div>
											<div className="relative mt-6 flex-1 px-4 sm:px-6">
												<div className="flex flex-col justify-between items-center h-full">
													<div className="flex flex-col items-center justify-between gap-y-8">
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
										</div>
									</Dialog.Panel>
								</Transition.Child>
							</div>
						</div>
					</div>
				</Dialog>
			</Transition.Root>
		</>
	)
}

export default Modal
