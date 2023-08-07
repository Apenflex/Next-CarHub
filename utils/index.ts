export async function fetchCars() {
	const headers = {
		'X-RapidAPI-Key': 'e22248be1dmsh23609edc7fe99f1p1092b7jsn6c3e816f0edf',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
	}
	const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', { method: 'GET', headers })
  console.log(response)
	const result = await response.json()

	return result
}
