import * as React from 'react'
import Header from '@/components/Header'

const Home: React.FunctionComponent = () => {
  return (
    <>
      <Header />
      <div className="flex justify-center">
        <h1 className="text-9xl">Clone Wars</h1>
      </div>
    </>
  )
}

export default Home
