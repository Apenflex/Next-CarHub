export async function fetchCars() {
	const headers = {
		'X-RapidAPI-Key': '',
		'X-RapidAPI-Host': '',
	}
	const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', { method: 'GET', headers })
  console.log(response)
	const result = await response.json()

	return result
}
