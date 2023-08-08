import { CarCard, CustomFilter, Hero, SearchBar } from '@/components'
import { fetchCars } from '@/utils'

export default async function Home() {
	const allCars = await fetchCars()

	const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars

	return (
		<main className="overflow-hidden">
			<Hero />

			<div id="discover" className="padding-x padding-y max-width mt-12">
				<div className="home__text-container">
					<h1 className="text-4xl font-extrabold">Car Catalogue</h1>
					<p>Explore the cars you might like</p>
				</div>

				<div className="home__filters">
					<SearchBar />

					<div className="home__filter-container">
						<CustomFilter title="fuel" />
						<CustomFilter title="year" />
					</div>
				</div>

				{!isDataEmpty ? (
					<section>
						<div className="home__cars-wrapper">{allCars?.map((car) => <CarCard car={car} />)}</div>
					</section>
				) : (
					<div className="home__error-container">
						<h2 className="text-xl font-bold text-black">Oooops, no results</h2>
						<p>{allCars?.message}</p>
					</div>
				)}
			</div>
		</main>
	)
}
