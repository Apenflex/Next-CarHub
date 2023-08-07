export async function fetchCars() {
	const headers = {
		'X-RapidAPI-Key': process.env.RAPID_API_KEY,
		'X-RapidAPI-Host': process.env.RAPID_API_HOST,
	}
	const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', { method: 'GET', headers })
  console.log(response)
	const result = await response.json()

	return result
}
