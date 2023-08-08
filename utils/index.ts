import { CarProps } from '@/types'

export async function fetchCars() {
	const headers = {
		'X-RapidAPI-Key': process.env.RAPID_API_KEY as string,
		'X-RapidAPI-Host': process.env.RAPID_API_HOST as string,
	}
	const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=q3', {
		method: 'GET',
		headers,
	})
	// console.log(response)
	const result = await response.json()

	return result
}

export const calculateCarRent = (city_mpg: number, year: number) => {
	const basePricePerDay = 50
	const mileageFactor = 0.1
	const ageFactor = 0.05

	// Calculate additional rate based on mileage and age
	const mileageRate = city_mpg * mileageFactor
	const ageRate = (new Date().getFullYear() - year) * ageFactor

	// Calculate total rental rate per day
	const rentalRatePerDay = basePricePerDay + mileageRate + ageRate

	return rentalRatePerDay.toFixed(0)
}

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
	const { make, model, year } = car
	const url = new URL('https://cdn.imagin.studio/getimage')

	url.searchParams.append('customer', 'hrjavascript-mastery')
	url.searchParams.append('make', make)
	url.searchParams.append('modelFamily', model.split(' ')[0])
	url.searchParams.append('zoomType', 'fullscreen')
	url.searchParams.append('modelYear', `${year}`)
	url.searchParams.append('angle', `${angle}`)

	return `${url}`
}
