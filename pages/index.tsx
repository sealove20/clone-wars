import * as React from 'react'
import axios from 'axios'
import Header from '@/components/Header'
import Paginator from '@/components/Paginator'

const Home: React.FunctionComponent = () => {
  const [characters, setCharacters] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [pageCount, setPageCount] = React.useState(0)

  const fetchCharacters = async (): Promise<void> => {
    try {
      setLoading(true)
      const response = await axios.get('https://swapi.dev/api/people/')
      setCharacters(response.data.results)
      console.log(response.data)
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

  const handlePageClick = (data: number): void => {
    fetchMoreCharacters(data + 1)
  }

  React.useEffect(() => {
    fetchCharacters()
  }, [])

  if (loading) {
    return <div className="flex justify-center items-center h-screen text-9xl">LOADING</div>
  }

  return (
    <>
      <Header />
      <section className="flex justify-center">
        <h1 className="text-5xl mt-4 whitespace-nowrap">Clone Wars</h1>
      </section>
      <section className="flex flex-wrap justify-center items-center mt-10">
        {characters.map(character => (
        <div key={character.name} className="h-64 w-64 dark:bg-gray-100 shadow-lg rounded-md my-5">
          <div className="flex justify-center bg-yellow-200 dark:bg-yellow-700 rounded-t-md">
            <h2 className="text-2xl text-center h-20">{character.name}</h2>
          </div>
        </div>
        ))}
      </section>
      <section className="flex justify-center my-5">
        <Paginator handlePageClick={handlePageClick} pageCount={pageCount} />
      </section>
    </>
  )
}

export default Home
