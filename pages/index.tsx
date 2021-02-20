import * as React from 'react'
import axios from 'axios'
import Header from '@/components/Header'
import Paginator from '@/components/Paginator'
import Search from '@/components/Search'

const Home: React.FunctionComponent = () => {
  const [characters, setCharacters] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [pageCount, setPageCount] = React.useState(0)
  const [search, setSearch] = React.useState('')

  const fetchCharacters = async (): Promise<void> => {
    try {
      setLoading(true)
      const response = await axios.get('https://swapi.dev/api/people/')
      setCharacters(response.data.results)
      setPageCount(Math.ceil(response.data.count / response.data.results.length))
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  const fetchMoreCharacters = async (page = 1): Promise<void> => {
    try {
      const response = await axios.get(`https://swapi.dev/api/people/?page=${page}`)
      setCharacters(response.data.results)
    } catch (error) {
      console.log(error)
    }
  }

  const handleSearchChange = (event: React.FormEvent<HTMLInputElement>): void => {
    const value = event.currentTarget.value

    setSearch(value)
  }

  const handlePageClick = (data: number): void => {
    fetchMoreCharacters(data + 1)
  }

  const getFilteredCharacters = (): any => {
    return characters.filter(character => character.name.toLowerCase().includes(search.toLowerCase()))
  }

  React.useEffect(() => {
    fetchCharacters()
  }, [])

  if (loading) {
    return <div className="flex justify-center items-center h-screen text-5xl">loading</div>
  }

  return (
    <>
      <Header />
      <main className="flex flex-col items-center">
        <section className="flex justify-center">
          <h1 className="text-5xl mt-4 whitespace-nowrap">Clone Wars</h1>
        </section>
        <Search search={search} handleSearchChange={handleSearchChange} searchStyle="mt-8"/>
        <section className="flex flex-wrap justify-center items-center mt-10 sm:justify-around lg:max-w-screen-lg">
        {getFilteredCharacters().map(character => (
          <div key={character.name} className="h-72 w-72 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-lg rounded-md my-5 hover:scale-50">
            <div className="flex justify-center bg-yellow-200 dark:bg-yellow-700 rounded-t-md shadow-lg">
              <h2 className="text-2xl text-center h-20">{character.name}</h2>
            </div>
            <div className="flex flex-col justify-start items-center m-4">
              <p className="text-gray-200">Birth: {character.birth_year}</p>
              <p className="text-gray-200">Eye Color: {character.eye_color}</p>
              <p className="text-gray-200">Gender: {character.gender}</p>
              <p className="text-gray-200">Hair Color: {character.hair_color}</p>
              <p className="text-gray-200">Height: {character.height}</p>
              <p className="text-gray-200">Mass: {character.mass}</p>
              <p className="text-gray-200">Skin Color: {character.skin_color}</p>
            </div>
          </div>
        ))}
        </section>
        <section className="flex justify-center my-5">
          <Paginator handlePageClick={handlePageClick} pageCount={pageCount} />
        </section>
        </main>

    </>
  )
}

export default Home
