import { CarCard, CustomFilter, Hero, SearchBar } from '@/components'
import { FilterProps } from '@/types'
import { fetchCars } from '@/utils'
import { fuels, yearsOfProduction } from '@/utils/constants'

export default async function Home({ searchParams }: { searchParams: FilterProps }) {
	const allCars = await fetchCars({
		manufacturer: searchParams.manufacturer || '',
		year: searchParams.year || 2022,
		fuel: searchParams.fuel || '',
		limit: searchParams.limit || 10,
		model: searchParams.model || '',
	})

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
						<CustomFilter title="fuel" options={fuels} />
						<CustomFilter title="year" options={yearsOfProduction} />
					</div>
				</div>

				{!isDataEmpty ? (
					<section>
						<div className="home__cars-wrapper">{allCars?.map((car, i) => <CarCard key={i} car={car} />)}</div>
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
