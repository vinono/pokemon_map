'use client'
import useSWR from "swr"

const fetcher = url => fetch(url).then(res => res.json())

export default function Home() {
  const { data } = useSWR(`https://pokeapi.co/api/v2/pokemon/`, fetcher)

  if (!data) return <h1>Loading...</h1>
  const { results } = data

  return (
    <section className="container py-6 mx-auto">
        <h1 className="text-4xl text-center mb-2">寶可夢圖鑑</h1>
        <div>
          {results.map(pokemon => {
            return <div key={pokemon.name}>{pokemon.name}</div>
          })}
        </div>
      </section>
    
  )
}
