import * as React from 'react'
import ThemeToggle from '@/components/ThemeToggle'

const Header: React.FunctionComponent = () => {
  return (
    <header role="header" className="w-screen h-24 shadow-md flex justify-center items-center bg-white dark:bg-gray-600">
      <ThemeToggle />
    </header>
  )
}

export default Header
