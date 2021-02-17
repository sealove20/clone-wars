import * as React from 'react'
import ThemeToggle from '@/components/ThemeToggle'

const Header: React.FunctionComponent = () => {
  return (
    <header className="w-screen h-24 px-8 shadow-md flex justify-center items-center bg-white dark:bg-gray-600">
      <ThemeToggle />
    </header>
  )
}

export default Header
