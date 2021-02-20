import * as React from 'react'
import { FiSearch } from 'react-icons/fi'

type Props = {
  search: string
  handleSearchChange: (event: React.FormEvent<HTMLInputElement>) => void
  searchStyle?: string
}

const Search: React.FunctionComponent<Props> = ({ search, handleSearchChange, searchStyle }: Props) => {
  return (
    <div className={`flex ${searchStyle}`}>
      <input
      className="bg-yellow-200 border-yellow-400 dark:bg-yellow-700 border-2 rounded-l-md p-2 placeholder-gray-500 dark:placeholder-gray-300"
      type="text"
      placeholder="Search"
      value={search}
      onChange={handleSearchChange}
    />
    <button className="bg-blue-400 text-blue-50 rounded-r-md"><FiSearch className="h-11 w-7"/></button>
  </div>
  )
}

export default Search
